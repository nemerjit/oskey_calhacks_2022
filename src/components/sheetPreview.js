import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactAudioPlayer from 'react-audio-player';

function SheetPreview() {
    return (
        <div className='col sheet_box'>
            <div className='d-flex justify-content-center'>
                <h5>Namee</h5>
                <ReactAudioPlayer
                    src="sample4.mp3"
                    autoPlay
                    controls
                />
            </div>
        </div>
    );
}



export default SheetPreview