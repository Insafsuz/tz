import {
  BOOKS_GET_SUCCESS,
  BOOKS_GET_REQUEST,
  BOOKS_GET_ERROR,
  BOOKS_CATEGORY,
  BOOKS_SORT,
  BOOKS_SEARCH,
  BOOKS_LOAD_MORE,
} from '../actions'

const initialState = {
  books: [],
  valueSearch: '',
  category: 'all',
  sort: 'relevance',
  loading: false,
  error: null,
  visible: 3,
}

const books = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_GET_SUCCESS:
      return {
        ...state,
        books: action.payload?.items,
        loading: false,
      }
    case BOOKS_GET_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case BOOKS_GET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case BOOKS_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case BOOKS_SORT:
      return {
        ...state,
        sort: action.payload,
      }
    case BOOKS_SEARCH:
      return {
        ...state,
        valueSearch: action.payload,
      }
    case BOOKS_LOAD_MORE:
      return {
        ...state,
        visible: action.payload,
      }
    default:
      return state
  }
}

export default books
