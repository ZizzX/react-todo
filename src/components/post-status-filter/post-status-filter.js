import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", label: "Все" },
      { name: "like", label: "Понравилось" },
    ];
  }

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterSelect } = this.props;
      const active = filter === name;
      const classBtn = active ? "btn-primary" : "btn-outline-secondary";

      return (
        <Button
          type="button"
          key={name}
          color={classBtn}
          className={`btn ${classBtn}`}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </Button>
      );
    });
    return <ButtonGroup>{buttons}</ButtonGroup>;
  }
}
