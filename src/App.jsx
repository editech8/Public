import Categories from "./components/Categories/Categories";
import NavBar from "./components/NavBar/NavBar";
import ProductShowCase from "./components/ProductShowcase/ProductShowCase";
import Sections from "./components/Sections/Sections";
import SpecialSale from "./components/Special sales/SpecialSale";
import Footer from "./components/Footer/Footer";


 const App = () => {
  return (
    <div>
      <SpecialSale/>
      <NavBar/>
      <Sections/>
      <Categories/>
      <ProductShowCase/>
      <Footer/>
    </div>
  )
}
export default App;
