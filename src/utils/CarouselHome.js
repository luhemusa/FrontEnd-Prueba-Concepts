import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
//icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EastIcon from '@mui/icons-material/East';

const CarouselHome = (props) => {
    let items = [
        {
            name: "Retro: Old is New Again",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus diam sollicitudin dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus diam sollicitudin dignissim",
            color: "#f1edc0"
        },
        {
            name: "Retro: Old is New Again",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus diam sollicitudin dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus diam sollicitudin dignissim",
            color:"#d3f1cd"
        },
        {
            name: "Retro: Old is New Again",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus diam sollicitudin dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus diam sollicitudin dignissim",
            color: "#f1edc0"
        }
    ]

    return (
        <Carousel
        PrevIcon={<ArrowBackIosIcon/>}
        NextIcon={<ArrowForwardIosIcon/>}
        indicators= {false}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

const Item = (props) => {
    return (
        <Paper className="carousel-details" style={{backgroundColor: props.item.color}}>
            <h1 className="title-carousel">{props.item.name}</h1>
            <p className="description-carousel">{props.item.description}</p>

            <div className="btn-carousel">
                <p>discover this trend</p> 
                <EastIcon />
            </div>
        </Paper>
    )
}

export default CarouselHome