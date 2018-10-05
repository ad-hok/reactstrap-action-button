import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button } from "reactstrap";

const propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  disabled: PropTypes.bool
};
const defaultProps = {
  type: "button",
  size: "lg",
  color: "primary",
  icon: "fa fa-save",
  text: "Guardar",
  saving: false,
  disabled: false
};

class ReactActionButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render(){
    return (
      <Button
        type={this.props.type}
        size={this.props.size}
        color={this.props.color}
        onClick={this.props.onClick}
        disabled={(this.props.saving || this.props.disabled)}
      >
        <i className={ (this.props.saving)?"fa fa-spinner fa-spin":this.props.icon } />
        {' '}{(this.props.saving)?"Guardando...":this.props.text}
      </Button>
    );
  }
}

ReactActionButton.propTypes = propTypes;
ReactActionButton.defaultProps = defaultProps;

export default ReactActionButton;
