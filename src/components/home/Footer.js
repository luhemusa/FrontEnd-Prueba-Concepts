import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../../css/footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="footer">
        <Box display="grid" gridTemplateColumns="repeat(12, 2fr)" >
                <Box style={{ backgroundColor: '#636466'}} gridColumn="span 2">

                </Box>
                <Box style={{ backgroundColor: '#636466'}} gridColumn="span 5">
                    <div>
                        <ul className="footer-content">
                            <li>trends</li>
                            <li>collections</li>
                            <li>tips & guides</li>
                            <li>find a store</li>
                            <li>careers</li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-info">
                            <span>tel: +(507) 314-7709</span><br/>
                            <span>fax: +(507) 314-7709</span><br/>
                            <a href="#">info@tiendaconceptslife.com</a><br/>
                        </div>
                        <div className="footer-content-info">
                            <span>Av. República de Brasil 303</span><br/>
                            <span>Panamá</span><br/>
                            <span>Panama</span><br/>
                        </div>
                    </div>
                    <div>
                        <img src={logo} />
                    </div>
                </Box>
                <Box style={{ backgroundColor: '#434748 '}} gridColumn="span 3">
                    <div className="footer-content-social">
                        <span>follow us</span>
                        <TwitterIcon sx={{color: '#fff'}} />
                        <FacebookIcon sx={{color: '#fff'}} />
                        <InstagramIcon sx={{color: '#fff'}} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px'}}>
                        <span> Created by Luis Mujica - Sep 2022</span>
                    </div>
                </Box>
                <Box style={{ backgroundColor: '#434748 '}} gridColumn="span 2">

                </Box>
            </Box>
        </div>
    )
}

export default Footer