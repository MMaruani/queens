import React, { Component } from 'react';


import ChessBoard from './ChessBoard'

import ButtonList from "./ButtonList"



const SIDE = 8


class ChessBoardGame extends Component {

  constructor(props) {
    super(props)
    this.defaultState = {squares: this.generateSquares(), pieceType: "queen"}
    this.state = this.defaultState
    this.selectType.bind(this)
}

chessmen = {
  queen : "queen",
  bishop : "bishop",
  rock : "rock",
  knight : "knight",
}

selectType = (type) => {
  this.setState( {...this.defaultState, pieceType:type})
}

types = Object.keys(this.chessmen)

  generateSquares() {
    const result = []
    const size = SIDE * SIDE
    while (result.length < size) {
      const row = Math.floor(result.length / SIDE)
      const col = result.length % SIDE
      const n =  row % 2  === 0 ? 0 : 1
      result.push ({ row: row, col:col, color: result.length % 2 === n ? "": "black", hasPiece:false, conflict:false, id:result.length})
    }
    return result
  }

  handleSquareClick = (id) =>  {

    const newSquares = this.state.squares.map( square =>  {
      //in order to toggle the piece on click
      let hasPiece = square.id === id ? !square.hasPiece: square.hasPiece
      //+ we remove all conflicts
      return {...square, conflict: false, hasPiece: hasPiece}
    } )

    const pieceSquares = newSquares.filter(({hasPiece}) => hasPiece === true)

    pieceSquares.forEach(square => {
      if(this.isConflictPiece(square, pieceSquares)) {
        newSquares.find(({id}) => id === square.id).conflict = true
      }
    });

    this.setState({squares:newSquares})
  }
  // const uids =[...new Set(ids)];
    //this.newSquares = newSquares.map((box) => ids.includes(square.id) ?  Object.assign(square,{conflict:true}) : square)
    
  sameDiagonale = (square, otherSquare) => (Math.abs(square.col - otherSquare.col) === Math.abs(square.row - otherSquare.row))
  sameColRow =  (square, otherSquare) => (square.col === otherSquare.col ||  square.row === otherSquare.row)
  knightDist =  (square, otherSquare) => (Math.abs(square.col - otherSquare.col) === 1 && Math.abs(square.row - otherSquare.row) ===2)
                                      ||  (Math.abs(square.col - otherSquare.col) === 2 && Math.abs(square.row - otherSquare.row) ===1)
 
  isConflictPiece = (square, pieceSquares) =>
  pieceSquares.some((otherSquare) =>
      (otherSquare.id !== square.id) && this.conflictCondition(square, otherSquare)
  )
 
  conflictCondition = (square, otherSquare) => {
    switch (this.state.pieceType) {
      case this.chessmen.knight :
          return  this.knightDist(square, otherSquare)
      case this.chessmen.rock :
          return  this.sameColRow(square, otherSquare)
      case this.chessmen.bishop :
          return  this.sameDiagonale(square, otherSquare)
      case this.chessmen.queen :
      default :
          return  (this.sameDiagonale(square, otherSquare) || this.sameColRow(square, otherSquare))
    }
  }
 

  render() {
    return (
      <div>
       <div><ButtonList
           pieceTypes={this.types}
           selectType={this.selectType} />
       </div> 
       <div><ChessBoard
           squares={this.state.squares} 
           pieceType={this.state.pieceType} 
           handleSquareClick={this.handleSquareClick} />
       </div>
      </div>
      
    )
  }
}

export default ChessBoardGame