import { ReactNode, createContext, useContext, useState } from 'react';

export enum UserRole {
    'Junior',
    'Intermediate',
    'Senior',
    'Admin'
}

export type User = {
    name: string,
    surname: string,
    role: UserRole,
    id: number
} | null;

type UserContextType = {
    user: User | null,
    setUser: (value: User) => void
};

const UserContext = createContext<UserContextType | null>(null);

export function useUser() {
    const context = useContext(UserContext);
    if (context === null) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}

interface UserProviderProps {
    children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    // const [user, setUser] = useState<User>({ name: '', surname: '', role: UserRole.Junior, id: 0 });
    const [user, setUser] = useState<User>(null);


    return (
        <UserContext.Provider
            value={{ user, setUser }}
        >
            {children}
        </UserContext.Provider>
    );
}