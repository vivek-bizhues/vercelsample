import Image from 'next/image'
import React from 'react'
import Logo from "@/../public/images/img/GetNudes.png"

const NewNavbar = () => {
  return (
    <div>
    <header>
    <div className="fixed left-0 right-0 top-0 z-50 h-12 bg-white/0 backdrop-blur-[10px] xl:h-[72px]">
      <div className="desktop flex h-full items-center px-4 xl:px-10">
        <a
          className="inline-block h-4 w-[102px] xl:h-6 xl:w-[152px]"
          href="/"
        >
         <Image src={Logo} alt='Logo' />
        </a>
        <div className="h-full w-0 flex-1">
          <nav className="hidden h-full w-full items-center justify-center gap-10 text-base font-bold text-main xl:flex">
            <a href="/generator">AI Girls</a>
            <a href="/inpaint">Edit</a>
            <a href="/gallery">Gallery</a>
          </nav>
        </div>
        <div className="flex justify-end xl:min-w-[206px]">
          <nav className="hidden h-full items-center gap-2 xl:flex">
            <div className="x_btn h-10 cursor-pointer bg-transparent leading-10">
              Login
            </div>
            <div className="x_btn x_btn_primary h-10 cursor-pointer leading-10">
              Sign up
            </div>
          </nav>
          <svg
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            className="xl:hidden"
          >
            <path
              d="M4 7h16M4 17h16"
              stroke="#212223"
              strokeWidth={2}
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default NewNavbar
