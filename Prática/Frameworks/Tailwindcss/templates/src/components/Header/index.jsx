import { Menu } from '@headlessui/react'
import { Fragment } from 'react';

const routes = [
    {name: 'Home', href: '/'},
    {name: 'PopUp', href: '/popup'}
];

export function Header() {

  return (
    <div className='flex flex-col gap-4 items-center justify-center p-2'>
        <a 
            className='bg-slate-900 hover:bg-sky-500 transition text-white fixed top-2 right-2 p-2 rounded-md'
            href="/"
        >
            Home
        </a>

        <Menu>

            <Menu.Button
                className='bg-sky-700 hover:bg-sky-500 text-white transition p-2 rounded-md'>
                    Templates
            </Menu.Button>

            <Menu.Items 
                className='bg-slate-900 text-white flex flex-col w-fit p-4 rounded-md'
            >
                {
                    routes.map((route) => (
                        <Menu.Item
                            className='p-2 rounded-md'
                            key={route.href}
                            as={Fragment}
                        >
                            {
                                ({active}) => (
                                    <a 
                                        className={`${active && 'bg-sky-500'}`}
                                        href={route.href}
                                    >
                                        {route.name}
                                    </a>
                                )
                            }
                        </Menu.Item>
                    ))
                }

            </Menu.Items>

        </Menu>
        
    </div>
  )
}