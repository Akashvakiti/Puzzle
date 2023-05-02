import React from 'react'
import { useState } from 'react';
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import '../App.css';
import './Jigsaw.css';
import {useNavigate} from 'react-router-dom'

function Jigsaw() {
  let navigate=useNavigate();
    const arr=[
      {
        src:'images/img1.webp',
        id:1
      },
      {
        src:'images/img2.jpeg',
        id:2
      },
      {
        src:'images/img3.jpeg',
        id:3
      },
      {
        src:'images/img4.jpeg',
        id:4
      },
      {
        src:'images/img5.jpeg',
        id:5
      }
    ]
    const [text, setText] = useState("Make a picture!!");
    const [gameover,setGameOver]=useState(false);
    const [col,setCol]=useState(null)
    const solve=()=>{
        setText("Congratulations!!");
        setGameOver(true);
        setCol("green")
    }
    let idx=Math.floor(Math.random()*5)
    return (
        <>
          <h1 style={{color:col}}>{text}</h1>
          {gameover&&<button className='bg-warning rounded'  type={gameover?"nextbtnf":"nextbtni"} onClick={()=>navigate('/Crossword')}>Proceed to level-3</button>}
          <div className={gameover?"solved":"puzzle-container"}>
            <JigsawPuzzle
              imageSrc={arr[idx].src}
              rows={2}
              columns={2}
              onSolved={solve}
            />
          </div>
        </>
      );
}

export default Jigsaw


