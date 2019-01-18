const room = [
    [null, null, null, null, null, 'A', 1, 1, 1, 1, 1, 1, 1, 1, 1, null, 1, null, 1, 1, 1, 1, null, null, null, 1, 1, 1, 1, 1, 'A' ],
    [null, null, null, null, null, 'B', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null, 1, 1, 1, 1, 1, 'B'],
    [null, null, null, null, null, 'C', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null, 1, 1, 1, 1, 1, 'C'],
    [null, null, null, null, null, 'D', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null, 1, 1, 1, 1, 1, 'D'],
    [null, null, null, null, null, 'E', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null, 1, 1, 1, 1, 1, 'E'],
    [null, null, null, null, null, 'F', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null, 1, 1, 1, 1, 1, 'F'],
    [null, null, null, null, null, 'G', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null, 1, 1, 1, 1, 1, 'G'],
    ['H', 1, 1, 1, null, null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null, 1, 1, 1, 1, 1, 'H'],
    ['I', 1, 1, 1, null, null, null, null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null, null, null, 1, 1, 1, 1, 1, 'I'],
    ['J', 1, 1, 1, null, null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null, 1, 1, 1, 1, 1, 'J'],
    ['K', 1, 1, 1, null, null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null, 1, 1, 1, 1, 1, 'K'],
    ['L', 1, 1, 1, null, null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null, 1, 1, 1, 1, 1, 'L'],
    ['M', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'M'],
]

const roomObj = room.map( (row, i) => {
    return (row.map( (place, j) => {
        if(!place){
            return {
                id: i + '-' + j,
                type: null     
            }
        }
        if(typeof place == 'string'){
            return {
                id: i + '-' + j,
                type: place     
            }
        }
        if(typeof place == 'number'){
            return {
                id: i + '-' + j,
                type: 'STANDARD',
                booked: false   
            }
        }

    }))
})

export default function(){
    return (roomObj)
}