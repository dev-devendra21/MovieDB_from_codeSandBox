import React from 'react'
import './Pagination.css'
function Pagination({ page, totalPages, handlePageChange }) {
    return (
        <div className='pagination-container'>
            <button disabled={page === 1} onClick={() => handlePageChange(page - 1)} className='previous pagination-btn'>Previous</button>
            <p>Page {page} of {totalPages}</p>
            <button disabled={page === totalPages} onClick={() => handlePageChange(page + 1)} className='next pagination-btn'>Next</button>
        </div>
    )
}

export default Pagination