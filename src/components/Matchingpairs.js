import React, { useEffect, useState } from 'react'
// import { Cardtemp } from './Cardtemp';
import { Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Grid } from './grid';
import './Cardtemp.css';
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
  const shuffleCards=()=>{
    setTime(30);
    const shuffledCards=[...cardImages,...cardImages]
                        .sort(()=>Math.random()-0.5)
                        .map((card)=>({...card,id:Math.random() }))
    setCards(shuffledCards);
    setChOne(null);
    setChTwo(null);
    setTurn(0);
  }
  function handleChoice(card){
    // console.log(card);
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
  },[])
  useEffect(()=>{
    const x=cards.filter((card)=>card.matched===true)
    if(x.length===16)
      setRes("You won");
  },[cards])
  const int=setInterval(()=>setDisabled(true),30000)
  setTimeout(()=>clearInterval(int),30000);
  useEffect(()=>{
    const int= time>0 && setInterval(()=>{setTime(time=>time-1)},1000);
    return ()=>{
      clearInterval(int);
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
      {/* <div className='card-grid'>
        {
          cards.map((card)=>(
            <Cardtemp 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            flipped={card===chOne||card===chTwo||card.matched}
            disabled={disabled}
            />
          ))
        }
      </div> */}
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
