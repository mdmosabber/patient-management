import { Link, Head } from '@inertiajs/react';
import Layout from "@/Pages/front-end/Layout";
import Login from "@/Pages/Auth/Login";


export default function Home(props) {
    return (
        <>
            <Layout>

                <Head title="Home"/>
                <Login />

            </Layout>
        </>
    );
}
