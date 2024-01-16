import React from "react"

const NevilleGoddard = () => {
  return (
    <aside className='bg-gradient-primary text-center py-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem]  2xl:max-w-[82.5rem]'>
        <div className='flex mx-[-1.5rem] justify-center'>
          <div className=' px-6 w-full max-w-full xl:w-2/3'>
            <div className='text-white aside-text fs-1 xl:text-[2.5rem] mb-6'>
              “It is not what you want that you attract, you attract what you
              believe to be true.”
              <br /> - Neville Goddard
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

const RoyBennett = () => {
  return (
    <aside className='bg-gradient-primary text-center py-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem]  2xl:max-w-[82.5rem]'>
        <div className='flex mx-[-1.5rem] justify-center'>
          <div className=' px-6 w-full max-w-full xl:w-2/3'>
            <div className='text-white aside-text fs-1 xl:text-[2.5rem] mb-6'>
              “Great things happen to those who don't stop believing, trying,
              learning, and being grateful.”
              <br /> - Roy T. Bennett
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

const NapoleonHill = () => {
  return (
    <aside className='bg-gradient-primary text-center py-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem]  2xl:max-w-[82.5rem]'>
        <div className='flex mx-[-1.5rem] justify-center'>
          <div className=' px-6 w-full max-w-full xl:w-2/3'>
            <div className='text-white aside-text fs-1 xl:text-[2.5rem] mb-6'>
              “Set your mind on a definite goal and observe how quickly the
              world stands aside to let you pass.”
              <br /> - Napoleon Hill
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

const AbrahamHicks = () => {
  return (
    <aside className='bg-gradient-primary text-center py-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem]  2xl:max-w-[82.5rem]'>
        <div className='flex mx-[-1.5rem] justify-center'>
          <div className=' px-6 w-full max-w-full xl:w-2/3'>
            <div className='text-white aside-text fs-1 xl:text-[2.5rem] mb-6'>
              “You have the ability to quickly change your patterns of thought,
              and eventually your life experience.”
              <br /> – Abraham Hicks
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

const RoyBennettBelieve = () => {
  return (
    <aside className='bg-gradient-primary text-center py-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem]  2xl:max-w-[82.5rem]'>
        <div className='flex mx-[-1.5rem] justify-center'>
          <div className=' px-6 w-full max-w-full xl:w-2/3'>
            <div className='text-white aside-text fs-1 xl:text-[2.5rem] mb-6'>
              “Believe in yourself. You are braver than you think, more talented
              than you know, and capable of more than you imagine.”
              <br /> – Roy T. Bennett
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

const ArmandoJiménez = () => {
  return (
    <aside className='bg-gradient-primary text-center py-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem]  2xl:max-w-[82.5rem]'>
        <div className='flex mx-[-1.5rem] justify-center'>
          <div className=' px-6 w-full max-w-full xl:w-2/3'>
            <div className='text-white aside-text fs-1 xl:text-[2.5rem] mb-6'>
              “Believe in yourself, as simple as that. Never doubt it! You can
              achieve anything.”
              <br /> - Armando Jiménez
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

const Download = ({ downloadSectionRef }) => {
  return (
    <section
      className='bg-gradient-primary text-center py-20'
      id='download'
      ref={downloadSectionRef}
    >
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem]  2xl:max-w-[82.5rem]'>
        <h2 className='text-center text-white font-alt mb-6'>
          Download now and change your life!
        </h2>
        <div className='flex flex-col justify-center items-center lg:flex-row'>
          <a
            className='mb-6 w-[10.125rem] lg:mb-0 lg:mr-4'
            href='https://play.google.com/store/apps/details?id=dev.armandojimenez.believe'
          >
            <img
              src='https://believeaffirmations.com/assets/img/google-play-badge.svg'
              alt=''
            />
          </a>
          <a href='https://apps.apple.com/us/app/believe-daily-affirmations/id1565696391'>
            <img
              className='w-[10.125rem]'
              src='https://believeaffirmations.com/assets/img/app-store-badge.svg'
              alt=''
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export {
  NevilleGoddard,
  RoyBennett,
  NapoleonHill,
  AbrahamHicks,
  RoyBennettBelieve,
  ArmandoJiménez,
  Download,
}
