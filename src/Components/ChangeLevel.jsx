import React , {Component} from 'react'


class ChangeLevel extends Component {
    constructor(props){
        super(props)

        this.state = {
            level: JSON.parse(localStorage.getItem('level')).level
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e){

        
        let levels = this.props.levels,
            cLevel  = Number(e.target.value);
        this.setState({ level: cLevel })
        
         levels.map((level) => {
            if(level.level === cLevel){
                    localStorage.setItem('level' ,  JSON.stringify(level));
                    window.location.reload();
            }    
        })
    }

    render(){
        let template = [],
            level = JSON.parse(localStorage.getItem('level')).level;
        
        for(let i = 1; i <= this.props.levels.length ; i++)
            template.push(( 
                <option key={i} value={i} disabled={i === level}>
                Level {i}
                </option>
            ))
        
        return(
            <div className="input-field select_level">
                <select onChange={this.changeHandler} value={this.state.level}>
                    <option disabled>Choose level</option>
                    {template}
                </select>
            </div>
        )
    }
}
export default ChangeLevel;