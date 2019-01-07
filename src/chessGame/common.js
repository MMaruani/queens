export  function getSymbol (pieceType) {
    switch(pieceType) {
      case "bishop" :
        return '♗'
      case "rock" :
        return '♖'
      case "knight" :
        return '♘'
      case "queen" :
      default :
        return '♕'
    }
}
export function getRandomElement(arr) {
  return arr[Math.floor(arr.length*Math.random())];
}
export  function getMax (pieceType) {
  switch(pieceType) {
    case "bishop" :
      return 14
    case "knight" :
      return 32
    case "rock" :
    case "queen" :
     return 8
    default :
    return 16 //king
  }
}








