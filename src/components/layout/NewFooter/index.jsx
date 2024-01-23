import React from 'react'
import Logo from "@/../public/images/img/GetNudes.png"
import Image from 'next/image'

const NewFooter = () => {
  return (
    <div>
    <footer className="bg-footer py-4 text-xs text-[#15162e] xl:py-7">
    <div className="desktop items-center px-4 xl:flex xl:px-10">
      <div className="mb-4 h-3 w-[76px] xl:mb-0 xl:h-4 xl:w-[102px]">
       <Image src={Logo} alt='Logo' />
      </div>
      <div className="flex-1 items-center justify-end gap-12 xl:flex">
        <div className="flex items-center gap-3">
          <a
            className="cursor-pointer hover:underline"
            href="/terms"
          >
            Terms of service
          </a>
          <a
            className="cursor-pointer hover:underline"
            href="/privacypolicy"
          >
            Privacy policy
          </a>
          
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default NewFooter
