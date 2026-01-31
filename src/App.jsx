import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

// Importing Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Importing Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import User from "./components/pages/User";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between min-h-screen">
            <Navbar />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/users/:login" element={<User />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
