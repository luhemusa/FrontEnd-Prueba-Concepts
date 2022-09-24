import Box from '@mui/material/Box';
import EastIcon from '@mui/icons-material/East';
import '../../css/banner.css'

const Banner = () => {
    return (
        <div className="banner" style={{ margin: '50px  0px', width: '100%', height: '400px' }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 2fr)" >
                <Box gridColumn="span 2">

                </Box>
                <Box gridColumn="span 5">
                    <img src="https://www.noritex.com/uplds/2022/6/13/pkybJcA4u44FD84k7header-conceptslife-landing.jpg" />
                </Box>
                <Box className="card-banner" gridColumn="span 3">
                    <div>
                        <h1>Shop anything and everthing</h1>
                        <p>Penatibus et magnis dis montes, nascetur ridiculus mus Penatibus et magnis dis montes, nascetur ridiculus mus Penatibus et magnis dis montes, nascetur ridiculus mus.</p>
                        <div className="card-banner-link">
                            <p>discover this trend</p>
                            <EastIcon style={{ marginRight: '20px' }} />
                        </div>
                    </div>
                </Box>
                <Box gridColumn="span 2">

                </Box>
            </Box>
        </div>
    )
}

export default Banner