import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Box from './Box'

const SIDE = 8

class App extends Component {

  /*constructor(props) {
    super(props)
  }*/



  generateBoxes() {
    const result = []
    const size = SIDE * SIDE

     while (result.length < size) {
      const row = Math.floor(result.length / SIDE)
      const col = result.length % SIDE
      const n =  row % 2  === 0 ? 0 : 1
      result.push ({ row: row, col:col, color: result.length % 2 === n ? "": "black", queen:false, error:"", id:result.length})
    }
    return result
  }
  state = {boxes: this.generateBoxes()}

  handleBoxClick = (row, col, id) =>  {
    console.log('clicked', row, col, id)
    const newBoxes = this.state.boxes.map( box =>  {
      if(box.id === id ) { box.queen = !box.queen }
      //reset color ie remove error
      box.error = "";
      return box
    } )
    const queenBoxes = newBoxes.filter(({queen}) => queen === true)
    const ids = [];
    queenBoxes.forEach(box =>{
      //console.log(box.id);
      ids.push(...this.getMatchQueens(box, queenBoxes))
    });
    const uids =[...new Set(ids)];
    console.log("uids", uids)
    const finalBoxes = newBoxes.map((box) => uids.includes(box.id) ?  Object.assign(box,{error:"red"}) : box)
    console.log("finalBoxes", finalBoxes)
    this.setState({boxes:finalBoxes})
  }

  getMatchQueens = (myBox, queenBoxes) => {
    const ids = [];
    queenBoxes.forEach(box => {
      //diag
      if(box.queen === false) return false
      if(myBox.queen === false) return false
      if(box.id === myBox.id) return false;
      if(Math.abs(box.col - myBox.col) === Math.abs(box.row - myBox.row)
         || box.col === myBox.col ||  box.row === myBox.row) {
           console.log("match", box.col, box.row, myBox.col, myBox.row)
        /*box.error = "red"
        myBox.error = "red"*/
        
        if(!ids.includes(box.id)) ids.push(box.id)
        if(!ids.includes(myBox.id)) ids.push(myBox.id)
       

        //newBoxes = newBoxes.map(b => { if([box.id, myBox.id].includes(b.id)) b.error=true})
        //return true
      }
      //console.log("ids", ids)
      
    });
    return ids;
  }

  render() {
    return (
      <div className="queens">
       {this.state.boxes.map(({row, col, color, queen, error, id}, index) => (
          <Box
            row = {row}
            col = {col}
            color = {color}
            error = {error}
            queen = {queen}
            id = {id}
            key = {index}
            onClick = {this.handleBoxClick}
          />
        ))}
      </div>
    )
  }
}

export default App