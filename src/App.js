import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MainNav from "./components/mainnav/MainNav";
import { Helmet } from "react-helmet";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Router>
          <Helmet>
            <title>Accent Africa Alliance Ltd</title>
            <meta name="description" content="Our organization strives for global recognition as a leader in developing human personality, culture, values, beliefs, and skills." />
          </Helmet>
          <MainNav />
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
