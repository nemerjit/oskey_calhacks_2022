import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const data = ['Hi', 'Careless Whisper', 'test', 'test']
const components = []

for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    <Content name="data[i]" />
    components.push(<Content name={data[i]}/>)

} 

function SheetPreview() {
    return <div className='row'>{components}</div>
}

function Content(props) {
    return (
        <div className='col sheet_box'>
            <div className='d-flex justify-content-center'>
                <h5>{props.name}</h5>     
            </div>
        </div> 
    );
}


  



export default SheetPreview