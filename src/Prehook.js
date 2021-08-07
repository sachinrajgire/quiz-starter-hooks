
import React , {useState } from 'react';
import Hooky from './Hooky'

class Mycomponent extends React.Component {
    
    constructor(props) {
        super (props)
this.state={ 
somestate:false
}
this.handleClick= this.handleClick.bind(this)
    }

    // const [somestate,setSomeState] =useState(false)
 handleClick = ()=>{
 this.setState({somestate:!this.somestate})
}
componentDidMount () {

}

componentDidUpdate (prevProps, prevState) {
    
}

render(){
     
        return (
      <div>
        <h4>I am PREHOOK ...HAHAHAHAHHA </h4>
            <Hooky />
            <button onClick={()=>this.handleClick()}>Invert </button>
          
            </div>
        )
    }
}

export default Mycomponent


//
//constructor
//componentdidMount
//componentDidUpate
//ComponentwillUmount
//render



