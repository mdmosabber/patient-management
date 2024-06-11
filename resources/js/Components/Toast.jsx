// import React, { useState, useEffect } from 'react';
//
// const Toast = ({ flash }) => {
//     const [visible, setVisible] = useState(false);
//
//     useEffect(() => {
//         if (flash.message) {
//             setVisible(true);
//             const timeout = setTimeout(() => {
//                 setVisible(false);
//             }, 1500);
//
//             return () => clearTimeout(timeout);
//         }
//     }, [flash.message]);
//
//     return (
//         <div className={visible ? 'absolute flex max-w-xs w-full mt-4 mr-4 top-0 right-0 bg-green-100 rounded shadow p-4 z-[99] transition ease-in-out' : 'transition ease-in-out hidden'}>
//             <div className='mr-2'>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//             </div>
//             <div className='flex-1 text-gray-800'>
//                 {flash.message && <div> {flash.message} </div>}
//             </div>
//             <div className='mr-2'>
//                 <button className="align-top text-gray-500 hover:text-gray-700 focus:outline-none focus:text-indigo-600">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// }
//
// export default Toast;



import React, { useState, useEffect } from 'react';

const Toast = ({ flash }) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success'); // 'success' or 'error'

    useEffect(() => {
        if (flash.message || flash.error) {
            setVisible(true);
            setMessage(flash.message || flash.error);
            setType(flash.message ? 'success' : 'error');
            const timeout = setTimeout(() => {
                setVisible(false);
            }, 1500);

            return () => clearTimeout(timeout);
        }
    }, [flash.message, flash.error]);

    return (
        <div
            className={
                visible
                    ? `absolute flex max-w-xs w-full mt-4 mr-4 top-0 right-0 ${
                    type === 'success' ? 'bg-green-100' : 'bg-red-100'
                    } rounded shadow p-4 z-[99] transition ease-in-out`
                    : 'transition ease-in-out hidden'
            }
        >
            <div className='mr-2'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 ${type === 'success' ? 'text-green-600' : 'text-red-600'}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={type === 'success' ? 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' : 'M6 18L18 6M6 6l12 12'}
                    />
                </svg>
            </div>
            <div className='flex-1 text-gray-800'>
                {message && <div>{message}</div>}
            </div>
            <div className='mr-2'>
                <button
                    onClick={() => setVisible(false)}
                    className="align-top text-gray-500 hover:text-gray-700 focus:outline-none focus:text-indigo-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Toast;
