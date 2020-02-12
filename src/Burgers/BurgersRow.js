import React from "react";
import { Link } from "react-router-dom";
import { Table, Button, Icon } from "semantic-ui-react";
import { BASE_URL } from "./Burgers";
import Auth from "../components/Auth";

export default ({ burger, onDelete, onEdit }) => {
  const handleOnDeleteClick = () => {
    fetch(`${BASE_URL}/burgers/${burger.id}.json`, {
      method: "DELETE"
    }).then(() => {
      onDelete();
    });
  };
  const handleOnEditClick = () => {
    onEdit(burger.id);
  };
  return (
    <Table.Row>
      <Table.Cell>
        <Link to={`burgers/${burger.id}`}>{burger.name}</Link>
      </Table.Cell>
      <Table.Cell>{burger.ingridients}</Table.Cell>
      <Table.Cell>{burger.price}</Table.Cell>
      <Auth>
        <Table.Cell>
          <Button color="purple" icon reversed onClick={handleOnEditClick}>
            <Icon name="edit" />
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Button color="red" icon reversed onClick={handleOnDeleteClick}>
            <Icon name="trash" />
          </Button>
        </Table.Cell>
      </Auth>
    </Table.Row>
  );
};
