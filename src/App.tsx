import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme.context';
import { UserProvider } from './contexts/user.context';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen flex flex-col ">
      <ThemeProvider>
        <UserProvider>
          <Header />
          <main className='grow'>
            <Outlet />
          </main>
          <Footer />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
