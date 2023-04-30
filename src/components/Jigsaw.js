import React from 'react'
import { useState } from 'react';
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import '../App.css';

function Jigsaw() {
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
    const [text, setText] = useState("Unpuzzle the pieces!!");
    const solve=()=>{
        setText("congratulations!")
    }
    let idx=Math.floor(Math.random()*5)
    return (
        <>
          <div className="puzzle-container">
            <JigsawPuzzle
              imageSrc={arr[idx].src}
              rows={4}
              columns={4}
              onSolved={solve}
            />
          </div>
        </>
      );
}

export default Jigsaw


