import React, { useEffect, useState } from 'react'
// import { Cardtemp } from './Cardtemp';
import { Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Grid } from './grid';
import './Matchingpairs.css';
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
  const [turn,setTurn]=useState(0);
  const [chOne,setChOne]=useState(null);
  const [chTwo,setChTwo]=useState(null);
  const [disabled,setDisabled]=useState(false);
  const [res,setRes]=useState(null);
  const [time,setTime]=useState(30);
  const [life,setLife]=useState(2);
  const shuffleCards=()=>{
    if(life===2 ||life===1){
      setTime(30);
      setDisabled(false);
    }
    else{
      setDisabled(true);
      setTime(0);
    }
    const shuffledCards=[...cardImages,...cardImages]
                        .sort(()=>Math.random()-0.5)
                        .map((card)=>({...card,id:Math.random() }))
    setCards(shuffledCards);
    setChOne(null);
    setChTwo(null);
    setTurn(0);
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
    const x=cards.filter((card)=>card.matched===true)
    if(x.length===16)
      setRes("You won");
  },[cards]);

  useEffect(()=>{
    const int= time>0 && setInterval(()=>{setTime(time=>time-1)},1000);
    return ()=>{
      clearInterval(int);
    }
  },[time]);

  useEffect(()=>{
    if(time===0){
      setDisabled(true);
      console.log("time==0");
      setLife(life=>life-1);
    }
  },[time])

  function resetChoices(){
    setChOne(null);
    setChTwo(null);
    setTurn(turn+1);
    setDisabled(false);
  }

  return (
    <div>
      <button className='btn bg-primary' onClick={shuffleCards}>Restart</button>
      <h2>Timer:{time}</h2>
      <p>{res}</p>
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
      
      <p>Turns:{turn}</p>
      
    </div>
  )

}
