import React from "react"

const QuoteCard = ({ content, author, color, handleClick }) => {
  const tweet = `https://twitter.com/intent/tweet?text="${content}" ${author}`

  return (
    <div className="quote-card">
      <hr />
      <div className="quote-symbol">🙶</div>
      <div className="quote-content">{content}</div>
      <div className="quote-symbol">🙸</div>
      <div className="quote-author">— {author}</div>
      <hr />

      <div className="flexbox-buttons">
        <button
          title="Copy to Clipboard"
          className="button media"
          style={{ backgroundColor: color }}
          onClick={() => {
            navigator.clipboard.writeText(`"` + content + `" -` + author)
          }}
        >
          <i className="fa fa-clone"></i>
        </button>
        <a href={tweet} alt="tweet this">
          <button
            title="Tweet"
            className="button media"
            style={{ backgroundColor: color }}
          >
            <i className="fa fa-twitter"></i>
          </button>
        </a>
        <button
          title="Generate Quote"
          className="button flexbox-right"
          onClick={handleClick}
          style={{ backgroundColor: color }}
        >
          <i className="fa fa-refresh"></i>
        </button>
      </div>
    </div>
  )
}

export default QuoteCard
