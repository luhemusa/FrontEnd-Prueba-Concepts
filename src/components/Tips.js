import Footer from "./home/Footer"
import Map from "./home/Map"
import Section from "./home/Section"

const Tips = () => {
    return (
        <div>
            <Section />
            <div style={{width: '100%', textAlign: 'center', fontSize: '42px', color: 'gray', height: '500px', padding: '30px'}}>
                <h1><b>Tips  &  Guides</b></h1>
            </div>
            <Map />
            <Footer />
        </div>
    )
}

export default Tips