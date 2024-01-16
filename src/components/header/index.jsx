import React from "react"

const Header = () => {
  return (
    <header className='bg-[#f8f9fa] pt-36 pb-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem] 2xl:max-w-[82.5rem]'>
        <div className='flex flex-wrap mx-[-1.5rem] items-center'>
          <div className=' w-full max-w-full px-6 lg:w-2/4'>
            <div className='mb-12 text-center lg:text-left lg:mb-0'>
              <h1 className='display-1 leading-none font-light mb-4 xl:text-[5rem]'>
                Build a positive mindset.
              </h1>
              <p className=' font-medium text-[#6c757d] mb-12 text-[1.25rem]'>
                Powerful positive affirmations and reminders for self-worth and
                happiness. Right at the palm of your hands.
              </p>
              <div className='flex items-center flex-col lg:flex-row'>
                <a
                  className='mb-6 w-[10.125rem] lg:mr-4 lg:mb-0'
                  href='https://play.google.com/store/apps/details?id=dev.armandojimenez.believe'
                >
                  <img
                    src='https://believeaffirmations.com/assets/img/google-play-badge.svg'
                    alt='...'
                  />
                </a>
                <a href='https://apps.apple.com/us/app/believe-daily-affirmations/id1565696391'>
                  <img
                    className='w-[10.125rem]'
                    src='https://believeaffirmations.com/assets/img/app-store-badge.svg'
                    alt='...'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='w-full max-w-full px-6 lg:w-2/4'>
            <div className='px-12 sm:px-0'>
              <img
                src='https://believeaffirmations.com/assets/img/main.png'
                alt='main app feature image'
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
