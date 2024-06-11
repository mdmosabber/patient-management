import { useState } from 'react';
import {Head, Link, useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import LoadingButton from "@/Components/LoadingButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SelectInput from "@/Components/SelectInput";

const Create = (props)=> {

    const { data, setData, errors, post,  processing } = useForm({
        name: '',
        email: '',
        phone: '',
        image: null,
        password: ''   
    });

    const [imagePreview, setImagePreview] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('password', data.password);
        formData.append('image', data.image);

        post(route('admin.store'), formData);
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setData('image', file);

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"> Create Admin/User  </h2>}
        >
            <Head title="Create Admin/User" />

            <div className="shadow m-[30px] p-8">

                <div>
                    <h2 className="mb-8 text-2xl font-bold">
                        <Link href={route('admin.show')} className="text-[#39A7FF] hover:text-[#027BFBE5]">
                            Admin/User
                        </Link>
                        <span className="font-medium text-indigo-600"> /</span> Create
                    </h2>


                    <div className="max-w-6xl mx-auto rounded shadow">

                        <form onSubmit={handleSubmit}>

                            <div className="grid grid-cols-1 md:grid-cols-2">

                                <div className='p-2'>
                                    <InputLabel htmlFor="name" value="Name"  required />
                                    <TextInput
                                        id="name"
                                        className="w-full mt-2"
                                        type="text"
                                        name="name"
                                        placeholder="Enter Name"
                                        errors={errors.name}
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                    />
                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="email" value="Email" required/>
                                    <TextInput
                                        id="email"
                                        className="w-full mt-2"
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        errors={errors.email}
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                    />
                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="phone" value="Phone" required/>
                                    <TextInput
                                        id="phone"
                                        className="w-full mt-2"
                                        type="text"
                                        name="phone"
                                        placeholder="Enter Phone Number"
                                        errors={errors.phone}
                                        value={data.phone}
                                        onChange={e => setData('phone', e.target.value)}
                                    />
                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="password" value="Password" required/>
                                    <TextInput
                                        id="password"
                                        className="w-full mt-2"
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        errors={errors.password}
                                        value={data.password}
                                        onChange={e => setData('password', e.target.value)}
                                    />
                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="image" value="Image" />
                                    <input
                                        id="image"
                                        className="w-full mt-2 border"
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />

                                    {errors.image && <p className='text-red-500 mt-1'>{errors.image}</p>}

                                    {imagePreview && (
                                        <img src={imagePreview} alt='Preview' className='mt-2 w-52' />
                                    )}
                                </div>

            
                            </div>

                            <div className="flex items-center justify-end px-2 py-2 border-t border-gray-200">

                                <LoadingButton
                                    loading={processing}
                                    type="submit"
                                    className="bg-[#39A7FF] py-3 px-4 rounded hover:bg-[#027BFBE5]"
                                >
                                    Create User
                                </LoadingButton>

                            </div>

                        </form>
                    </div>
                </div>

            </div>

        </AuthenticatedLayout>
    )
}

export default Create;
