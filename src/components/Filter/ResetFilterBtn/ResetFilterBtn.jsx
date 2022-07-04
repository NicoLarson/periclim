import React from "react"
import "./ResetFilterBtn.scss"

const ResetFilterBtn = ({ setYearSearch, setLanguageSearch, setTypeSearch }) => {
    const clearBtn = (e) => {
        e.preventDefault();
        setYearSearch("")
        setLanguageSearch("")
        setTypeSearch("")
        document.querySelectorAll('.radioContainer__item input').forEach(item => item.checked = false)
    }

    return (
        <button className="btn btn-warning" onClick={clearBtn} >Réinitialiser les filtres
        </button>
    )
}

export default ResetFilterBtn