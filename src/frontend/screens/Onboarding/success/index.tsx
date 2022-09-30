import React, { useEffect } from 'react'
import { OnboardingModalConfig } from '../types'
import { wait } from '../../../../common/types/proxy-types'
import './index.css'

interface SuccessParams {
  setOnboardingModalParams: React.Dispatch<Partial<OnboardingModalConfig>>
  disableOnboarding: () => void
}

const Success: React.FC<SuccessParams> = function (props) {
  useEffect(() => {
    wait(4000).then(() => {
      props.disableOnboarding()
    })
    props.setOnboardingModalParams({
      title: 'SUCCESS',
      enableBackButton: false,
      enableCloseButton: true
    })
  }, [])
  return (
    <div>
      <div className="content-s text-secondary successSubtext">
        Your wallet is now connected! You&apos;re ready to game.{' '}
      </div>
      <div className="successImgContainer">
        <img
          src="/src/frontend/assets/hyperplay/success.svg"
          className="successImg"
        ></img>
      </div>
    </div>
  )
}

export default Success
