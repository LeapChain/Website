import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/outline'

export const PageHeader = () => {
  let [showMenu, setToggle] = useState(false)
  const toggleMenu = () => setToggle(!showMenu)

  return (
    <>
      <nav className="py-4 sticky top-0 md dark:bg-black">
        <div className="flex flex-wrap justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src='/leapchain.svg' alt="Vercel Logo" width={203} height={32} />
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center md:hidden" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" onClick={toggleMenu} />
          </button>
          <div className={`w-full md:block md:w-auto absolute md:static bg-black top-16 ${showMenu ? 'sm:block' : 'hidden'}`} id="navbar-default">
            <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black">
              <li>
                <a href="https://discord.com/invite/WnDvJSGaTA" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Discord</a>
              </li>
              
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Polls</a>
              </li>

              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Connect Wallet</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}