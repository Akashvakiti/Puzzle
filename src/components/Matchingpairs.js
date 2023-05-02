import React, { useEffect, useState } from 'react'
// import { Cardtemp } from './Cardtemp';
import { Row } from 'react-bootstrap';
import { Grid } from './grid';
import './Matchingpairs.css';
import { useNavigate } from 'react-router-dom';
export function Matchingpairs() {
  const cardImages=[
    {
      src:'images/apples.png'
    },
    {
      src:'images/broom.jpg',
      matched:false
    },
    {
      src:'images/cake.jpg',
      matched:false
    },
    {
      src:'images/ghost.png',
      matched:false
    },
    {
      src:'images/phone.jpg',
      matched:false
    },
    {
      src:'images/pizza.jpg',
      matched:false
    },
    {
      src:'images/toast.png',
      matched:false
    },
    {
      src:'images/pencil.jpg',
      matched:false
    },

  ]
  const [cards,setCards]=useState([]);
  const [chOne,setChOne]=useState(null);
  const [chTwo,setChTwo]=useState(null);
  const [disabled,setDisabled]=useState(true);
  const [res,setRes]=useState(null);
  const [time,setTime]=useState(null);
  const [life,setLife]=useState(1);
  const [startBtn,setStartBtn]=useState(true);
  const [resBtn,setResBtn]=useState(false);
  const [gameOver,setGameOver]=useState(false);
  const shuffleCards=()=>{
    const shuffledCards=[...cardImages,...cardImages]
                        .sort(()=>Math.random()-0.5)
                        .map((card)=>({...card,id:Math.random() }))
    setCards(shuffledCards);
    setChOne(null);
    setChTwo(null);
  }
  function handleChoice(card){
    chOne ? setChTwo(card) : setChOne(card);
  }
  
  useEffect(()=>{
    if(chOne && chTwo){
      setDisabled(true);
      if(chOne.src===chTwo.src){
         setCards(prevCards=>{
          return prevCards.map((card)=>{
            if(card.src===chOne.src){
              return {...card, matched:true}
            } else{
              return card
            }
          })
         })
        resetChoices();
      }
      else{
        setTimeout(()=>resetChoices(),1000);
      }
    }
  },[chOne,chTwo]);

  useEffect(()=>{
    shuffleCards();
  },[]);

  useEffect(()=>{
    if(time===0){
      setDisabled(true);
    }
    const x=cards.filter((card)=>card.matched===true)
    if(x.length===16){
      setRes("You won");
      setGameOver(true);
    }
    else if(time===0 && life>0 && x.length!==16){
      setRes("You Lost,Try Again")
    }
    else if(time===0 && life<=0 && x.length!==16){
      setRes("You are out of your lives,Start from beginning");
    }
  },[time]);

  useEffect(()=>{
    if(!gameOver){
      const int= time>0 && setInterval(()=>{setTime(time=>time-1)},1000);
      return ()=>{
        clearInterval(int);
      }
    }
    
  },[time]);

  function resetChoices(){
    setChOne(null);
    setChTwo(null);
    setDisabled(false);
  }
  let navigate = useNavigate();
  return (
    <div>
      <button className={resBtn?(gameOver?'resetx':'resetf'):'reseti'} 
              onClick={()=>{
                setRes(null)
                shuffleCards();
                setTime(45);
                setDisabled(false);
                }}
              >Try Again</button>
      <button className={startBtn?'starti':'startf'} 
              onClick={()=>{
                  setTime(45);
                  setStartBtn(false);
                  setResBtn(true)
                  setDisabled(false);
                }}
              >Start</button>
      <button className={gameOver?'jigsawbtnf':'jigsawbtni'} onClick={()=>{navigate('/Jigsaw')}}>Next Game</button>
      <h2 className='mt-3'>Timer:{time}</h2>
      <h3>{res}</h3>
      <div className='container'>
        <Row className='row'>{
          cards.map((card)=>(
            <Grid 
              key={card.id} 
              card={card}
              handleChoice={handleChoice}
              flipped={card===chOne||card===chTwo||card.matched}
              disabled={disabled}
            />
          ))
        }</Row>
      </div>
      
      
    </div>
  )

}
