import React from 'react';

class Accordion extends React.Component {
    
    state = {
        lastClickedIndex: 1
    }

handleClick = (e) => {
    console.log('HandleClick ran')
    this.setState({
        lastClickedIndex: e.target.dataset.id
    })
}

handleExpandedItem = (id, content) => {
    console.log("handle expanded ran")
    if (this.state.lastClickedIndex === id){
        return <p>{content}</p>
    } else return '';
}
        
    listItems = this.props.section.map((section, index) => {
        return <li>
            <button data-id={index} onClick={this.handleClick} >{section.title}</button>
                    {this.handleExpandedItem}
        </li>
    })

        

    render(){
        return <ul>
            {this.listItems}
        </ul>
    }
}

export default Accordion;