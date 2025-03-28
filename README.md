# HyperPlay

## Index

- [HyperPlay](#hyperplay)
  - [Index](#index)
  - [Supported Operating Systems](#supported-operating-systems)
  - [Installation](#installation)
    - [Linux](#linux)
      - [Debian, Ubuntu and Derivatives](#debian-ubuntu-and-derivatives)
      - [Other Distributions (TAR.XZ)](#other-distributions-tarxz)
    - [Windows](#windows)
    - [macOS](#macos)
  - [Contributing](#contributing)
  - [Credits](#credits)

## Supported Operating Systems

- Windows 8+ (might work on Win7 if you have the latest PowerShell but we do not give support for it)
- Linux:
  - Ubuntu 20.04LTS or newer
  - Fedora 33 or newer
  - Arch Linux (Manjaro and Garuda as well)
  - HyperPlay will still work on most distros but we do not give official support for them. So do not open Issues here in these cases, instead, open a Discussion or try our Discord.
- SteamOS (downloading using Discover only)
- macOS 10.15 or higher

## Installation

### Linux

#### Debian, Ubuntu and Derivatives

Download the `hyperplay.x.x.x_amd64.deb` from the Releases section

```bash
sudo dpkg -i hyperplay.x.x.x_amd64.deb
```

#### Other Distributions (TAR.XZ)

Since these two distribution formats don't have a form of dependency management, make sure the `curl` command is available. You might run into weird issues if it's not.

For the tar.xz file, you need first to extract it somewhere, enter the folder and run:

```bash
chmod +x hyperplay
```

To run it use:

```bash
./hyperplay
```

### Windows

Download HyperPlay_Setup.x.x.x.exe or the Portable HyperPlay-x.x.x.exe file and run it. It will install it to the start menu and desktop, use those to run it.

### macOS

Download HyperPlay-x.x.x.dmg and move the HyperPlay App to the Applications folder.

## Screenshots

[//]: # 'Easy way to upload screenshots: https://stackoverflow.com/a/26601810'

<img width="1840" alt="Hyperplay main page" src="https://github.com/HyperPlay-Gaming/hyperplay-desktop-client/assets/38574891/18c94466-8511-4f47-8de7-e74bc9b54ddf">
<img width="1840" alt="Hyperplay wallet signature during game" src="https://github.com/HyperPlay-Gaming/hyperplay-desktop-client/assets/38574891/a56d34c6-f1a8-46dc-9a18-5e0c6035e468">
<img width="1840" alt="Hyperplay game detail page" src="https://github.com/HyperPlay-Gaming/hyperplay-desktop-client/assets/38574891/a4a2ffe9-2e2a-4f88-be34-8903d900385b">

## Contributing

Read our [Contribution License Agreement](https://github.com/HyperPlay-Gaming/hyperplay-desktop-client/blob/main/doc/cla.md).

### Local Development

This projects uses optional NPM packages.

For internal developers, use:

```bash
pnpm run setup
pnpm start
```

For external developers, use:

```bash
pnpm run setupWithoutOptional
pnpm start
```

#### M1/M2 Mac

If you are using an M1 or M2 Mac and receive the following error message:

```
Error: Cannot find module @rollup/rollup-darwin-arm64. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
```

Please try the following

```bash
rm -f pnpm-lock.yaml
rm -rf node_modules
pnpm cache delete
pnpm run setupWithoutOptional
pnpm start
```

#### Lavamoat

Please note that at times, the console may alert you to run `pnpm exec allow-scripts auto`. This is from `@lavamoat/allow-scripts` and is due to a dependency adding a new preinstall or postinstall script. After running `pnpm exec allow-scripts auto` and updating the package.json to enable or disable the script, please run `pnpm run setup` or `pnpm run setupWithoutOptional` again.

## Credits

### Those Awesome Guys: Gamepad prompts images

- URL: https://thoseawesomeguys.com/prompts/
