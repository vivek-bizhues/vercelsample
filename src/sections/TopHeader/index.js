import React from 'react'

const TopHeader = () => {
  return (
    <div>
    <div className="relative">
    <div className="absolute left-0 right-0 h-full w-full">
      <img
        src="https://aipx.faceplay.me/home-bg@3x.png"
        alt="background"
        className="h-full w-full"
      />
    </div>
    <div className="desktop relative z-10 items-center px-4 pt-[64px] pb-8 text-center xl:flex xl:px-10 xl:pt-[164px] xl:pb-[156px] xl:text-left">
      <div className="flex-1 xl:pr-60">
        <h2 className="mb-4 text-[28px] font-bold leading-none text-[#181d26] xl:mb-6 xl:text-5xl">
          AI Nude.AI - FREE Deepnude Generator to Undress Photos for Nude
          Girls
        </h2>
        <p className="text-sm leading-6 text-[#141517] xl:text-base">
          AINude.AI is an AI nude maker to edit and generate AI deepnude
          pictures from text. Undress any girl photo or image to AI nudes
          NOW!
        </p>
        <div className="mt-4 h-[121.87vw] w-[91.5vw] overflow-hidden rounded-base bg-white xl:hidden">
          <video
            className="h-full w-full"
            muted={true}
            autoPlay = {true}
            playsInline={true}
            loop={true}
            preload="auto"
            data-position="video"
          >
            <source
              src="https://aipx.faceplay.me/landing-edit.webm"
              type="video/webm"
            />
            <source src="https://aipx.faceplay.me/landing-edit.mp4" />
          </video>
        </div>
        <a
          className="mt-5 inline-flex h-12 cursor-pointer select-none items-center gap-2 rounded-base bg-primary px-6 text-base font-bold leading-12 text-white active:opacity-70 xl:mt-12 xl:h-14 xl:px-8 xl:text-lg xl:leading-14"
          href="/inpaint"
        >
          <span>Free trial</span>
          <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
            <path
              d="m10.707 2.293 5 5a1 1 0 0 1 0 1.414l-.032.032-.52.52-.197.198-1.226 1.226-.525.524-.524.525-1.226 1.226-.198.197-.49.49-.062.062a1 1 0 1 1-1.414-1.414l.032-.032.511-.511.089-.09 1.343-1.343.525-.524.524-.525.269-.269L1 9a1 1 0 1 1 0-2l11.584-.001-3.291-3.292a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div className="hidden h-[640px] w-[480px] overflow-hidden rounded-base bg-white xl:block">
        <video
          className="h-full w-full"
          muted={true}
          autoPlay = {true}
          playsInline={true}
          loop={true}
          preload="auto"
          data-position="video"
        >
          <source
            src="https://aipx.faceplay.me/landing-edit.webm"
            type="video/webm"
          />
          <source src="https://aipx.faceplay.me/aipx/landing-edit.mp4" />
        </video>
      </div>
    </div>
  </div>
    </div>
  )
}

export default TopHeader
