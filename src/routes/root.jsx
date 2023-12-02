import FBMobileIcon from 'assets/images/fb-mobile-icon.svg'
import InsMobileIcon from 'assets/images/instagram-mobile-icon.svg'
import Logo from 'assets/images/logo.png'
import Menu from 'assets/images/menu.svg'
import XMobileIcon from 'assets/images/tw-mobile-icon.svg'

import { Link, Outlet } from 'react-router-dom'

import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { classNames } from 'utils'

export const Root = () => {
  const [navList, setNavList] = useState([
    { name: 'About', href: '/#about', current: true },
    { name: 'Team & Partner', href: '/#team-partner', current: false },
    { name: 'Join Us', href: '/#join-us', current: false },
    { name: 'Blog', href: '/blogs', current: false }
  ])

  const [activeName, setActiveName] = useState('')

  return (
    <div className=''>
      <Disclosure
        as='nav'
        className='fixed left-0 top-0 z-50 w-full bg-secondary lg:bg-white'
      >
        {({ open }) => (
          <>
            <div className='flex h-[112px] w-full items-center justify-between px-6 lg:px-20'>
              <Link className='' to={'/'}>
                <img
                  src={Logo}
                  alt='b.army logo'
                  className='h-6 w-[101px] lg:h-[42px] lg:w-[171px]'
                />
              </Link>

              <div className='hidden items-center justify-between gap-[70px] lg:flex'>
                {navList.map((_) => (
                  <HashLink
                    className='group relative text-2xl font-bold leading-[50px] text-primary'
                    to={_.href}
                  >
                    <div>{_.name}</div>
                    <div
                      className='absolute bottom-0.5 left-0 h-1.5 w-[0%] bg-[#D52827] transition-all
                      duration-300 ease-in-out group-hover:w-full'
                    ></div>
                  </HashLink>
                ))}
              </div>

              <Disclosure.Button
                className='relative inline-flex items-center justify-center rounded-md p-2 hover:bg-white
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden'
              >
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open main menu</span>
                <div className=''>
                  <img src={Menu} alt='menu bar mobile' />
                </div>
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className='lg:hidden'>
              <div className='space-y-1 px-6 pb-3'>
                {navList.map((_) => (
                  <Disclosure.Button
                    key={_.name}
                    as='a'
                    href={_.href}
                    className={classNames(
                      _.current
                        ? 'bg-primary text-white'
                        : 'text-primary hover:bg-primary hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={_.current ? 'page' : undefined}
                  >
                    {_.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className='pb-[85.53px] pt-[112px] lg:pb-[137px]'>
        <Outlet />
      </div>

      <footer className='footer-shadow bg-white font-poppins lg:pt-[38px]'>
        <div className=' px-6 pt-[47px] lg:px-20'>
          <div className='pb-[43.5px] lg:pb-0'>
            <img
              src={Logo}
              alt='b.army logo'
              className='h-7 w-[118px] lg:h-[42px] lg:w-[171px]'
            />
          </div>

          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div
              className='hidden space-y-[41px] py-8 text-[#23262F]
              lg:block lg:max-w-[372px] lg:space-y-5 lg:py-0 lg:text-primary'
            >
              <p className='text-xs font-bold uppercase opacity-0'>abc</p>
              <div className='space-y-16'>
                <p className='text-sm leading-6'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </p>
                <p className='text-sm leading-6'>@Lorem</p>
              </div>
            </div>

            <div
              className='space-y-[41px] border-t border-t-[#E6E8EC] py-8 text-[#23262F] 
              lg:max-w-[120px] lg:space-y-5 lg:border-none lg:py-0 lg:pb-[53px] lg:text-primary'
            >
              <h3 className='text-xs font-bold uppercase'>About us</h3>
              <div className='space-y-2'>
                <p className='text-sm leading-6'>43252 Borer Mountains</p>
                <p className='text-sm leading-6'>Zackerychester</p>
                <p className='text-sm leading-6'>Bahamas</p>
                <p className='text-sm leading-6'>732-528-4945</p>
              </div>
            </div>

            <div
              className='space-y-[41px] border-t border-t-[#E6E8EC] py-8 text-[#23262F] 
              lg:max-w-[282px] lg:space-y-5 lg:border-none lg:py-0 lg:pb-[53px] lg:text-primary'
            >
              <h3 className='text-xs font-bold uppercase'>Contact us</h3>
              <div className='space-y-2'>
                <p className='text-sm leading-6'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </p>
                <p className='text-sm leading-6'>+908 89097 890</p>
              </div>
            </div>

            <div className='hidden w-[184px] lg:block lg:py-0 lg:pb-[53px]'>
              <div className='flex h-full items-end justify-between'>
                <div className='social-shadow flex aspect-square w-[34px] items-center justify-center rounded-full bg-white'>
                  <img
                    src={FBMobileIcon}
                    alt='facebook mobile icon'
                    className='w-3'
                  />
                </div>
                <div className='social-shadow flex aspect-square w-[34px] items-center justify-center rounded-full bg-white'>
                  <img src={XMobileIcon} alt='x mobile icon' className='w-3' />
                </div>
                <div className='social-shadow flex aspect-square w-[34px] items-center justify-center rounded-full bg-white'>
                  <img
                    src={InsMobileIcon}
                    alt='instagram mobile icon'
                    className='w-3'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='block space-y-6 border-t border-t-[#E6E8EC] pb-6 pt-[57px] lg:hidden'>
            <p className='text-xs leading-5 text-[#777E90]'>
              Copyright © 2023 B.Army. All rights reserved
            </p>
            <div className='flex gap-6'>
              <img
                src={FBMobileIcon}
                alt='facebook mobile icon'
                className='w-5'
              />
              <img
                src={XMobileIcon}
                alt='facebook mobile icon'
                className='w-5'
              />
              <img
                src={InsMobileIcon}
                alt='facebook mobile icon'
                className='w-5'
              />
            </div>
          </div>
        </div>

        <div className='hidden justify-center border-t border-t-primary px-6 py-[29px] text-[13px] font-bold text-primary lg:flex lg:px-20'>
          Copyright ® 2021 Lorem All rights Rcerved
        </div>
      </footer>
    </div>
  )
}
