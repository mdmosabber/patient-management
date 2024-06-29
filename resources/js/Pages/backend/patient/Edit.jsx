import React, { useState } from "react";
import {Head, Link, useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import TextArea from "@/Components/TextArea";
import LoadingButton from "@/Components/LoadingButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {

    const { patient } = usePage().props;

    const { data, setData, errors, post,  processing } = useForm({
        first_name: patient.first_name  || '',
        last_name:  patient.last_name   || '',
        email:      patient.email       || '',
        phone:      patient.phone       || '',
        address:    patient.address     || '',
        gender:     patient.gender      || '',
        age:        patient.age         || '',
        date:       patient.date        || '',
        time:       patient.time        || '',
        image:      patient.image       || ''
    });

    const [imagePreview, setImagePreview] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        post(route('patient.update.post', patient.id),{
            forceFormData: true,
        });
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"> Patient Update </h2>}
        >
            <Head title="Patient Update" />

            <div className="shadow m-[30px] p-8">

                <div>
                    <h2 className="mb-8 text-2xl font-bold">
                        <Link href={route('patient.index')} className="text-[#39A7FF] hover:text-[#027BFBE5]">
                            Patient
                        </Link>
                        <span className="font-medium text-indigo-600"> /</span> Update
                    </h2>


                    <div className="max-w-6xl mx-auto rounded shadow">

                        <form onSubmit={handleSubmit}>

                            <div className="grid md:grid-cols-2 grid-cols-1">

                                <div className='p-2'>
                                    <InputLabel htmlFor="first_name" value="First Name" required/>
                                    <TextInput id="first_name" className="w-full mt-2" type="text" name="first_name"
                                        placeholder="Patient First Name"
                                        errors={errors.first_name} value={data.first_name}
                                        onChange={e => setData('first_name', e.target.value)}
                                    />
                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="last_name" value="Last Name" required/>
                                    <TextInput id="last_name" className="w-full mt-2" type="text" name="last_name"
                                        placeholder="Patient Last Name"
                                        errors={errors.last_name} value={data.last_name}
                                        onChange={e => setData('last_name', e.target.value)}
                                    />
                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="email" value="Email"/>
                                    <TextInput id="email" className="w-full mt-2" type="text" name="email"
                                        placeholder="Patient Email"
                                        errors={errors.email} value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                    />
                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="phone" value="Phone" required/>
                                    <TextInput id="phone" className="w-full mt-2" type="text" name="phone"
                                        placeholder="Patient Phone Number"
                                        errors={errors.phone} value={data.phone}
                                        onChange={e => setData('phone', e.target.value)}
                                    />
                                </div>

                                <div className='p-2'>
                                    <InputLabel value="Gender" required/>
                                    <SelectInput className="p-2 w-full mt-2" name='gender'
                                        errors={errors.gender} value={data.gender}
                                        onChange={e => setData('gender', e.target.value)}>
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </SelectInput>
                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="age" value="Age" required/>
                                    <TextInput id="age" className="w-full mt-2" name="age" type="text"
                                        placeholder="Patient Age"
                                        errors={errors.age} value={data.age}
                                        onChange={e => setData('age', e.target.value)}
                                        isFocused={true}
                                    />
                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="date" value="Date" required/>
                                    <TextInput id="date" className="w-full mt-2" name="date" type="date"
                                        placeholder="Patient Date"
                                        errors={errors.date} value={data.date}
                                        onChange={e => setData('date', e.target.value)}
                                        isFocused={true}
                                    />
                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="time" value="Time" required/>
                                    <TextInput id="time" className="w-full mt-2" name="time" type="time"
                                        placeholder="Patient Time"
                                        errors={errors.time} value={data.time}
                                        onChange={e => setData('time', e.target.value)}
                                        isFocused={true}
                                    />
                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="image" value="Image" required/>
                                    <input
                                        id="image"
                                        className="w-full mt-2"
                                        type="file"
                                        name="image"
                                        onChange={handleImageChange}
                                    />
                                    {errors.image && <p className='text-red-500 mt-1'>{errors.image}</p>}

                     
                                    {imagePreview ? (
                                        <img src={imagePreview} alt='Preview' className='mt-2 w-52' />
                                    ) : data.image ? (
                                        <img src={`/${data.image}`} alt='Existing Image' className='mt-2 w-52' />                                  
                                    ) : null}

                                </div>

                                <div className='p-2'>
                                    <InputLabel htmlFor="address" value="Address" required/>
                                    <TextArea id="address" className="w-full mt-2" name="address"
                                        placeholder="Patient Address"
                                        errors={errors.address} value={data.address}
                                        onChange={e => setData('address', e.target.value)}
                                        isFocused={true}
                                    />
                                </div>

                            </div>

                            <div className="flex items-center justify-end px-2 py-2 border-t border-gray-200">
                                <LoadingButton loading={processing} type="submit"
                                    className="bg-[#39A7FF] py-3 px-4 rounded hover:bg-[#027BFBE5]">
                                    Create Patient Info
                                </LoadingButton>
                            </div>

                        </form>


                    </div>
                </div>

            </div>

        </AuthenticatedLayout>
    )
};

export default Edit;
