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

export { sortFunction }