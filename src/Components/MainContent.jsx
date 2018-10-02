import React,  {Component} from 'react'
import OneNumber from './OneNumber'
import CheckEqual from './CheckEqual'
import ShowCorrect from './ShowCorrect'
import ChangeLevel from './ChangeLevel'

class MainContent extends Component {
    
    constructor(props){
        super(props);

        this.num =  React.createRef()

        this.state = {
            count:0,
            correct:{},

        }

        this.countHandler = this.countHandler.bind(this);
        this.correctHandler = this.correctHandler.bind(this);
    }

    countHandler(nums , text){

        if(text  === '1')
            this.setState({ count:this.state.count + nums })
        else
            this.setState({ count:this.state.count - nums })
     

    }

    correctHandler(arr , num){

        this.setState({
            correct:{
                binaryNum:arr.join(' '),
                decimalNum:num
            }
        })

    }

    render(){

        let number = this.props.numbers;
        let numbers = [];
        
        if(number){        
            while(number !== 1){
                number /= 2;
                numbers.push(number);
            }
        }
        return (

            <div className="card-action amber">
            
                <CheckEqual
                    number={this.props.numbers}
                    answer={this.state.count}
                    numbers={this.num.current}
                    onCorrect={this.correctHandler}
                    
                />
                
                <ChangeLevel 
                    levels={this.props.levels}/>

                <div className="row">

                    <div className="btns-bg" ref={this.num}>
                        {numbers.map((number , idx) => 
                             <OneNumber 
                                 key={idx}
                                 number={number}
                                 onCount={this.countHandler}
                             />
                        )}
                    </div>
              
                </div>

                <ShowCorrect 
                    correct={this.state.correct}
                />

            </div>
        )
    }
}

export default MainContent;