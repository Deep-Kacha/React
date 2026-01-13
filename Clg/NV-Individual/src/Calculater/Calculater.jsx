// create a calss based component named calculater
// it will take input from user informs of buttons
//prepare a button grid ads per windows calculator
//layout and impliment evalutoion logic to show result
//4-> operator 
//implemnt basci operation +,-,*,/

import { Component } from "react";

class Calculater extends Component{
    render(){
        return(
        <>
        <h1 align = "center">Calculater</h1>
        <div align = "center">
            <div>
        <table>
        <tr>
            <td><input type = "text"></input></td>
        </tr>
        <div>
        <tr>
            <td>
                <button>7</button>
            </td>
            <td>
                <button>8</button>
            </td>
            <td>
                <button>9</button>
            </td>
            <td>
                <button>/</button>
            </td>
        </tr>
        <tr>
            <td>
                <button>4</button>
            </td>
            <td>
                <button>5</button>
            </td>
            <td>
                <button>6</button>
            </td>
            <td>
                <button>*</button>
            </td>
        </tr>
        <tr>
            <td>
                <button>1</button>
            </td>
            <td>
                <button>2</button>
            </td>
            <td>
                <button>3</button>
            </td>
            <td>
                <button>-</button>
            </td>
        </tr>
        <tr>
            <td>
                <button>C</button>
            </td>
            <td>
                <button>0</button>
            </td>
            <td>
                <button>=</button>
            </td>
            <td>
                <button>+</button>
            </td>
        </tr>
        </div>  
        </table>
        </div>
        </div>
        </>
        )
    }
}

export default Calculater;