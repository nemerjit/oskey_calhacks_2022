import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SheetPrev from '../components/sheetPreview'



function Sheets() {
    return (
        <div>
            <h1 className = "sheet_title">Sheets</h1>
            <button type="button" className="btn btn-primary action_btn">+</button>
            <SheetPrev></SheetPrev>

        </div>
    )
}

export default Sheets