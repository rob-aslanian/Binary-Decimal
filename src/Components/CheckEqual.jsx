import React , { Component } from 'react'

class CheckEqual extends Component {
    constructor(props){
        super(props);

        this.state = {
            randNumber:null,
            score:0,
        }
    }

    random = () => {
        let number = this.props.number;
        return Math.floor(Math.random() * number);
    }

    componentWillMount(){
        this.setState({ randNumber: this.random() })
      
    }
    componentDidMount(){
        if(this.props.answer === this.state.randNumber)
             this.setState({ randNumber: this.random() })
        
    }
    componentDidUpdate(){

        if(this.props.number){
            let elems = this.props.numbers.children, // All Numbers 
                answer = this.props.answer ,   
                randNumber = this.state.randNumber, // Random Number
                correctNums =  [],
                score_num = JSON.parse(localStorage.getItem('level')).score;

            if(answer === randNumber){

                this.setState({ 
                    randNumber: this.random() , 
                    score:this.state.score + score_num
                })

                for(let el of elems){
                    correctNums.push(el.textContent);
                }
                
                this.props.onCorrect(correctNums , randNumber);
            }
            
        }else 
          window.location.reload(); 
        
    }

    render(){

        return (
            <React.Fragment>
                <h4>Score {this.state.score}</h4>
                <h3>
                    {this.props.answer} ?= {this.state.randNumber}
                </h3>
            </React.Fragment>
        )
    }
}


export default CheckEqual;