import React from 'react';

class Accordion extends React.Component {
    
    state = {
        lastClickedIndex: null
    }

handleClick(e) {
    console.log('HandleClick ran', e)
    if (this.state.lastClickedIndex === e){
    this.setState({
        lastClickedIndex: null
    })}
    else this.setState({
        lastClickedIndex : e
    })
}

handleExpandedItem = (id, content) => {
    console.log("handle expanded ran")
    if (this.state.lastClickedIndex === id){
        return <p>{content}</p>
    } else return '';
}
        
   

        

    render(){
        const listItems = this.props.section.map((section, index) => {
            return <li>
                <button data-id={index} onClick={() => this.handleClick(index)} >{section.title}</button>
                        {this.handleExpandedItem(index, section.content)}
            </li>
        })
        return <ul>
            {listItems}
        </ul>
    }
}

export default Accordion;