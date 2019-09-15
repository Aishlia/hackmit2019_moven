import React, { Component } from 'react'
import * as WebBrowser from 'expo-web-browser';

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         items: [
           {
                "friends": [
                  "David Bauer"
                ],
                "id": 1,
                "name": "egg1",
                "price": "1.03"
              },
              {
                "friends": [
                  "Matt Oakley"
                ],
                "id": 2,
                "name": "egg2",
                "price": "1.03"
              },
              {
                "friends": [
                  "Matt Oakley"
                ],
                "id": 3,
                "name": "egg3",
                "price": "1.03"
              },
              {
                "friends": [],
                "id": 4,
                "name": "egg4",
                "price": "1.03"
              },
              {
                "friends": [],
                "id": 5,
                "name": "Tax",
                "price": "4.00"
              },
              {
                "friends": [],
                "id": 6,
                "name": "Subtotal",
                "price": "20.00"
              }
         ]
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
               <h1 id='title'> <Text> React Dynamic Table </Text> </h1>
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
