import React from "react"
import "./ResetFilterBtn.scss"

const ResetFilterBtn = ({setYearSearch, setLanguageSearch}) => {
    const clearBtn = (e) => {
        e.preventDefault();
        setYearSearch("")
        setLanguageSearch("")
        document.querySelectorAll('.radioContainer__item input').forEach(item => item.checked = false)
    }

    return (
        <button className="btn btn-warning" >Tout afficher</button>
    )
}

export default ResetFilterBtn