import {compose} from 'redux'

const sortFunction = (sort)=>{
    let propertyName='timestamp';
    switch (sort){
        case 'ratting':
            propertyName = 'rating';
            break;
        case 'title':
            propertyName = 'title';
            break;
        case 'date':
            propertyName = 'timestamp';
            break;
        default:
            propertyName = 'timestamp';
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