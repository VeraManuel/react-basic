import React from 'react'

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Im clicking!!!')
  }

  const complexHandler = (title) => {
    console.log(title)
  }
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4 onMouseOver={() => console.log(author)}>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Simple Example
      </button>
      <button type="button" onClick={() => complexHandler(title)}>
        Complex Example
      </button>
    </article>
  )
}

export default Book
