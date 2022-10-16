import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SheetPrev from '../components/sheetPreview'
import { Link } from 'react-router-dom'




function Sheets() {
    return (
        <div>
            <h1 className = "sheet_title">Sheets</h1>
            <Link to="/newmusic"><button type="button" className="btn btn-primary action_btn">+</button></Link>
            <SheetPrev></SheetPrev>

        </div>
    )
}

export default Sheets