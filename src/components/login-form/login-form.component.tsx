import { useState } from 'react';
import { useUser, User, UserRole } from '../../contexts/user.context';

const LogInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [pending, setPending] = useState(false);
    const { user, setUser } = useUser();


    const onSubmitHandler = (formEvent: any): void => {
        formEvent.preventDefault();
        setPending(true);

        setTimeout(() => {
            setPending(false);
            if (username != 'pippo') {
                const loggedUser = {
                    name: 'Alessandro',
                    surname: 'Mercurio',
                    role: UserRole.Admin,
                    id: 0
                };

                if (username == 'simpleuser') {
                    loggedUser.name = 'simpleuser';
                    loggedUser.surname = 'junior';
                    loggedUser.role = UserRole.Junior;
                    loggedUser.id = 1;
                }

                setUser(loggedUser);
            }
        }, 3000);
    }

    return (
        <>
            <form className='p-4' onSubmit={onSubmitHandler}>
                <h2>Log in form</h2>
                <input type='text' value={username} onChange={e => setUsername(e.target.value)} className='' placeholder='Username' name='name' required />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} className='' placeholder='Password' name='password' required />
                <button type='submit' disabled={pending} className='disabled:opacity-50'>Login</button>
            </form>
            <p><b>Tips:</b></p>
            <ul>
                <li><i>pippo</i> username let the login failing</li>
                <li><i>simpleuser</i> username let you login with lower permissions</li>
                <li>any other username let you login as admin</li>
            </ul>
        </>
    );
}

export default LogInForm;