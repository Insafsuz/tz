import { axios } from '../../services'

import {
  BOOKS_GET_SUCCESS,
  BOOKS_GET_REQUEST,
  BOOKS_GET_ERROR,
  BOOKS_CATEGORY,
  BOOKS_SORT,
  BOOKS_SEARCH,
  BOOKS_LOAD_MORE,
} from '../actions'

const getBooksSuccess = items => ({
  type: BOOKS_GET_SUCCESS,
  payload: items,
})

const getBooksRequested = () => ({
  type: BOOKS_GET_REQUEST,
})

export const bookCategory = category => ({
  type: BOOKS_CATEGORY,
  payload: category,
})

export const bookSort = sort => ({
  type: BOOKS_SORT,
  payload: sort,
})

export const bookSearch = searchValue => ({
  type: BOOKS_SEARCH,
  payload: searchValue,
})

export const booksLoadMore = visible => ({
  type: BOOKS_LOAD_MORE,
  payload: visible,
})

const getBooksError = error => ({
  type: BOOKS_GET_ERROR,
  payload: error,
})

const getBooksRequest = async (valueSearch, sort, category) =>
  axios
    .get('volumes', {
      params: {
        q: valueSearch + category,
        orderBy: sort,
        maxResults: 20,
      },
    })
    .then(response => response.data)

export const getBooks =
  (valueSearch, sort = 'relevance', category = 'all') =>
  dispatch => {
    dispatch(getBooksRequested())
    getBooksRequest(valueSearch, sort, category)
      .then(data => dispatch(getBooksSuccess(data)))
      .catch(err => {
        console.log('err', err)
        dispatch(getBooksError(err))
      })
  }
