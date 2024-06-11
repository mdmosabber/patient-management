import { Head } from '@inertiajs/react';

export default function Layout({ children }) {
    return (
        <main>
            <Head>
                <meta name="description" content="This is bigest patient management website in bangladesh" />
                <meta name="keywords" content="Patient, Management, Laravel, React, Next js, Vue js, PHP, Inertia js, Node js, Express js, Javascript, HTML, CSS, Wordpress" />
                <meta name="author" content="Md. Mosabber Hossen" />
            </Head>


            {children}


            <div className="footer">
                <p className="text-center"> &copy; All Reserved By Mosabber</p>
            </div>



        </main>
    )
}
