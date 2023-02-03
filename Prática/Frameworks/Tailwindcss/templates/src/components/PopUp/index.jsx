import { useState } from 'react'

import { Dialog } from '@headlessui/react'

export function PopUp() {

    let [isOpen, setIsOpen] = useState(false)

    return (
    <div className='flex items-center justify-center p-2'>
        <a 
            className='bg-slate-900 hover:bg-sky-500 transition text-white fixed top-2 right-2 p-2 rounded-md'
            href="/"
        >
            Home
        </a>

        <button 
            className='bg-sky-700 hover:bg-sky-500 transition text-white rounded-md p-4' 
            onClick={() => setIsOpen(true)}> Abrir PopUp
        </button>

        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(true)}
            className="bg-white fixed inset-0 flex flex-col items-center p-4 z-[999]"
        >

            <Dialog.Panel 
                className="bg-slate-900 text-white relative flex flex-col w-[25vw] rounded p-4">
                
                <button 
                    className='bg-red-700 hover:bg-red-500 transition text-white w-[24px] h-[24px] rounded-full absolute top-1 right-1'
                    onClick={() => setIsOpen(false)}
                > 
                    X
                </button>

                <Dialog.Title
                    className='text-xl'
                > 
                    Título
                </Dialog.Title>
    
                <Dialog.Description
                    className='text-lg'
                >
                    Descrição
                </Dialog.Description>

                <p>
                    Conteúdo
                </p>

            </Dialog.Panel>

        </Dialog>

    </div>
    );
}