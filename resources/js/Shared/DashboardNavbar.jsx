import React from "react";
import NavLink from "@/Components/NavLink";
import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography
} from "@material-tailwind/react";


import {
    InboxIcon,
    PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import {usePage} from "@inertiajs/react";



export default  function DashboardNavbar(){



    return(

        <>

            <Card className="h-[calc(100vh-2rem)] bg-transparent">
                <List>

                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        <ListItem className="py-3">
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </NavLink>

                    <NavLink href={route('patient.index')} active={route().current('patient.index')}>
                        <ListItem className="py-3">
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                             Patient Records
                        </ListItem>
                    </NavLink>

                    <NavLink href={route('admin.show')} active={route().current('admin.show')}>
                        <ListItem className="py-3">
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            All Admin / User
                        </ListItem>
                    </NavLink>


                </List>
            </Card>



       </>

    )
}
