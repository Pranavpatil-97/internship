import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="My First React App" />
      <Home name="Pranav" course="React.js" />
      <Footer year={2026} author="Pranav" />
    </>
  );
}

export default App;