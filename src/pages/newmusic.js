import React from 'react'
import Upload from '../images/uploadimg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';



function NewMusic() {
    return (
        <div id="new-music-wrapper">
            <h1 id="new-music-header">New Music</h1>
            <form id="music-info">
                <input id="song-name-input" type="text" placeholder="Name of Song"/>
                <br/>
                <br/>
                <button id="upload-btn">
                    <img id="upload-img" src={ Upload } alt="upload a mp3 file"/>
                    Choose a MP3 File
                </button>
                <br/>
                <input type="submit" value="Generate" class="btn btn-success" id="generate-btn"/>
                

            </form>
        </div>
    );
}

export default NewMusic