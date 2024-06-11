import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import {Link, usePage} from '@inertiajs/react';
import DashboardNavbar from "@/Shared/DashboardNavbar";
import Toast from "@/Components/Toast";


export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const { flash } = usePage().props;

    return (
        <div className="flex h-screen overflow-hidden">

            <aside className={(showingNavigationDropdown ? 'translate-x-0' : 'lg:translate-x-0 -translate-x-full') + ' shadow-lg absolute left-0 top-0  flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#F2FBFF] duration-300 ease-linear lg:static'}>

                <div className="px-4 py-4">
                    <Link href={route('dashboard')}>
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>
                </div>

                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear z-9999">
                    <DashboardNavbar />
                </div>


            </aside>


            <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

                <Toast flash={flash} />

                <header className="sticky top-0 z-99 flex w-full bg-white shadow dark:bg-boxdark dark:drop-shadow-none">
                    <div className="flex flex-grow items-center justify-between px-4 py-4 relative">

                        <div className="flex items-center">

                            <div className="pr-4 lg:pl-0 lg:hidden">
                                <button
                                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path
                                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="lg:hidden">
                                <Link href={route('dashboard')}>
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            {header && (
                                <header className="hidden lg:block">
                                    <div className="pl-4 lg:pl-0">   {header} </div>
                                </header>
                            )}

                        </div>

                        <div className="absolute right-0 top-3">
                            <div className="relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {auth.user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                    </div>
                </header>



                <main> {children} </main>

            </div>
        </div>





    );
}
