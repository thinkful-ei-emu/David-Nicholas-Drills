import React from 'react';

class Bomb extends React.Component {

    state = {
        count: 0,

    }



    componentDidMount() {
        this.interval = setInterval((() => {
            console.log(this.state.count);
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount,
            })
        }), 1000);
    }

    changeDisplayText(time){
        if (time % 2 === 0){
            return 'tick'
        }
        else if (time < 8){
            return 'tock'
        }
        else {
            clearInterval(this.interval);
            return 'BOOM';
        }
    }
    
    
    

    render() {
        return <div>
            <p>{this.changeDisplayText(this.state.count)}</p>
        </div>
    }
}


export default Bomb;