import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Taghead from "../components/Taghead"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div>
            <Navbar />
            <Slider />
            <Taghead text1={"Grab the best"} text2={"Smartphones"} func={alert} />
            <Taghead text1={"Shop from top"} text2={"Categories"} func={alert} />
            <Footer />
        </div>
    )
}