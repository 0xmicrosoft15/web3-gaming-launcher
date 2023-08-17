import { app, ipcRenderer } from 'electron';
import axios from 'axios';
import path, { join } from 'path';
import { chmod, createWriteStream } from 'fs';

export function getBasePath() {
  const configFolder = app.getPath('appData')
  const baseRdiffPath = join(configFolder, 'hyperplay', 'tools')
  return baseRdiffPath;
}

export async function downloadRdiffForCurrentOS(): Promise<string> {
  console.log('Selecting rdiff binary');
  const baseURL = 'https://gateway.valist.io/ipfs/QmaZpLTHU6k4BA6feiNDtGA34Sm9hYWtwcgrrhwGG5kvNL/';

  let binaryName: string;
  switch (process.platform) {
    case 'win32':
      binaryName = 'windows/amd64/rdiff.exe';
      break;
    case 'darwin':
      binaryName = 'darwin/amd64/rdiff';
      break;
    case 'linux':
      binaryName = 'linux/amd64/rdiff';
      break;
    default:
      throw new Error('Unsupported platform');
  }

  const baseRdiffPath = await getBasePath();
  const downloadURL = `${baseURL}${binaryName}`;
  const targetPath = join(baseRdiffPath, path.basename(binaryName));
  const writer = createWriteStream(targetPath);

  console.log(`Downloading rdiff from ${downloadURL}`);
  const response = await axios.get(downloadURL, {
    responseType: 'stream',
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    }
  });

  if (response.status !== 200) {
    throw new Error(`Received HTTP ${response.status}: ${response.statusText}`);
  }

  // Pipe only if there's content
  if (response.headers['content-length'] !== '0') {
    response.data.pipe(writer);
  } else {
    throw new Error('No content received from the server.');
  }

  return new Promise((resolve, reject) => {
    writer.on('finish', () => resolve(setExecutable(targetPath)));
    writer.on('error', reject);
  });
}

const setExecutable = (targetPath: string) => {
  chmod(targetPath, 0o755, (err) => {
    if (err) {
      console.error(`Failed to set executable permission: ${err.message}`);
    } else {
      console.log('Executable permission set for rdiff');
    }
  });
  return targetPath;
};

export function getRdiffPathForCurrentOS(): string {
  const baseRdiffPath = getBasePath();
  switch (process.platform) {
    case 'win32':
      return join(baseRdiffPath, 'rdiff.exe');
    case 'darwin':
      return join(baseRdiffPath, 'rdiff');
    case 'linux':
      return join(baseRdiffPath, 'rdiff');
    default:
      throw new Error('Unsupported platform');
  }
}

export const downloadRdiff = () =>
  ipcRenderer.send('downloadRdiff');

