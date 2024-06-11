import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteButton from "@/Components/DeleteButton";

const Trashed = (props)=> {

    const { trasheds } = usePage().props;
    const { delete: destroy} = useForm();

    function deleteMethod(id) {

        if (confirm('Are you sure you want to permanent delete this ?')) {
            destroy(route('admin.permanent-delete',id));
        }
    }

    return(
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"> Trashed Admin / User  </h2>}
        >
            <Head title="Trashed Admin/User"/>

            <div className="shadow m-[30px] p-8">
                <Link className="bg-[#39A7FF] hover:bg-[#027BFBE5] text-white font-bold py-2 px-4 rounded sm:mt-0 mt-3" href={route('admin.show')}>
                    Back
                </Link>

             

                    <div className="overflow-x-auto bg-white rounded">
                        <table className="w-full whitespace-nowrap">
                            <thead>
                            <tr className="font-bold text-left">
                                <th className="px-3 py-6">SL</th>
                                <th className="px-3 py-6"> Name </th>
                                <th className="px-3 py-6"> Email </th>
                                <th className="px-3 py-6"> Phone </th>                           
                                <th className="px-3 py-6"> Image </th>
                                <th className="px-3 py-6"> Deleted By </th>
                                <th className="px-3 py-6">  Action </th>
                            </tr>
                            </thead>
                            <tbody>


                            {trasheds.map(( item, index) => {
                                return (
                                    <tr key={index} className="hover:bg-gray-100 focus-within:bg-gray-100">
                                        <td className="border-t">
                                        <span className="flex items-center px-3 py-3">
                                            { index }
                                        </span>
                                        </td>

                                        <td className="border-t">
                                        <span className="flex items-center px-3 py-3">
                                            {item.name}
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
                                             <img src={'/'+ item.image} alt={item.image  || 'Image'} width={100}/>
                                            </span>
                                        </td>

                                        <td className="border-t">
                                            <span className="flex items-center px-3 py-3">
                                                   {item.deleted_by}
                                            </span>
                                        </td>

                                        <td className="border-t">                                          
                                            <Link href={route('admin.user.restore',item.id)}>
                                                <span className="inline-flex items-center rounded-md bg-green-100 mx-1 px-3 py-2 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Restore</span>
                                            </Link>                                       
                                            <DeleteButton onDelete={ ()=> deleteMethod(item.id)}>
                                                <span className="inline-flex items-center rounded-md bg-red-100 mx-1 px-3 py-2 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Permanent Delete</span>
                                            </DeleteButton>                                           
                                        </td>
                                    </tr>
                                );
                            })}

                            {trasheds.length === 0 && (
                                <tr>
                                    <td className="px-6 py-4 border-t" colSpan="4">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>

            

            </div>
        </AuthenticatedLayout>
    )

}

export default Trashed
