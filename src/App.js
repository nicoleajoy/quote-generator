import React, { useState, useEffect } from "react"
import QuoteCard from "./QuoteCard"

function App() {
  const [ content, setContent ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    generateQuote()
    setbackground()
  }, [])

  function generateQuote() {
    fetch("http://api.quotable.io/random")
      .then(response => response.json())
      .then(response => {
        const {content, author} = response
        setContent(content)
        setAuthor(author)
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err);
      }, []);
  } 

  function handleClick() {
    setIsLoading(true)
    generateQuote()
    setbackground()
  }

  function setbackground() {
    document.querySelector("body").style.backgroundColor = 
      "hsl(" + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' + (85 + 10 * Math.random()) + '%)'
  }

  return (
    <div className="app"> 
    {
      isLoading ? "Generating new quote..." : 
      <QuoteCard 
        content={content} 
        author={author} 
        handleClick={handleClick} 
        color={document.querySelector("body").style.backgroundColor}
      />
    }
    </div>
  )
}

export default App;
