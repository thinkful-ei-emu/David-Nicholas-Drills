import React from 'react';


class HelloWorld extends React.Component {

    state = {
        who: 'World',
    }

    handleClick = (who) => {
        this.setState({
            who
        })
    }

    render() {
        return <div>
            <p>Hello, {this.state.who}</p>
            <button id="friend" onClick={() => this.handleClick('Friend')}>Hello Friend!</button>
            <button id="world" onClick={() => this.handleClick('World')}>Hello World!</button>
            <button id="react" onClick={() => this.handleClick('React')}>Hello React!</button>
        </div>
    }
}

export default HelloWorld;