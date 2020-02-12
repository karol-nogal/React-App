import React from "react";
import BurgersForm from "./BurgersForm"
import PageWrapper from "../components/PageWrapper";
import BurgersTable from "./BurgersTable";

export const BASE_URL = 'https://reast-api-b141b.firebaseio.com/';

export default class Burgers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            burgers:[],
            }
        }
    handleOnAction=()=>{
        this.fetchBurgers()
    }
    fetchBurgers(){
        fetch(`${BASE_URL}/burgers.json`)
        .then(resp=>resp.json())
        .then(resp=>this.setState({
            burgers: Object.keys(resp).map(i=>({ ...resp[i], id: i }))
        }))
        }
    componentDidMount(){
        this.fetchBurgers()
    }
    render(){
        const {burgers}= this.state
        return(
                <PageWrapper>
                <BurgersTable burgers={burgers} onDelete={this.handleOnAction} onSave={this.handleOnAction}/>
                <BurgersForm onAdd={this.handleOnAction}/>
                </PageWrapper>
        )
    }
}