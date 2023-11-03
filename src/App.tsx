import { useContext, useState } from 'react';
import Header from './components/header/header.component';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/footer.component';
import { ThemeProvider } from './contexts/theme.context';
import './App.css';
import { UserProvider } from './contexts/user.context';

function App() {
  // const [user, setUser] = useState<CurrentUserContextType>(null);
  // const [dark, setDark] = useState<ThemeContextType>({ dark: false });
  // const value = { dark, setDark };
  // const toggleDarkMode = () => setDark(!dark);
  // const toggleDark = () => {
  //   console.log('toggle');
  //   setDark(!dark);
  // };

  return (
    <div className="App min-h-screen flex flex-col ">
      <ThemeProvider>
        <UserProvider>
          <Header />
          <main className=' grow '>
            <Outlet />
          </main>
          <Footer />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
