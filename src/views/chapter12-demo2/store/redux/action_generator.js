import C from "./constants";
import fetch from 'isomorphic-fetch';

const parseResponse = response => response.json()

const logError = error => console.error(error)

const fetchThenDispatch = (dispatch, url, method, body) =>
    fetch(url, {
        method,
        body,
        header: {'Content-Type': 'application/json'}
    }).then(parseResponse)
    .then(dispatch)
    .catch(logError)

const addColor = (title, color) => dispatch =>
    fetchThenDispatch(
        dispatch,
        '/api/colors',
        'POST',
        JSON.stringify({title, color})
    )

const removeColor = id => dispatch =>
    fetchThenDispatch(
        dispatch,
        `/api/colors/${id}`,
        'DELETE'
    )

const rateColor = (id, rating) => dispatch =>
    fetchThenDispatch(
        dispatch,
        `/api/colors/${id}`,
        'PUT',
        JSON.stringify({rating})
    )

const sortColors = (sortedBy) =>
    (sortedBy === "rating") ?
        ({
            type: C.SORT_COLORS,
            sortBy: "SORTED_BY_RATING"
        }) :
        (sortedBy === "title") ?
            ({
                type: C.SORT_COLORS,
                sortBy: "SORTED_BY_TITLE"
            }) :
            ({
                type: C.SORT_COLORS,
                sortBy: "SORTED_BY_DATE"
            })

export {addColor, removeColor, rateColor, sortColors}
