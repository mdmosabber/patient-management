import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 w-full text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-teal-400 text-gray-900 focus:border-teal-400 bg-[#97C9DBB2]'
                    : 'border-transparent bg-transparent text-gray-500 hover:text-gray-700 hover:border-teal-400 focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
