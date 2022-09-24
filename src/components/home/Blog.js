import EastIcon from '@mui/icons-material/East';
import '../../css/blog.css'

const Blog = () => {
    return (
        <div className="blog">
            <div className="content-blog">
                <div className="content-blog-div">
                    <div></div>
                    <div className="blog-card">
                        <h1>Learn More About</h1>
                        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <div className="card-blog-link">
                            <p><b>read more</b></p>
                            <EastIcon style={{ marginRight: '20px' }} />
                        </div>
                    </div>
                </div>
                <div className="content-blog-div">
                    <div></div>
                    <div className="blog-card">
                        <h1>Learn More About</h1>
                        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <div className="card-blog-link">
                            <p><b>read more</b></p>
                            <EastIcon style={{ marginRight: '20px' }} />
                        </div>
                    </div>
                </div>
                <div className="content-blog-div">
                    <div></div>
                    <div className="blog-card">
                        <h1>Learn More About</h1>
                        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <div className="card-blog-link">
                            <p><b>read more</b></p>
                            <EastIcon style={{ marginRight: '20px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog