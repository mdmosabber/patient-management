import {Head, Link, useForm, usePage} from "@inertiajs/react";
import DeleteButton from "@/Components/DeleteButton";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {
    const { patients } = usePage().props;
    const { data, links, per_page, current_page } = patients;

    const { data: searchData, setData, get,  delete: destroy} = useForm({
        search: '',
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('patient.index'), searchData);
    };

    const calculateIndex = (pageIndex, index) => {
        return (pageIndex - 1) * per_page + index + 1;
    };

    function deleteMethod(id) {
        if (confirm('Are you sure you want to delete this ?')) {
        destroy(route('patient.destroy',id));
    }
}

return (
<AuthenticatedLayout
    auth={props.auth}
    errors={props.errors}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"> Add Patient  </h2>}
    >
    <Head title="Add Patient"/>

    <div className="shadow m-[30px] p-8">

        <div className="flex flex-wrap items-center justify-between mb-4">
            <div>
                <Link href={route('patient.create')} className="bg-[#39A7FF] hover:bg-[#027BFBE5] text-white font-bold py-2 px-4 rounded sm:mt-0 mt-3">
                    <span>Create</span>
                    <span className="hidden md:inline"> Patient </span>
                </Link>

            </div>

            <form onSubmit={handleSearch}>
                <div className="sm:mt-0 mt-3">
                    <input
                        type='text'
                        placeholder="Search..."
                        className="border px-2 rounded-lg"
                        value={searchData.search}
                        onChange={(e) => setData('search', e.target.value)}
                    />
                    <button type="submit" className='border border-[#757575] p-2 rounded-lg'>Submit</button>
                </div>
            </form>
        </div>



        <div className="overflow-x-auto bg-white rounded">
            <table className="w-full whitespace-nowrap">
                <thead>
                    <tr className="font-bold text-left">
                        <th className="px-3 py-6">SL</th>
                        <th className="px-3 py-6"> First Name </th>
                        <th className="px-3 py-6"> Last Name </th>
                        <th className="px-3 py-6"> Email </th>
                        <th className="px-3 py-6"> Phone </th>
                        <th className="px-3 py-6"> Address </th>

                        <th className="px-3 py-6"> Gender </th>
                        <th className="px-3 py-6"> Age </th>
                        <th className="px-3 py-6"> Date </th>
                        <th className="px-3 py-6"> Time </th>
                        <th className="px-3 py-6"> Image </th>


                        <th className="px-3 py-6">  Action </th>
                    </tr>
                </thead>
                <tbody>

                {data.map(( item, index) => {
                    return (
                        <tr key={index} className="hover:bg-gray-100 focus-within:bg-gray-100">
                            <td className="border-t">
                                <span className="flex items-center px-3 py-3">
                                    {calculateIndex(current_page, index)}
                                </span>
                            </td>

                            <td className="border-t">
                                <span className="flex items-center px-3 py-3">
                                    {item.first_name}
                                </span>
                            </td>

                            <td className="border-t">
                                <span className="flex items-center px-3 py-3">
                                    {item.last_name}
                                </span>
                            </td>

                            <td className="border-t">
                                <span className="flex items-center px-3 py-3">
                                    {item.email}
                                </span>
                            </td>

                            <td className="border-t">
                                <span className="flex items-center px-3 py-3">
                                    {item.phone}
                                </span>
                            </td>

                            <td className="border-t">
                                <span className="flex items-center px-3 py-3">
                                    {item.address}
                                </span>
                            </td>

                            <td className="border-t">
                                <span className="flex items-center px-3 py-3">
                                    {item.gender}
                                </span>
                            </td>

                            <td className="border-t">
                                <span className="flex items-center px-3 py-3">
                                    {item.age}
                                </span>
                            </td>

                            <td className="border-t">
                                <Link href={route('patient.edit',item.id)}>
                                    <span className="inline-flex items-center rounded-md bg-green-100 mx-1 px-3 py-2 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Edit</span>
                                </Link>

                                <DeleteButton onDelete={ ()=> deleteMethod(item.id)}>
                                    <span className="inline-flex items-center rounded-md bg-red-100 mx-1 px-3 py-2 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Delete</span>
                                </DeleteButton>

                            </td>
                        </tr>
                    );
                })}

                {data.length === 0 && (
                    <tr>
                        <td className="px-6 py-4 border-t" colSpan="4">
                            No patient found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>

        <Pagination links={links} />


    </div>
</AuthenticatedLayout>
)
}

export default Index
