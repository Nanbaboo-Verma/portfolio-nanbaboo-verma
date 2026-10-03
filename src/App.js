import { useEffect } from "react";
import "./App.css";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const offsetTop = element.offsetTop - 140;

          // Only scroll if it's not already at the desired position
          if (Math.abs(window.scrollY - offsetTop) > 1) {
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Ensure correct scroll position on initial load
    handleHashChange();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
