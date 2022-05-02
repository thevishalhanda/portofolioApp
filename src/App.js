import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import "@fontsource/righteous"
import "@fontsource/roboto"
import "@fontsource/saira";
import RecentProject from './pages/Project';
import ServicePage from './pages/ServicePage';
import ContentPage from './pages/ContentPage';
import ConnectPage from './pages/ConnectPage';
import ThoughtsPage from './pages/ThoghtsPage';
import NavBar from './global/reusableComponents/Navbar';
function App() {
  return (
       <>
       <NavBar />
       <HomePage />
       <RecentProject />
       <ServicePage />
       <ContentPage />
       <ConnectPage />
       <ThoughtsPage />

       </>

    );
}

export default App;
