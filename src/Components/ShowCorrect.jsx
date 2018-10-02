import React , { Component } from 'react'


class ShowCorrect extends Component {

    constructor(props){
        super(props);

        this.state = {
            set:new Set(),
        }
    }


    componentWillUpdate(){
    
        this.setState((state , props) => {

            let keys = Object.keys(props.correct);
            
            if(keys.length !== 0)  
                state.set.add(props.correct)

        }) 

    }

    render(){
        let template = [],
            index = 0,
            correctAnswers = this.state.set;

        correctAnswers.forEach((el) => {
             template.push((
                <li className="collection-item" key={index} >
                  <span className="binary">{el.binaryNum}</span>
                  <span className="decimal">{el.decimalNum}</span>
                </li>
            ))
            index++;
        });

        return(
         <div className="card-panel  amber lighten-4">
            <ul className="collection">
            <li className="collection-header"><h6>Correct Answers Count:{template.length}</h6></li>
               {template.map(el => el )}
            </ul>
         </div>
        )
    }
}

export default ShowCorrect;