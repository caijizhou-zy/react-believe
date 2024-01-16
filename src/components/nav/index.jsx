import { useEffect, useState } from "react"
import "./index.css"

const Nav = ({ activeSection, download, handleOk }) => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleModal = () => {
    console.log("eee", "ceshi")
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        console.log("eee")
      } else {
        setShow(false)
      }
    }

    handleResize() // 初始化时调用一次

    window.addEventListener("resize", handleResize) // 监听窗口大小变化

    return () => {
      window.removeEventListener("resize", handleResize) // 清除监听器
    }
  }, [])

  return (
    <nav
      className='bg-white py-4 navShadow fixed top-0 right-0 left-0 z-[1] flex flex-wrap items-center justify-between lg:flex-nowrap lg:justify-start
    '
    >
      <div className='w-full containerWarp mx-auto px-12 sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem] 2xl:max-w-[82.5rem] flex items-center justify-between'>
        <a className='w-[9.0625rem] cursor-pointer' onClick={scrollToTop}>
          <img
            src='https://believeaffirmations.com/assets/img/believe_alt_light_en.svg'
            alt='Kiwi standing on oval'
          />
        </a>
        <button
          type='button'
          className='text-[0.875rem] py-3 px-4 flex items-center leading-none navbar-toggler text-[#212529] lg:hidden'
          onClick={() => setShow(!show)}
        >
          Menu
          <i className='icon-[ph--list] ml-1'></i>
        </button>

        <div
          className={`w-full overflow-hidden transition-[height] duration-700 ease-in-out basis-full grow flex flex-col items-start lg:overflow-visible lg:flex lg:basis-auto lg:flex-row lg:items-center ${
            show ? "h-[17.3125rem]" : "h-0"
          }`}
        >
          <ul className='flex flex-col mx-0 pl-0 mr-6 my-4 lg:my-0 lg:flex-row lg:ml-auto lg:mr-6'>
            <li>
              <a
                href='#features'
                className={
                  activeSection
                    ? "text-[#2937f0] nav-link pl-0 lg:pl-4"
                    : "nav-link pl-0 lg:pl-4"
                }
              >
                Features
              </a>
            </li>
            <li>
              <a
                href='#download'
                className={
                  download
                    ? "text-[#2937f0] nav-link pl-0 lg:pl-4"
                    : "nav-link pl-0 lg:pl-4"
                }
              >
                Download
              </a>
            </li>
            <li>
              <a
                className='nav-link pl-0 lg:pl-4'
                href='https://www.instagram.com/believe.apps/?hl=en'
                target='_blank'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className='nav-link pl-0 lg:pl-4'
                href='https://www.facebook.com/believe.apps'
                target='_blank'
              >
                Facebook
              </a>
            </li>
            <li>
              <a className='nav-link pl-0 lg:pl-4' href='#'>
                Press Kit
              </a>
            </li>
          </ul>
          <button
            className='rounded-full bg-[#2937f0] py-2 px-4 mb-2 flex items-center lg:mb-0'
            onClick={() => handleOk(true)}
          >
            <span className='flex items-center'>
              <i className='icon-[bi--chat-text-fill] text-white mr-2'></i>
              <span className='text-white font text-sm'>Contact us</span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
