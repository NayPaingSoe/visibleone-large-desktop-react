import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Trending from "./components/Trending.jsx";
import HappeningNow from "./components/HappeningNow.jsx";
import Sidebar from "./components/Sidebar.jsx"; // Renamed from MoreNews.jsx
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <div className=" hero-and-sidebar-container">
        <Hero />
        <Sidebar />
      </div>
      <main className="main-content">
        <div className="">
          <div className="left-column">
            <Trending />
            <HappeningNow />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
