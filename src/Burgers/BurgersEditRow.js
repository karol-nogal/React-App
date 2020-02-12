import React from "react";
import { Form,Table,Button,Icon } from "semantic-ui-react";
import { BASE_URL } from "./Burgers";

export default class BurgersEditRow extends React.Component{
    state={
        ...this.props.burger
    }

    handleOnChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleOnSaveClick=()=>{
        const formatedData={
            ...this.state,
            price: parseInt(this.state.price)
        }
        fetch(`${BASE_URL}/burgers/${this.props.burger.id}.json`,{
            method:"PUT",
            body: JSON.stringify(formatedData)
        })
        .then(()=>{
            this.props.onSave()

        })
    }
    handleOnCloseClick=()=>{
        this.props.onClose()
    }

render(){
    const {name,price,ingridients} = this.state
    return(
        <Table.Row>
        <Table.Cell>
            <Form>
              <Form.Field>
              <input name={"name"} value={name}
                onChange={this.handleOnChange}></input>
              </Form.Field>
              </Form>
        </Table.Cell>
        <Table.Cell>
        <Form>
            <Form.Field>
                <input name={"ingridients"} value={ingridients}
                onChange={this.handleOnChange}></input>
                </Form.Field>
                </Form>
                </Table.Cell>
        <Table.Cell>
        <Form>
            <Form.Field>
                <input name={"price"} value={price}
                onChange={this.handleOnChange}></input>
                </Form.Field>
                </Form>
                </Table.Cell>
        <Table.Cell>
            <Button  icon color="green" onClick={this.handleOnSaveClick} >
                <Icon name="save"/>
                </Button>
            </Table.Cell>
            <Table.Cell>
            <Button  icon onClick={this.handleOnCloseClick}>
                <Icon name="close"/>
                </Button>
            </Table.Cell>
      </Table.Row>
    )
}
}