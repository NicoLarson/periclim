import "./Pagination.css"
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';



const Pagination = ({ pageNumber, updatePageNumber, search }) => {
    let [fetchedData, updateFetchedData] = useState([])
    let api = `http://localhost:3001/documents?q=${search}`;
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json())
            updateFetchedData(data)
        })()
    }, [api])
    let totalOfElement = fetchedData.length
    let pageCount = Math.ceil(totalOfElement / 10)

    let pageChange = (data) => {
        updatePageNumber(data.selected + 1);
    };
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return (
        <ReactPaginate
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            marginPagesDisplayed={width < 576 ? 1 : 2}
            pageRangeDisplayed={width < 576 ? 1 : 2}
            pageCount={pageCount}
            onPageChange={pageChange}
            className="pagination justify-content-center my-4 gap-4"
            nextLabel=">>"
            previousLabel="<<"
            previousClassName="btn btn-primary prev"
            nextClassName="btn btn-primary next"
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
        />
    )

}


export default Pagination