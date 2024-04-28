import React from 'react'

import './MovieCastCard.css'

function MovieCastCard({ cast }) {
    const imgSrc = cast.profile_path ? `https://image.tmdb.org/t/p/w200${cast.profile_path}` : "https://res.cloudinary.com/ddox0bhgm/image/upload/v1714107978/no-image-icon-23500_yigeyd.jpg"
    return (
        <li className='cast-card'>
            <img src={imgSrc} className='cast-img' alt={cast.name} />
            <section className='cast-card-section'>
                <p className='cast-name'>{cast.original_name}</p>
                <p className='cast-character'>Character: {cast.character ? cast.character : "N/A"}</p>
            </section>
        </li>
    )
}

export default MovieCastCard