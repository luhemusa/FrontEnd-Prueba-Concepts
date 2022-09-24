import EastIcon from '@mui/icons-material/East';
import '../../css/gallery.css'

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="content">
                <div className="contenido1">
                    <h1>Discover your true style</h1>
                    <p>Penatibus et magnis dis montes, nascetur ridiculus mus.</p>
                    <div style={{ marginTop: '100px' }}>
                        <p>discover this trend</p>
                        <EastIcon style={{ marginRight: '20px' }} />
                    </div>
                </div>
                <div></div>
                <div>
                    <img width={"400px"} height={"400px"} src="https://www.noritex.com/x9YaJZbqcNMsk4dpwEXH5hdPtDY3Xag3dxconcepts_4.jpg" />
                </div>
                <div></div>
            </div>
            <div className="content">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Gallery