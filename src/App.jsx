import { useState, useRef, useEffect } from "react"
import { Modal, Input } from "antd"
import Nav from "./components/nav/index"
import Header from "./components/header"
import {
  NevilleGoddard,
  RoyBennett,
  NapoleonHill,
  AbrahamHicks,
  RoyBennettBelieve,
  ArmandoJiménez,
  Download,
} from "./components/aside"
import {
  Features,
  Categories,
  Choose,
  Music,
  Available,
  ShareIt,
} from "./components/section"
import Footer from "./components/footer"
import "./index.css"

const App = () => {
  const featuresSectionRef = useRef(null)
  const downloadSectionRef = useRef(null)
  const [activeSection, setActiveSection] = useState("")
  const [download, setDownload] = useState("")
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [textArea, setTextArea] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY >= featuresSectionRef.current.offsetTop - 100 &&
        window.scrollY <
          featuresSectionRef.current.offsetTop +
            featuresSectionRef.current.offsetHeight
      ) {
        setActiveSection("features")
      } else {
        setActiveSection("")
      }

      if (
        window.scrollY >= downloadSectionRef.current.offsetTop - 100 &&
        window.scrollY <
          downloadSectionRef.current.offsetTop +
            downloadSectionRef.current.offsetHeight
      ) {
        setDownload("download")
      } else {
        setDownload("")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleOk = (e) => {
    setOpen(e)
  }

  const handleCanCel = () => {
    setName("")
    setEmail("")
    setTextArea("")
    setOpen(false)
  }

  return (
    <>
      <Nav
        activeSection={activeSection}
        download={download}
        handleOk={handleOk}
      />
      <Header />
      <NevilleGoddard />
      <Features featuresSectionRef={featuresSectionRef} />
      <RoyBennett />
      <Categories />
      <NapoleonHill />
      <Choose />
      <AbrahamHicks />
      <Music />
      <RoyBennettBelieve />
      <ShareIt />
      <ArmandoJiménez />
      <Available />
      <Download downloadSectionRef={downloadSectionRef} />
      <Footer />
      <Modal
        title={null}
        open={open}
        onOk={handleCanCel}
        onCancel={handleCanCel}
        footer={null}
        closeIcon={null}
        className='model_antd mx-auto'
      >
        <div className='overflow-hidden rounded-md'>
          <div className='bg-gradient-primary p-6 flex items-center'>
            <h5 className='text-white text-[1.25rem] font-semibold font-alt leading-normal'>
              Contact us
            </h5>
            <i
              className='icon-[ep--close-bold] ml-auto text-[#cccccc] text-xl cursor-pointer p-2 hover:text-white'
              onClick={() => setOpen(false)}
            ></i>
          </div>
          <div className=' p-6 border-0'>
            <div>
              <div className='mb-6 relative'>
                <Input
                  value={name}
                  placeholder='Name'
                  className='px-3 py-4'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mb-6 relative'>
                <Input
                  value={email}
                  placeholder='Email address'
                  className='px-3 py-4'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-6 relative'>
                <Input.TextArea
                  value={textArea}
                  placeholder='Message'
                  rows={6}
                  onChange={(e) => setTextArea(e.target.value)}
                />
              </div>
              <div className='grid'>
                <button
                  className=' text-white bg-[#2937f0] py-4 rounded-full font-medium text-base'
                  onClick={handleCanCel}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default App
