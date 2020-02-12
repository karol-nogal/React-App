import React, {useState} from "react";
import {Table} from "semantic-ui-react";
import BurgersRow from "./BurgersRow";
import BurgersEditRow from "./BurgersEditRow"

export default ({burgers, onDelete,onSave})=>{
    const [editID, setEditId]= useState(null);
    const handleOnEdit = (markedId)=>{
        setEditId(markedId)
    };

    const handleOnClose = () =>{
        setEditId(null);
    }
    const handleOnSave=()=>{
        onSave();
        setEditId(null);
        }
    console.log(editID)
    return(
            <Table  basic='very' celled collapsing>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Ingridients</Table.HeaderCell>
                    <Table.HeaderCell>price</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                {burgers.map(burger=>{ return(
                    editID === burger.id
                    ?<BurgersEditRow 
                    burger={burger}
                    key={burger.id}
                    onClose={handleOnClose}
                    onSave={handleOnSave}
                    />
                    :<BurgersRow onEdit={handleOnEdit} onDelete={onDelete} key={burger.id} burger={burger}/>
                )})}
                </Table.Body>
                </Table>
    )
}