import React from "react"

const Footer = () => {
  return (
    <footer className='bg-black text-center py-12'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem]  2xl:max-w-[82.5rem]'>
        <div className='text-[0.875rem] text-zinc-50/50'>
          <div className=' mb-2'>
            2021 Copyright © Armando Jiménez. All Rights Reserved.
          </div>
          <a
            className='hover:underline hover:text-zinc-50/75'
            href='https://www.privacypolicies.com/live/6c817f22-a990-47e2-a5ee-af0a0a7a664f'
          >
            Privacy
          </a>
          <span className='mx-2'>·</span>
          <a
            className='hover:underline hover:text-zinc-50/75'
            href='https://armandojimenez.dev/believe-terms/index.html'
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
