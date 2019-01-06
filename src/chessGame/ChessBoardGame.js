import React, { Component } from 'react';

import ChessBoard from './ChessBoard'

import ButtonList from "./ButtonList"

import ResetButton from "./ResetButton"

import HelpButton from "./HelpButton"

import QueensRules from "./QueensRules"



const SIDE = 8


class ChessBoardGame extends Component {

  constructor(props) {
    super(props)
    this.defaultState = {squares: this.generateSquares(), pieceType: "queen", helpMode:false}
    this.state = this.defaultState
    this.selectType.bind(this)
  }

  chessmen = {
    queen : "queen",
    bishop : "bishop",
    rock : "rock",
    knight : "knight",
  }

  types = Object.keys(this.chessmen)


  generateSquares() {
    const result = []
    const size = SIDE * SIDE
    while (result.length < size) {
      const row = Math.floor(result.length / SIDE)
      const col = result.length % SIDE
      const n =  row % 2  === 0 ? 0 : 1
      result.push ({ row: row, col:col, color: result.length % 2 === n ? "": "black", hasPiece:false, conflict:false, valid:true, id:result.length})
    }
    return result
  }

  resetChessBoard = () => {
    this.setState((prevState) => ({...this.defaultState, pieceType:prevState.pieceType, helpMode:prevState.helpMode}))
  }
  help = () => {
    this.setState((prevState) => ({helpMode: !prevState.helpMode}),
      () => {this.handleSquareClick()})
  }

  selectType = (type) => {
    this.setState((prevState) => ({...this.defaultState, pieceType:type, helpMode:prevState.helpMode}))
  }

  handleSquareClick = (id) =>  {
    const newSquares = this.state.squares.map( square =>  {
      //in order to toggle the piece on click
      let hasPiece = (id !== null && square.id === id) ? !square.hasPiece: square.hasPiece
      //+ we remove all conflicts
      return {...square, conflict: false, hasPiece: hasPiece, valid:true}
    } )
    //the squares with pieces
    const pieceSquares = newSquares.filter(({hasPiece}) => hasPiece === true)
    //we check each others
    pieceSquares.forEach(square => {
      if(this.isConflictPiece(square, pieceSquares)) {
        newSquares.find((newSquare) => newSquare.id === square.id).conflict = true
      }
    });
    //the squares without pieces
    if(this.state.helpMode === true) {
      const emptySquares = newSquares.filter(({hasPiece}) => hasPiece === false)
        pieceSquares.forEach(square => {
          this.markBusySquares(square, emptySquares);
        });
    }
    this.setState({squares:newSquares})
  }


  sameDiagonale = (square, otherSquare) => (Math.abs(square.col - otherSquare.col) === Math.abs(square.row - otherSquare.row))
  sameColRow =  (square, otherSquare) => (square.col === otherSquare.col ||  square.row === otherSquare.row)
  knightDist =  (square, otherSquare) => (Math.abs(square.col - otherSquare.col) === 1 && Math.abs(square.row - otherSquare.row) ===2)
                                      ||  (Math.abs(square.col - otherSquare.col) === 2 && Math.abs(square.row - otherSquare.row) ===1)

  isConflictPiece = (square, pieceSquares) =>
  pieceSquares.some((otherSquare) =>
      (otherSquare.id !== square.id) && this.conflictCondition(square, otherSquare)
  )

  markBusySquares = (square, emptySquares) =>
    emptySquares.map((otherSquare) => {
      if(this.conflictCondition(square, otherSquare)) {
        otherSquare.valid = false;
      }
    }
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
       <section className="button_section">
           <ButtonList
              pieceTypes={this.types}
              selectType={this.selectType}
              selectedType={this.state.pieceType} />
            <ResetButton
              resetChessBoard={this.resetChessBoard} />
            <HelpButton
              help={this.help} 
              status = {this.state.helpMode ? "active" : ""}/>
       </section>
       <section><ChessBoard
           squares={this.state.squares}
           pieceType={this.state.pieceType}
           handleSquareClick={this.handleSquareClick} />
       </section>
       <section>
         <QueensRules/>
       </section>
      </div>
    )
  }
}

export default ChessBoardGame