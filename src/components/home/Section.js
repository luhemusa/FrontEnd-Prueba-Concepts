import Grid from '@mui/material/Grid';
import CarouselHome from '../../utils/CarouselHome'
import '../../css/carousel.css'

const Section = () => {
    return (
        <div>
            <Grid container spacing={2.1}>
                <Grid item md={9}>
                    <img className="img-home" src="https://www.noritex.com/uplds/2022/6/13/pkybJcA4u44FD84k7header-conceptslife-landing.jpg" />
                </Grid>
                <Grid className="grid-home" item md={3}>
                    <div></div>
                </Grid>
            </Grid>

            <Grid container spacing={2.1}>
                <Grid item md={6}>
                    <div></div>
                </Grid>
                <Grid item md={6}>
                    <div className="carousel-home">
                        <CarouselHome />
                    </div>
                </Grid>
            </Grid>
            </div>
        )
}

export default Section