import {Component} from 'react'
import "./styles.css";
import { AiOutlineCaretUp ,AiOutlineCaretDown} from "react-icons/ai";
const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','U','V','W','X','Y','Z','#']
class App extends Component {
  state = {
    click : false,
    plugin : true,
    contactlist : [ 'Adalsteinsson', 'Gudmundur',
      'Adams', 'Terry',
      'Agarwal', 'Nupur',
      'Alexander', 'Sean',
      'Balicek', 'Alois',
      'Bansky', 'Pavel',
      'Barnett', 'Dave',
      'Bellew', 'Allie',
      'Bentley', 'Sean',
      'Benito', 'Almudena',
      'Byrne', 'Randy',
      'Cabatana', 'Reina',
      'Calafato', 'Ryan',
      'Carter', 'Adam',
      'Chen', 'Aik',
      'Ciccu', 'Alice',
      'Cohen', 'Izak',
      'Coleman', 'Pat',
      'Czupta', 'Wojciech',
      'horpe', 'steven',
      'Toyoshima', 'Tim',
      'Tucker', 'Michael',
     ].sort(),
     filt:''


  }

  onclickbutton = event =>{
    const word = event.target.value
    this.setState({filt:word,
    click:true})
  }

  change = event =>{
    const word = event.target.value
    this.setState({filt:word, click:false})
  }

  button = () =>{
    this.setState(prev=>({plugin:!prev.plugin}))
  }

  render(){
    const {plugin, contactlist,filt,click} = this.state
    const filteredcontacts = contactlist.filter(each=>(each.toLowerCase().includes(filt.toLowerCase()) ))
    const filtcontacts = contactlist.filter(each=>(each[0].toLowerCase() === filt.toLowerCase() ))

    return (
      <>
      <div className = 'contact'>
      <div className="App">
        <h1>All Contacts</h1>
        {plugin ? <button className = "button" onClick = {this.button}>{AiOutlineCaretDown} </button> :
        <button onClick = {this.button} className = "button"> {AiOutlineCaretUp} </button>
    }
      </div >
      {plugin &&  <div className = 'container'>
        <div > 
            <input type = "search" onChange = {this.change}/>
            {click ? <ul class = "list"> 
              {filtcontacts.map(each => (<li> {each}</li>))}
            </ul>:
            <ul class = "list"> 
              {filteredcontacts.map(each => (<li> {each}</li>))}
            </ul>
            }
        </div>
        <div>
        <ul class = "list1"> 
              {alpha.map(each => (<li> <button className = 'btn' value = {each} onClick = {this.onclickbutton}>{each}</button> </li>))}
            </ul>
          </div>
          </div>
      }
      </div>
      </>
    );
  }
  
}

export default  App
