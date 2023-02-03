import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export function PopUp() {
    let [isOpen, setIsOpen] = useState(false)

    return (
    <div className='flex items-center justify-center h-screen'>
    <button className='bg-sky-700 hover:bg-sky-500 text-white transition p-4 rounded-md' onClick={() => setIsOpen(true)}>Abrir PopUp</button>
    <Dialog
        open={isOpen}
        onClose={() => setIsOpen(true)}
        className="relative z-50"
    >
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-white">
            <Dialog.Panel className="w-full max-w-sm rounded relative bg-slate-900 text-white p-4">
                <button className='bg-red-700 hover:bg-red-500 transition text-white w-[24px] h-[24px] rounded-full absolute top-1 right-1' onClick={() => setIsOpen(false)}>X</button>
                <Dialog.Title>Complete your order</Dialog.Title>
    
                <Dialog.Description>
                    This will permanently deactivate your account
                </Dialog.Description>
                <p>
                    Are you sure you want to deactivate your account? All of your data
                    will be permanently removed. This action cannot be undone.
                </p>
    
            </Dialog.Panel>
        </div>
    </Dialog>
    </div>
    );
}