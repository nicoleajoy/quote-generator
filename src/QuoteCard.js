import React from "react"

function QuoteCard(props) {
    const tweet = `https://twitter.com/intent/tweet?text="${props.content}" ${props.author}`;

    return (
        <div className="quote-card">
            <div className="quote-symbol">❝</div>
            <div className="quote-content">{props.content}</div>
            <div className="quote-symbol">❞</div>
            <div className="quote-author">— {props.author}</div>
            <hr/>
            <div className="flexbox-buttons">
                <a href={tweet} alt="tweet this">
                    <button 
                        className="button media" 
                        style={{backgroundColor: props.color}}
                    ><i className="fa fa-twitter"></i></button>
                </a>
                <a href={tweet} alt="tweet this">
                    <button 
                        className="button media" 
                        style={{backgroundColor: props.color}}
                    ><i className="fa fa-tumblr"></i></button>
                </a>
                <button 
                    className="button flexbox-right" 
                    onClick={props.handleClick} 
                    style={{backgroundColor: props.color}}
                >New Quote</button>
                
            </div>
            
        </div>
    )
}

export default QuoteCard
