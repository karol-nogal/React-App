import React from "react";
import { Card, Loader, Dimmer, Image, Segment } from 'semantic-ui-react'

import {BASE_URL} from "./Burgers.js"
import PageWrapper from "../components/PageWrapper.js";

class BurgerDetails extends React.Component{
    state={
        data:null,
        loading:true,
        error:null
    };
    componentDidMount(){
        const {match:{params:{id}}}= this.props;
        fetch(`${BASE_URL}/burgers/${id}.json`)
        .then(resp=>resp.json())
        .then(resp=>{
            this.setState({
                data: resp,
                loading:false
            })
        })
        .catch(error=>this.setState({error,loading:false}))
    };
render(){
    const {data, loading} = this.state;
    if(!data){
        return<h1>nie ma takiego burgera</h1>
    }
    if(loading){
        return (
          <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>
    
        <Image src='/images/wireframe/short-paragraph.png' />
      </Segment>
        )
    }
    return(
      <PageWrapper>
          <div>
              <h1>Burgers Details</h1>
              <Card>

          <Card.Content>
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>
              {data.price}
            </Card.Meta>
            <Card.Description>
            {data.ingridients}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
        </Card>
    </div>

      </PageWrapper>

       
    )
}
}
export default BurgerDetails;