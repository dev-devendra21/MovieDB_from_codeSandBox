import React from 'react'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import "./Content.css"

function Content({ data, title, handlePageChange, ...props }) {
    return (
        <div className="content-container">
            <h1 className="content-header">{title}</h1>
            <ul className="card-list-container">
                {data.results?.map((movie) => (
                    <Card
                        key={movie.id}
                        title={movie.title}
                        rating={movie.vote_average}
                        poster={movie.poster_path}
                        id={movie.id}
                    />
                ))}
            </ul>
            <Pagination {...props} handlePageChange={handlePageChange} />
        </div>
    )
}

export default Content