import React, { Component } from 'react'
import * as WebBrowser from 'expo-web-browser';

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         items:
      }
   }

   renderTableData() {
      return this.state.items.map((student, index) => {
         const { friends, id, name, price } = student //destructuring
         return (
            <tr key={id}>
               <td>{friends}</td>
               <td>{name}</td>
               <td>{price}</td>
            </tr>
         )
      })
   }

   renderTableHeader() {
         let header = Object.keys(this.state.items[0])
         return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
         })
      }

      render() {
         return (
            <div>
               <Text> React Dynamic Table </Text>
               <table id='students'>
                  <tbody>
                     <tr>{this.renderTableHeader()}</tr>
                     {this.renderTableData()}
                  </tbody>
               </table>
            </div>
         )
      }
  }

export default Table //exporting a component make it reusable and this is the beauty of react
