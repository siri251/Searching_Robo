import React,{Component} from 'react';
import Cardarray from './Cardarray';
import {Robots} from './Robots';
import Searchbox from './Searchbox'

class App extends Component {

    constructor(){
        super()
        this.state={
            robots:Robots,
            searchfield:''
        }
    }

    Onsearchchange=(event)=>{
        this.setState({searchfield:event.target.value})
    }

    render(){
        const filteredrobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return(
            <div className="tc pa2 ma2">
              <h1 className="tc">Robofriends</h1>
              <Searchbox searchchange={this.Onsearchchange}/>
              <Cardarray Robots={filteredrobots}/>
            </div>
            )
        
    }
    
}

export default App;