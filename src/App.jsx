import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

//style
import styles from "./App.module.css";

function App() {

  return (
    
    <div >
      <Header />
      <div className={styles.container}>
      <ProductCard 
        title="Camera"
        price="500"
        image="/camera1.webp"
        isDiscount={true}
        quantity={15}
        rate={4}
        sp={true}//Special badge 
      />
      <ProductCard 
        title="Camera"
        price="500"
        image="/camera2.webp"
        isDiscount={true}
        quantity={15}
        rate={4}
        sp={false}//Special badge 
      />
          <ProductCard 
        title="Camera"
        price="500"
        image="/camera3.webp"
        isDiscount={true}
        quantity={4}
        rate={4}
        sp={false}//Special badge 
      />
          <ProductCard 
        title="Camera"
        price="500"
        image="/camera4.webp"
        isDiscount={true}
        quantity={5}
        rate={4}
        sp={true}//Special badge 
      />
          <ProductCard 
        title="Camera"
        price="500"
        image="/camera5.webp"
        isDiscount={false}
        quantity={15}
        rate={4}
        sp={true}//Special badge 
      />
      <ProductCard 
        title="Camera"
        price="500"
        image="/camera6.webp"
        isDiscount={false}
        quantity={15}
        rate={4}
        sp={false}//Special badge 
      />
      <ProductCard 
        title="Camera"
        price="500"
        image="/camera7.webp"
        isDiscount={false}
        quantity={5}
        rate={4}
        sp={true}//Special badge 
      />
          <ProductCard 
        title="Camera"
        price="500"
        image="/camera8.webp"
        isDiscount={false}
        quantity={5}
        rate={4}
        sp={false}//Special badge 
      />
      </div>
      <Footer />
    </div> 
   
  )
}

export default App;
