import React, { useState, useEffect } from "react";

import { generateImageUrl, ImageSizes } from "utils/tmdb";
import tmdbApi from 'api/tmdb';

function Banner() {

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchBannerMovie = async () => {
      const json = await tmdbApi.get("/discover/tv", { with_networks: 213 });
      console.log('All TV Result:', json);
      setMovie(
        json.results[
          Math.floor(Math.random() * json.results.length - 1)
        ]
      );
    };
    fetchBannerMovie();
  }, []);

  const signin = () => {
    window.location.href = "https://www.netflix.com/in/login";
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${generateImageUrl(movie?.backdrop_path || '', ImageSizes.backdrop)})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title" style={{backgroundColor:'#e50914', borderRadius:'12px', width:'max-content', padding:'12px'}}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={signin}>Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {movie?.overview}
        </h1>
      </div>
      <div className="banner__cover" />
    </div>
  );
}

export default Banner;