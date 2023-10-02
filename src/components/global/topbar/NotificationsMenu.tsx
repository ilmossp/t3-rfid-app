import React, { useState, useEffect, useRef } from 'react';
import notificationItems from '~/components/data/notificationItems';

const NotificationsMenu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null); // Define the ref type

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div
            ref={menuRef}
            className='bg-white dark:bg-gray-900  shadow flex justify-center items-center'
        >
            <div onClick={handleToggle} className="relative border-b-4 border-transparent py-3">
                <div
                    className={`flex justify-center items-center space-x-3 cursor-pointer ${open ? 'border-indigo-700 transform duration-300' : ''
                        }`}
                >
                    <div className="w-9 h-9 flex justify-center items-center mr-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg></div>
                </div>
                {open && (
                    <div className="absolute right-0 w-60 sm:w-96 dark:bg-gray-800 bg-white rounded-md shadow-lg overflow-hidde border dark:border-neutral-600 mt-5">
                        <div className='py-2 mx-2'>
                        {notificationItems.slice(0,4).map((item, index) => (
                            <a key={index} className="flex items-center m-2 px-4 py-3 hover:bg-gray-600 -mx-2">
                                <img className="h-8 w-8 rounded-full object-cover mx-1" src={item.avatarSrc} alt="avatar" />
                                <p className="text-gray-300 text-sm mx-2">
                                    <span className="font-bold" >{item.userName}</span> {item.action}{' '}
                                    <span className="font-bold text-blue-500" >{item.articleTitle}</span> article. {item.timeAgo}
                                </p>
                            </a>
                        ))}
                        </div>
                        <a className="block bg-gray-700 text-white text-center font-bold py-3">See all notifications</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotificationsMenu;
