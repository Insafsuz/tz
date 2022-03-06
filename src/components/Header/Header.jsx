import React from 'react'
import './Header.scss'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { bookSearch, getBooks, bookCategory, bookSort } from '../../store/books/action'

const Header = () => {
  const dispatch = useDispatch()

  const { valueSearch, category, sort } = useSelector(({ books }) => books)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(getBooks(valueSearch, sort, category))
  }

  return (
    <header className='header'>
      <div className='header__content'>
        <h1 className='header__title'>Find your favorite books here</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form__row'>
            <Form.Control
              value={valueSearch}
              name='seatch'
              onChange={e => dispatch(bookSearch(e.target.value))}
              placeholder='Find a book ...'
              type='text'
            />
            <Button variant='primary' type='submit'>
              Search
            </Button>
          </div>

          <div className='form__row'>
            <div className='form__column'>
              <p>Categories</p>
              <Form.Select
                name='category'
                value={category}
                onChange={e => dispatch(bookCategory(e.target.value))}
              >
                <option value='all'>All</option>
                <option value='art'>Art</option>
                <option value='biography'>Biography</option>
                <option value='computers'>Computers</option>
                <option value='history'>history</option>
                <option value='medical'>Medical</option>
                <option value='poetry'>Poetry</option>
              </Form.Select>
            </div>
            <div className='form__column'>
              <p>Sorting by</p>
              <Form.Select
                name='sort'
                value={sort}
                onChange={e => dispatch(bookSort(e.target.value))}
              >
                <option value='relevance'>Relevance</option>
                <option value='newest'>Newest</option>
              </Form.Select>
            </div>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header
