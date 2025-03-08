import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import WorkEx from "./pages/WorkEx/WorkEx";
import './App.css'
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./MobileNav/MobileNav";
import { ToastContainer} from 'react-toastify';


function App() {
  const [theme] = useTheme()
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
          <div className="container">
            <About />
            <Education />
            <Skills />
            <Projects />
            <WorkEx />
            <Contact />
          </div>
          <div className="footer">
            <h4 className="text1">
              Made by Kavi &copy; 2025 
            </h4>
          </div>
      </div>
      <ScrollToTop smooth 
      color="#ffff"
      style={{ backgroundColor:'#7e057e', borderRadius: '80px'}}/>
    </>
  );
}

export default App;
