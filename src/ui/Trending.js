import React from 'react';
import logo from '../assets/logo-full.png';
import '../styles/_trending.scss';

import MediaSlider from "ui/MediaSlider";
import Banner from "ui/Banner";
import { Link } from 'react-router-dom';
import Footer from './Footer';



function Trending() {


    const signin = () => {
        window.location.href = "https://www.netflix.com/in/login";
    }
    return (
        <>
            <div className="">
            <div className="showcase-top">
                <img src={logo} alt="logo" />
                <Link to="" onClick={signin} className="btn-header btn-rounded" >
                    Sign In
                </Link>
            </div>
                <Banner />
                <MediaSlider
                    mediaType="tv"
                    title="NETFLIX ORIGINALS"
                    path="/discover/tv"
                    params={{ with_networks: 213 }}
                    isLarge
                />
                <MediaSlider
                    title="Trending Now"
                    path="/trending/all/week"
                />
                <MediaSlider
                    mediaType="movie"
                    title="Top Rated"
                    path="/movie/top_rated"
                />
                <MediaSlider
                    mediaType="movie"
                    title="Action Movies"
                    path="/discover/movie"
                    params={{ with_genre: 28 }}
                />
                <br />
            </div>
            <Footer />
        </>
    );
}

export default Trending;