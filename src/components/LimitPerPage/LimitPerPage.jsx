import React from "react";
import "./LimitPerPage.css"

const LimitPerPage = ({ setNumberPerPage, limitPerPage }) => {
    const buttonList = [5, 10, 20, 50, 100];

    return (
        <div className="limit-per-page">
            <p>Nombre d'articles par page: </p>
            <div>
                {buttonList.map((number, index) => {
                    if (limitPerPage == number) {
                        return <button key={index} className="btn btn-primary">{number}</button>
                    } else {
                        return <button key={index} className="btn btn-outline-primary" onClick={() => setNumberPerPage(number)}>{number}</button>
                    }
                })}
            </div>
        </div>
    )
}
export default LimitPerPage