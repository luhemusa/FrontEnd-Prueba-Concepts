import React, { useState, useEffect } from 'react'
//MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
//CSS
import '../css/navbar.css'
//icon
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
//components
import DivAnimation from '../utils/DivAnimation'

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
        console.log('test')
        console.log(screenWidth)
        console.log(toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])



    return (
        <nav className="navigation">
            <Grid container spacing={2}>
                <Grid className="grid1" item xs={9} md={9}>
                    <div className="logo">
                       <a href="/"><img src="https://surveymonkey-assets.s3.amazonaws.com/survey/87382869/c9aee8a3-c9a0-4cea-ba28-f8b14642c648.PNG" /></a> 
                    </div>
                    {( screenWidth > 800 && (
                        <ul className="list">
                            <li className="nav-links"><a href="/trends"> trends </a></li>
                            <li className="nav-links"><a href="/collections"> collections </a></li>
                            <li className="nav-links"><a href="/tips"> tips & guides </a></li>
                        </ul>
                    ))}
                </Grid>
                <Grid className="grid2" item xs={3} md={3}>
                    {(screenWidth > 800 && (
                        <ul className="list">
                            <li className="nav-links"><a>finda a store</a></li>
                            <li className="nav-links"><a>contact us</a></li>
                            <li><a><SearchIcon className="nav-links" /></a></li>
                        </ul>
                    ))}
                    <div className="nav-menu-btn">
                        <MenuIcon onClick={toggleNav} />
                    </div>
                </Grid>
            </Grid>
                    
            {
                (toggleMenu && screenWidth < 800 && (
                    <DivAnimation>
                        <ul className="list">
                            <li className="nav-links"><a href="/about"> trends </a></li>
                            <li className="nav-links"><a> collections </a></li>
                            <li className="nav-links"><a> tips & guides </a></li>
                            <li className="nav-links"><a>finda a store</a></li>
                            <li className="nav-links"><a>contact us</a></li>
                            <li><a><SearchIcon className="nav-links" /></a></li>
                        </ul>
                    </DivAnimation>
                ))
            }

            {/* <div className="nav-menu-btn">
                <MenuIcon onClick={toggleNav} />
            </div> */}

        </nav>
    )
}

export default NavBar