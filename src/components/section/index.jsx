import React from "react"

const Features = ({ featuresSectionRef }) => {
  return (
    <section className='bg-white py-20' id='features' ref={featuresSectionRef}>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem] 2xl:max-w-[82.5rem]'>
        <div className='flex mx-[-1.5rem] items-center flex-wrap'>
          {/* 图标icon */}
          <div className='w-full max-w-full px-6 lg:w-2/3 mb-12 lg:order-1 lg:mb-0'>
            <div className=' px-12 w-full mx-auto'>
              <div className='flex mx-[-1.5rem] flex-wrap'>
                <div className='w-full max-w-full mb-12 md:w-1/2 px-6'>
                  <div className='text-center'>
                    <i className='icon-[mdi--bell-alert-outline] text-gradient text-[4rem] mb-4'></i>
                    <h3 className='font-alt text-[1.75rem] mb-2'>Reminders</h3>
                    <p className='text-[#6c757d]'>
                      Receive powerful positive affirmations and reminders to
                      practice and write your own.
                    </p>
                  </div>
                </div>
                <div className='w-full max-w-full mb-12 md:w-1/2 px-6'>
                  <div className='text-center'>
                    <i className='icon-[radix-icons--grid] text-gradient text-gradient text-[4rem] mb-4'></i>
                    <h3 className='font-alt text-[1.75rem] mb-2'>
                      Curated Categories
                    </h3>
                    <p className='text-[#6c757d]'>
                      Positive affirmations for any situation or moment!
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex mx-[-1.5rem] flex-wrap'>
                <div className='w-full max-w-full mb-12 md:w-1/2 px-6'>
                  <div className='text-center'>
                    <i className='icon-[entypo--brush] text-gradient text-gradient text-[4rem] mb-4'></i>
                    <h3 className='font-alt text-[1.75rem] mb-2'>
                      200+ Themes
                    </h3>
                    <p className='text-[#6c757d]'>
                      Beautiful themes that you can edit and create your own.
                    </p>
                  </div>
                </div>
                <div className='w-full max-w-full mb-12 md:w-1/2 px-6'>
                  <div className='text-center'>
                    <i className='icon-[bi--pen] text-gradient text-gradient text-[4rem] mb-4'></i>
                    <h3 className='font-alt text-[1.75rem] mb-2'>
                      Add your own
                    </h3>
                    <p className='text-[#6c757d]'>
                      Write affirmations created just by you and only for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full max-w-full px-6 lg:w-2/6 lg:order-none'>
            <div className='px-12 sm:px-0'>
              <img
                src='https://believeaffirmations.com/assets/img/noti_cell.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Categories = () => {
  return (
    <section className='bg-[#f8f9fa] py-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem] 2xl:max-w-[82.5rem]'>
        <div className='flex flex-wrap mx-[-1.5rem] justify-center items-center lg:justify-between'>
          <div className='w-full max-w-full px-6 lg:w-5/12'>
            <h2 className='display-4 font-light mb-6 leading-none xl:text-[3.5rem]'>
              Categories for any situation
            </h2>
            <p className='mb-12 font-medium text-[#6c757d] text-[1.25rem] lg:mb-0'>
              Curated categories with thousands of affirmations that resonate
              with you. Including love, abundance, happiness, sleeping,
              parenting, and much more, with more added constantly.
            </p>
          </div>
          <div className='w-full max-w-full px-6 sm:w-2/3 md:w-2/4'>
            <div className='px-12 sm:px-0'>
              <img
                src='https://believeaffirmations.com/assets/img/categories.png'
                alt='...'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Choose = () => {
  return (
    <section className='bg-[#f8f9fa] py-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem] 2xl:max-w-[82.5rem]'>
        <div className='flex flex-wrap mx-[-1.5rem] justify-center items-center lg:justify-between'>
          <div className='w-full max-w-full px-6 lg:w-5/12'>
            <h2 className='display-4 font-light mb-6 leading-none xl:text-[3.5rem]'>
              Choose or create your art
            </h2>
            <p className='mb-12 font-medium text-[#6c757d] text-[1.25rem] lg:mb-0'>
              Choose from over 200+ pre-made themes, or edit them and create
              your own. You can use your images from your camera or gallery, and
              also you can use GIFs, stickers, and our pre-made backgrounds.
            </p>
          </div>
          <div className='w-full max-w-full px-6 sm:w-2/3 md:w-2/4'>
            <div className='px-12 sm:px-0'>
              <img
                src='https://believeaffirmations.com/assets/img/themes.png'
                alt='...'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Music = () => {
  return (
    <section className='bg-[#f8f9fa] py-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem] 2xl:max-w-[82.5rem]'>
        <div className='flex flex-wrap mx-[-1.5rem] justify-center items-center lg:justify-between'>
          <div className='w-full max-w-full px-6 lg:w-5/12'>
            <h2 className='display-4 font-light mb-6 leading-none xl:text-[3.5rem]'>
              Music/Sounds & Tools
            </h2>
            <p className='mb-12 font-medium text-[#6c757d] text-[1.25rem] lg:mb-0'>
              Beautiful music/sounds to help you relax while reading, and fun
              tools & mini-games to re-program your mind.
            </p>
          </div>
          <div className='w-full max-w-full px-6 sm:w-2/3 md:w-2/4'>
            <div className='px-12 sm:px-0'>
              <img
                src='https://believeaffirmations.com/assets/img/tools.png'
                alt='...'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Available = () => {
  return (
    <section className='bg-[#f8f9fa] py-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem] 2xl:max-w-[82.5rem]'>
        <div className='flex flex-wrap mx-[-1.5rem] justify-center items-center lg:justify-between'>
          <div className='w-full max-w-full px-6 sm:w-2/3 md:w-2/4'>
            <div className='px-12 sm:px-0'>
              <img
                src='https://believeaffirmations.com/assets/img/family.png'
                alt='...'
              />
            </div>
          </div>
          <div className='w-full max-w-full px-6 lg:w-5/12'>
            <h2 className='display-4 font-light mb-6 leading-none xl:text-[3.5rem]'>
              Available for all your devices
            </h2>
            <p className='mb-12 font-medium text-[#6c757d] text-[1.25rem] lg:mb-0'>
              Available for iOS and Android, including iPads and Android
              tablets. Featuring a beautiful modern responsive design, dark mode
              support, and accessibility in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const ShareIt = () => {
  return (
    <section className='bg-white py-20'>
      <div className='w-full mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem] 2xl:max-w-[82.5rem]'>
        <div className='flex mx-[-1.5rem] items-center flex-wrap'>
          {/* 图标icon */}
          <div className='w-full max-w-full px-6 lg:w-2/3 mb-12 lg:order-1 lg:mb-0'>
            <div className=' px-12 w-full mx-auto'>
              <div className='flex mx-[-1.5rem] flex-wrap'>
                <div className='w-full max-w-full mb-12 md:w-1/2 px-6'>
                  <div className='text-center'>
                    <i className='icon-[bi--share] text-gradient text-[4rem] mb-4'></i>
                    <h3 className='font-alt text-[1.75rem] mb-2'>Reminders</h3>
                    <p className='text-[#6c757d]'>
                      Receive powerful positive affirmations and reminders to
                      practice and write your own.
                    </p>
                  </div>
                </div>
                <div className='w-full max-w-full mb-12 md:w-1/2 px-6'>
                  <div className='text-center'>
                    <i className='icon-[bi--heart-half] text-gradient text-gradient text-[4rem] mb-4'></i>
                    <h3 className='font-alt text-[1.75rem] mb-2'>
                      Curated Categories
                    </h3>
                    <p className='text-[#6c757d]'>
                      Positive affirmations for any situation or moment!
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex mx-[-1.5rem] flex-wrap'>
                <div className='w-full max-w-full mb-12 md:w-1/2 px-6'>
                  <div className='text-center'>
                    <i className='icon-[uiw--search] text-gradient text-gradient text-[4rem] mb-4'></i>
                    <h3 className='font-alt text-[1.75rem] mb-2'>
                      200+ Themes
                    </h3>
                    <p className='text-[#6c757d]'>
                      Beautiful themes that you can edit and create your own.
                    </p>
                  </div>
                </div>
                <div className='w-full max-w-full mb-12 md:w-1/2 px-6'>
                  <div className='text-center'>
                    <i className='icon-[bi--clock-history] text-gradient text-gradient text-[4rem] mb-4'></i>
                    <h3 className='font-alt text-[1.75rem] mb-2'>
                      Add your own
                    </h3>
                    <p className='text-[#6c757d]'>
                      Write affirmations created just by you and only for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full max-w-full px-6 lg:w-2/6 lg:order-none'>
            <div className='px-12 sm:px-0'>
              <img
                src='https://believeaffirmations.com/assets/img/sharing.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Features, Categories, Choose, Music, Available, ShareIt }
