import {compose} from 'redux'

const sortFunction = (sort)=>{
    let propertyName='timestamp';
    switch (sort){
        case 'SORTED_BY_RATING':
            propertyName = 'rating';
            break;
        case 'SORTED_BY_TITLE':
            propertyName = 'title';
            break;
        case 'SORTED_BY_DATE':
            propertyName = 'timestamp';
            break;
        default:
            break;
    }
    return function(object1, object2){
        let value1 = object1[propertyName];
        let value2 = object2[propertyName];
        if (value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    };
}

const getFirstArrayItem = array => array[0]

const filterArrayById = (array, id) => array.filter(item => item.id === id)

const findById = compose(
        getFirstArrayItem,
        filterArrayById
)

export { sortFunction, findById }