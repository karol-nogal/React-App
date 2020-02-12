import React from "react";

export class Branches extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: []
        }
    }

componentDidUpdate(){
    this.fetchingPulls()
}

fetchingPulls(){
    fetch("https://api.github.com/repos/infoshareacademy/jfdz12-fantasy-code-app/branches")
    .then(resp=>resp.json())
    .then(resp=>this.setState({
        data: resp
    }))
}
displayBranch(){
    this.state.data.map()
}

render(){
    return(
        <div>
            <Table celled striped>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>Git Repository</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                
                </Table.Body>
            </Table>
        </div>
    )
}
}