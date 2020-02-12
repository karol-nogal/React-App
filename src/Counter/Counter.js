import React from "react";
import { Button, Grid, GridColumn } from 'semantic-ui-react'
import PageWrapper from "../components/PageWrapper"
export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading: true,
            count: null,
            error: null
        }
    }
    fetchCounterValue=()=>{
        fetch("https://reast-api-b141b.firebaseio.com/Counter.json")
        .then(resp=>resp.json())
        .then(resp=>this.setState({
            count: resp
        }))
        .catch(error=>this.setState({
            error:"some error"
        })
        .finally(()=>this.setState({
            loading:false
        })))
    }


    handleIncreaseClick=()=>{
        fetch("https://reast-api-b141b.firebaseio.com/Counter.json",{
            method: "PUT",
            body: this.state.count + 1
        }).then(()=>this.fetchCounterValue())
    }

    handleDecreaseClick=()=>{
        fetch("https://reast-api-b141b.firebaseio.com/Counter.json",{
            method: "PUT",
            body: this.state.count - 1
        }).then(()=>this.fetchCounterValue())
    }
    handleResetClick=()=>{
        fetch("https://reast-api-b141b.firebaseio.com/Counter.json",{
            method: "PUT",
            body: 0
        }).then(()=>this.fetchCounterValue())
    }

    componentDidMount(){
        this.fetchCounterValue();
    }
render(){
    return(
        <div>
            <PageWrapper>
                   <Grid>
                    <GridColumn >
                        <h1>Counter : {this.state.count}</h1>
                        
                        <Button circular color="red" onClick={this.handleDecreaseClick}>-</Button>
                        <Button circular onClick={this.handleResetClick}>Reset</Button>
                        <Button circular color="green" onClick={this.handleIncreaseClick}>+</Button>
                        </GridColumn>
                    </Grid>
        </PageWrapper>
         
        </div>
    )
}
}