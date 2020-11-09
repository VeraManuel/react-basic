import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

import Book from './Book'
import { books } from './books'

// JSX always return a single element
// div - section - article or fragment
// the HTML atributes MUST be camelCase
// className == class

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
