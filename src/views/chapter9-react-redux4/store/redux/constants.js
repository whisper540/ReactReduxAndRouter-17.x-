//Action的动作表(防止魔术字符串)
const constants = {
    SORT_COLORS: "SORT_COLORS",
    ADD_COLOR: "ADD_COLOR",
    RATE_COLOR: "RATE_COLOR",
    REMOVE_COLOR: "REMOVE_COLOR"
}

export default constants

// Action的有效载荷数据
// 例如
//     RATE_COLOR的有效载荷数据:
//     {
//         type: "RATE_COLOR",
//         id: "1",
//         rating: 4
//     }

//     ADD_COLOR的有效载荷数据:
//     {
//         type: "ADD_COLOR",
//         color: "#FFFFFF",
//         title: "Bright White",
//         rating: 4
//         id: "1",
//         timestamp:""
//     }
