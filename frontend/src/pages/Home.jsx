import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Taghead from "../components/Taghead"
import Footer from "../components/Footer"
import CatShow from "../components/CatShow"
import { ProductHoriz } from "../components/ProductHoriz"
import { ProductProvider } from '../contextapi/ProductContext';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Slider />

            <Taghead text1={"Grab the best"} text2={"Smartphones"} func={alert} />
            <ProductProvider>
            <ProductHoriz /> 
            </ProductProvider>
            
            <Taghead text1={"Shop from top"} text2={"Categories"} func={alert} />
            <CatShow />
            <Footer />
        </div>
    )
}