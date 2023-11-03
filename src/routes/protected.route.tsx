import { Navigate, Outlet } from 'react-router-dom';
import { User, useUser } from '../contexts/user.context';

const ProtectedRoute = ({ isAuth, target }: any): any => {
    const { user } = useUser();
    console.log(user, isAuth);
    // const user = JSON.parse(localStorage.getItem('user') as string) as User;

    if (isAuth) {
        return user ? <Outlet /> : <Navigate to={target} replace />;
    }
    return user ? <Navigate to={target} replace /> : <Outlet />;
}

export default ProtectedRoute;