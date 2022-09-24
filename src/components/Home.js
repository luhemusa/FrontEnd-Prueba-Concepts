import Section from './home/Section'
import Gallery from './home/Gallery'
import Banner from './home/Banner'
import Blog from './home/Blog'
import Map from './home/Map'
import Footer from './home/Footer'
import '../css/home.css'



//ASSETS
import logo from '../assets/logo.png'

const Home = () => {

    return (
        <div>
            <Section />
            <Gallery />
            <Banner />
            <Blog />
            <Map />
            <Footer />
        </div >
    )
}

export default Home

