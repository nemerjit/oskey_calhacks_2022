import React, {useState} from 'react';
import Upload from '../images/uploadimg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';



function NewMusic() {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		isFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://8q6sboja9h.execute-api.us-west-1.amazonaws.com/default/findSongMeasures?filename=' + document.getElementById("upload-btn").value + "&song_name=" + document.getElementById('song-name-input').innerHTML,
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

    
    return (
        <div id="new-music-wrapper">
            <h1 id="new-music-header">New Music</h1>
            <form id="music-info">
                <input id="song-name-input" type="text" placeholder="Name of Song"/>
                <br/>
                <br/>
                <input type="file" name="file" onChange={changeHandler} id="upload-btn">
                    
                </input>
                <br/>
                <input onClick={handleSubmission} type="submit" value="Generate" className="btn btn-success" id="generate-btn"/>
                

            </form>
        </div>
    );
}

export default NewMusic