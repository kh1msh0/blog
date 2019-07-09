import React, { Fragment } from 'react'
import { Pagination } from 'react-bootstrap';

const Paginationi = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (

        <Pagination className="justify-content-center">
            <Pagination.Prev onClick={() => paginate(() => {
                if (currentPage === 1) {
                    return 1
                } else {
                    return currentPage - 1
                }
            })} />

            <Pagination.Item style={currentPage === 1 || currentPage === 2 ? { display: "none" } : { display: "" }} onClick={() => paginate(1)}>{1}</Pagination.Item>
            
            {/* <Pagination.Item style={pageNumbers.length <= 3 ? { display: "" } : { display: "none" }} onClick={() => paginate(1)}>{1}</Pagination.Item> */}
           

            <Pagination.Ellipsis style={currentPage === 1 || currentPage === 2 || currentPage === 3 ? { display: "none" } : { display: "" }} />
            <Pagination.Item style={currentPage === 1 ? { display: "none" } : { display: "" }} onClick={() => paginate(currentPage - 1)}>{currentPage - 1}</Pagination.Item>
            <Pagination.Item active onClick={() => paginate(currentPage)}>{currentPage}</Pagination.Item>
           
            <Pagination.Item style={currentPage === pageNumbers.length ? { display: "none" } : { display: "" }} onClick={() => paginate(currentPage + 1)}>{currentPage + 1}</Pagination.Item>
            
            <Pagination.Item style={currentPage === 1 && !(pageNumbers.length <= 3) ? { display: "" } : { display: "none" }}  onClick={() => paginate(currentPage + 2)}>{currentPage + 2}</Pagination.Item>
            <Pagination.Ellipsis 
            style={currentPage === pageNumbers.length || currentPage === pageNumbers.length - 1 || currentPage === pageNumbers.length - 2 || pageNumbers.length <= 3 ? { display: "none" } : { display: "" }} />

            <Pagination.Item 
                style={currentPage === pageNumbers.length || currentPage === pageNumbers.length - 1 || pageNumbers.length <= 3 ? { display: "none" } : { display: "" }}
                onClick={() => paginate(pageNumbers.length)}>
                {pageNumbers.length}
            </Pagination.Item>

            <Pagination.Next onClick={() => paginate(() => {
                if (currentPage === pageNumbers.length) {
                    return currentPage
                } else {
                    return currentPage + 1
                }
            })} />
        </Pagination>
    )
}

export default Paginationi
