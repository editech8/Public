import NavBar from "./components/NavBar/NavBar";
import Sections from "./components/Sections/Sections";
import SpecialSale from "./components/Special sales/SpecialSale";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/MainProducts/ProductList";

const App = () => {
  return (
    <div>
      <SpecialSale />
        <NavBar />
        <Sections/>
        {/* Categories and ProductShowCase are rendered in <Sections/> */}
        {/* <Categories /> */}
        {/* <ProductShowCase /> */}
      <ProductList />
      <Footer />
    </div>
  );
};
export default App;
