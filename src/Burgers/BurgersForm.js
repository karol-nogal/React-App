import React from "react";
import {Form,Button} from "semantic-ui-react";
import {BASE_URL} from "./Burgers"
import Auth from "../components/Auth";
const InitialFormState =
                {
                 name:"",
                ingridients:"",
                price:0
            }
export default class BurgersForm extends React.Component{
    state={
        ...InitialFormState,
    };
    handleOnChange=(event)=>{
        this.setState({
                [event.target.name]:event.target.value
        })
    };
    handleOnClick=(event)=>{
        event.preventDefault();
        const formatedFormData = {
            ...this.state,
            price: parseInt(this.state.price)
        };
        fetch(`${BASE_URL}/burgers.json`,{
            method: "POST",
            body: JSON.stringify(formatedFormData)
        })
        .then(()=>{ 
            this.props.onAdd()
            this.setState(InitialFormState)
        })
        
    }
    render(){
        const {name,ingridients,price} = this.state
        return(
            <Auth>
            <Form>
                <h2>add burger</h2>
                  <Form.Field>
                    <label>Name</label>
                    <input 
                    onChange={this.handleOnChange}
                    value={name}
                    name="name"
                    type="string"
                    placeholder='Name' />
                  </Form.Field>
                  <Form.Field>
                    <label>Ingridients</label>
                    <input 
                    onChange={this.handleOnChange}
                    value={ingridients}
                    name="ingridients"
                    type="string"
                    placeholder='Ingridients' />
                  </Form.Field>
                  <Form.Field>
                    <label>Price</label>
                    <input 
                    onChange={this.handleOnChange}
                    value={price}
                    name="price"
                    type="number"
                    placeholdel="price"></input>
                  </Form.Field>
                  <Button type='submit'  onClick={this.handleOnClick}>Add</Button>
                </Form>
                </Auth>
        )
    }
}