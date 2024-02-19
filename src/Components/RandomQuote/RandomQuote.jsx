
import { useState } from "react";
import "../RandomQuote/RandomQuote.css"

import twitterIcon from "../Assets/twitter.png"
import reload from "../Assets/reload.png"



const RandomQuote = () => {
    

    const [quotes,setQuotes] = useState([])

    async function loadQuotes (){
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json()
        setQuotes(data)
    }  



    const [quote,setQuote] = useState({
        text: "Diffculties increase the nearer we get to the goal",
        author: "Johann Wolfgang von Gothe"
    })

    
    const random = ()=>{
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select)
    }

   
    const twitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?text=${JSON.stringify(quote.text)} - ${JSON.stringify(quote.author.split(',')[0])}`);
    }



    loadQuotes ()
    console.log(Math.random()*19)

    return (
        
        <div className="Container">  
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author.split(',')[0]}</div>
                    <div className="icons">
                        <img onClick={random} src={reload} alt="" />
                        <img onClick={twitter} src={twitterIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>

    
  )
}


export default RandomQuote;