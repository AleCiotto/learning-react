import { useState } from 'react';
import { useUser, UserRole } from '../contexts/user.context';

const Catalogs = () => {
    const { user } = useUser();

    return (<>
        <h2>This is catalogs page. This page is protected, you must be logged with admin permission</h2>

        {
            user && user.role > UserRole.Intermediate ?
                <>You are authorized to modify this section</> :
                <><b>You cant edit this section due to insufficient permissions</b></>
        }
    </>)
}

export default Catalogs;