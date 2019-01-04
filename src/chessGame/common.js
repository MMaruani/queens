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






