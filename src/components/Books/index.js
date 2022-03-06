import { Spinner, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { booksLoadMore } from '../../store/books/action'

import { Card } from './Card'

const Books = () => {
  const dispatch = useDispatch()
  const { books, loading, error, visible } = useSelector(({ books }) => books)

  if (loading) {
    return <Spinner animation='border' />
  }

  if (error) {
    return <div className='error'>{String(error)}</div>
  }

  if (!books) {
    return <div>Пусто</div>
  }

  const showMoreBooks = () => {
    dispatch(booksLoadMore(prevValue => prevValue + 3))
  }

  return (
    <Row>
      {books.slice(0, visible).map(book => (
        <Col>
          <Card key={book.id} book={book} />
        </Col>
      ))}
      <button onClick={showMoreBooks}>Load more</button>
    </Row>
  )
}

export default Books
