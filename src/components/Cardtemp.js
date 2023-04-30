import './Cardtemp.css';
export function Card({card,handleChoice,flipped,disabled}){
    function handleClick(){
        if(!disabled){
            handleChoice(card);
        }    
    }
    return(
        <div className='card' key={card.id}>
            <div className={flipped?"flipped":""}>
                  <img 
                    className='front' 
                    src={card.src} 
                    alt="card-front" 
                  ></img>
                  <img 
                  className='back'
                  src='images/cover.jpg' 
                  alt='card-back' 
                  onClick={handleClick}
                  ></img>
            </div>
        </div>

        
    )
}