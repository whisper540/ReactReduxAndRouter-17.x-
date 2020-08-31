import C from "./constants"

const addColor = (title, color) => ({
    type: C.ADD_COLOR,
    id: (+new Date()).toString(),
    title,
    color,
    timestamp: (+new Date()).toString()
})

const removeColor = (id) => ({
    type: C.REMOVE_COLOR,
    id
})

const rateColor = (id, rating) => ({
    type: C.RATE_COLOR,
    id,
    rating
})

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
