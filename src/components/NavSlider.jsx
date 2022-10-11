import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X, Home } from 'react-feather'
import { Link } from 'react-scroll'

const Cart = () => {
  const [open, setOpen] = useState(true)

  const handleClick = () => setOpen(!setOpen)

  return (
    <>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          <Link
                            activeClass="active"
                            to="home"
                            spy={false}
                            smooth={true}
                            offset={0}
                            duration={500}
                            delay={100}
                            className='hover:text-primary cursor-pointer'
                            onClick={handleClick}
                          >
                            <Home className='h-8 w-8'/> 
                          </Link>
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            
                            className="-m-2 p-2 text-gray-700 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <X className="h-8 w-8" aria-hidden="true" />
                          </button> 
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center custom-h text-xl font-bold gap-6">
                        <Link
                          activeClass="active"
                          to="about"
                          spy={false}
                          smooth={true}
                          offset={0}
                          duration={500}
                          delay={100}
                          className={`hover:text-primary cursor-pointer`}
                          onClick={handleClick}
                        >
                          About
                        </Link>
                        <Link
                          activeClass="active"
                          to="exp"
                          spy={false}
                          smooth={true}
                          offset={0}
                          duration={550}
                          delay={100}
                          className={`hover:text-primary cursor-pointer `}
                          onClick={handleClick}         
                        >
                          Experience
                        </Link>
                        <Link
                          activeClass="active"
                          to="skills"
                          spy={false}
                          smooth={true}
                          offset={0}
                          duration={600}
                          delay={100}
                          className={`hover:text-primary cursor-pointer `}
                          onClick={handleClick}
                        >
                          Skills
                        </Link>
                        <Link
                          activeClass="active"
                          to="works"
                          spy={false}
                          smooth={true}
                          offset={0}
                          duration={650}
                          delay={100}
                          className={`hover:text-primary cursor-pointer `}
                          onClick={handleClick}
                        >
                          Works
                        </Link>
                        <Link
                          activeClass="active"
                          to="contact"
                          spy={false}
                          smooth={true}
                          offset={0}
                          duration={700}
                          delay={100}
                          className={`hover:text-primary cursor-pointer `}
                          onClick={handleClick}
                        >
                          Contact
                        </Link>    
                      </div>
                      <div className='flex justify-center -mt-14'>
                        <a
                          href="https://donate.redcrossredcrescent.org/ua/donate/~my-donation?_cv=1"
                          target='_blank'
                          rel="noreferrer"
                          className="btn btn-sm btn-neutral p-3 pt-1.5 text-white rounded text-xs hover:text-success md:block"
                          >Support UA 
                        </a>
                      </div>
                    </div>    
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </> 
  )
}

export default Cart