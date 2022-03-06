import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Card.scss'

const BookCard = ({ book }) => {
  return (
    <Link to='bookinfo'>
      <Card style={{ width: '18rem' }} className='card my-2 mx-2'>
        <Card.Img
          className='card-img'
          variant='top'
          src={book?.volumeInfo?.imageLinks?.thumbnail}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default BookCard
