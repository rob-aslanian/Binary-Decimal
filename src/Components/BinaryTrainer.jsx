import React,  {Component} from 'react'
import config from '../config'
import MainContent from './MainContent'
import StartScreen from './StartScreen'


class BinaryTrainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            ...config,
            numbers:null,
            start:false,
        }
        this.startHandler = this.startHandler.bind(this);
    }
    componentDidMount(){

        if(localStorage.getItem('level') !== null){
            const num = JSON.parse(localStorage.getItem('level')).max_num;
            this.setState({
                numbers:num,
                start:true,
            })
        }
            
    }
    startHandler(num){
        
        this.setState({ 
            numbers: num , 
            start:true,
        })

        
    }
    render(){

        let template = null;

        if(this.state.start)
            template = 
                     <MainContent numbers={this.state.numbers}
                                  levels={this.state.levels}/>
        else{
          template = 
                     <StartScreen levels={this.state.levels}
                                  onChoose={this.startHandler} />
        }


        return (
            <div className="card">
                 <div className="card-title">
                    Created By:{this.state.author}
                    <hr/>
                    Binary Code Trainer {this.state.version} 
                 </div>

                {template}
            </div>
        )
    }
}

export default BinaryTrainer;