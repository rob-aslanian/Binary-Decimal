import React , {Component} from 'react'


class StartScreen extends Component {

    levelChoose(e){
        const level = e.target.textContent;

       
       for(let lvl of this.props.levels)
            if(lvl.level === Number(level)){
                this.props.onChoose(lvl.max_num);
                
                localStorage.setItem('level' , JSON.stringify({
                    level:lvl.level,
                    max_num:lvl.max_num,
                    score:lvl.score

                }));
            }   
    }
    
    render(){
        const levels = this.props.levels;

        return(
            <div className="start-screen amber darken-1">
            <h4>Choose Level</h4>
             <div className="row">
              {levels.map((level , idx) => 
                 <button className="btn orange darken-2" key={idx}
                         onClick={this.levelChoose.bind(this)}
                         title={level.max_num}
                 >
                    {level.level}
                 </button>
              )}
              </div>
            </div>
        )
    }
}

export default StartScreen;