import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-h5-audio-player/lib/styles.css';
import SheetMusicIcon from '../images/sheetmusicicon.jpg'
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { onValue } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyAF2QYiuFHa-Yl6lM4ntaZInrC0WTxFAo0",
    authDomain: "oskey-5a5e3.firebaseapp.com",
    projectId: "oskey-5a5e3",
    storageBucket: "oskey-5a5e3.appspot.com",
    messagingSenderId: "137417857797",
    appId: "1:137417857797:web:3c1297a5e36bf2819c756c",
    measurementId: "G-E8MSF2KP3Y"
};
const app = initializeApp(firebaseConfig);

let data2 = []

const db = getDatabase(app);
const starCountRef = ref(db, "song_name");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  const song = snapshot.key;
  data2.push(song)
  data2.push(data);
  <Content name="{song}"/>
  counter++;
  if (counter % 3 === 0) {
    components.push(<Content name={song}/>)
    components.push(<div><br/></div>)
} else {
    components.push(<Content name={song}/>)
}

console.log(components)
});


// const dbRef = ref(getDatabase(app));
// var data = []

// get(child(dbRef, "song_name")).then((snapshot) => {
//   if (snapshot.exists()) {
//     // console.log("here")
//     <Content name={snapshot.key}/>
//     counter++;
//         if (counter % 3 === 0) {
//             components.push(<Content name={snapshot.key}/>)
//             components.push(<div><br/></div>)
//         } else {
//             components.push(<Content name={snapshot.key}/>)
//         }
    
//   } else {
//     console.log("No data available");
//   }
//     }).catch((error) => {
//         console.error(error);
//     });

// console.log(data)
// console.log(data[0])
const components = []
let counter = 0;

// function updateComponents() {
//     for (let i = 0; i < data.length; i+=2) {
//         console.log(data[i]);
//         <Content name="data[i]" />;
//         counter++;
//         if (counter % 3 === 0) {
//             components.push(<Content name={data[i]}/>)
//             components.push(<div><br/></div>)
//         } else {
//             components.push(<Content name={data[i]}/>)
//         }
        
    
//     }
//     return components 
// }



function SheetPreview() {
    
    return <div className='row'>{components}</div>
}

function Content(props) {
    return (
        <div className='col sheet_box'>
            <div>
                <h5 className="center">{props.name}</h5>     
                <img className="sheet-music-icon" src={ SheetMusicIcon } alt="sheet music icon"/>
            </div>
        </div> 
    );
}


  



export default SheetPreview