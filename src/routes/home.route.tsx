import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <Fragment>
            <h1>This is the home page</h1>
            <Outlet />
        </Fragment>
    );
}

export default Home;