import React , {Component} from 'react'

class OneNumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:false,
        }

        this.incriment = this.incriment.bind(this);
    }

    incriment(e){
        
     let target = e.target,
         number = Number(target.getAttribute('data-number')),
         text   = target.textContent;

        text = text === '0' ? 
               target.textContent = '1' :
               target.textContent = '0';
         

        this.props.onCount(number , text);

        this.setState({ active: !this.state.active })
   
    }

    render(){
        return (
            <React.Fragment>
                
                <button className={this.state.active ? 'btn active' : 'btn'} data-number={this.props.number}
                  onClick={this.incriment}
                >
                    0
                </button>
            </React.Fragment>
        )
    }
}

export default OneNumber;