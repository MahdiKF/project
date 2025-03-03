import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Header props={"title,price,img"} />
      <ProductCard />
      <Footer />
    </>
  )
}

export default App;
