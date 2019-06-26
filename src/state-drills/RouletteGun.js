import React from 'react';

class RouletteGun extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    handleRoulletteText = () => {
        console.log("HandleRoullette Ran!");
        if (this.state.spinningTheChamber){
            console.log("HandleRoullette Ran!")
            return "spinning the chamber and pulling the trigger!"
        }
        else if (this.state.chamber === 8){
            console.log("HandleRoullette Ran!")
            return "BANG!"

        }
        else return "You're Safe but not really!"
       }

    componentDidMount(){
        this.handlePullTrigger = () => {
            console.log("Handle Pull trigger ran!")
            this.setState({
                ...this.state,
                spinningTheChamber: true
            })

            this.handleRoulletteText();

            setTimeout(() => {
                console.log("Set Timeout runs!")
                let num = Math.ceil(Math.random() * 8);
                console.log(num)
                this.setState({
                    chamber: num,
                    spinningTheChamber: false
                    
                })
                }, 2000)
            
        }

    }

    render(){
        console.log(this.props)
        return(
        <div>
            <p>{this.handleRoulletteText()}</p>
            <button id= "triggerbutton" onClick={() => this.handlePullTrigger()} >Pull The Trigger!</button>
        </div>

        )}
}



export default RouletteGun