Reactstrap Action Button
========
A React component to represent a button that includes a load animation when executing an action

## Requirements

[Reactstrap](https://github.com/reactstrap/reactstrap)

## Usage
`npm i reactstrap-action-button`

```html
import ReactActionButton from "reactstrap-action-button";

<ReactActionButton
  type="button"
  size="lg"
  color="primary"
  onClick={this.yourFunc}
  icon="fa fa-save"
  text="Save"
  saving={this.state.savingState}
/>
```

## Props

|Prop          |   Description                         | Type | Default | Available Values |
| -------------- | ------------------------------------- | ------------- | ------------- | ---------------- |
|**type**        | type of button | string | button | button - submit |
|**size**        | size of button | string | lg | lg - md - sm |
|**color**        | color of button | string | primary | secondary - primary - success - info - warning - danger |
|**icon**        | icon of button | string | fa fa-save | any icon |
|**text**        | text of button | string | Guardar | * |
|**waitingText**        | waiting text of button | string | Guardando... | * |
|**onClick**        | action func of button | func | none | any func |
|**saving**        | indicates that onClick is running | bool | false | * |
|**disabled**        | indicates that the button is disabled | bool | false | true - false |
