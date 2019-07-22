import React, { Component } from "react";
import ReactDOM from "react-dom";
//4.to add functionality of colour picker, import ChromePicker
import { SketchPicker } from "react-color";

import "./styles.css";

'use strict';

const e = React.createElement;

//1. Change App function to React class, to chnage UI state,  add functions and events
//2. render() method returns a valid virtual DOM component
class App extends Component {
  //5. To initialise state, add constructor
  constructor(props) {
    super(props);
    this.state = {
      //boolean value is set to false as colour picker is
      //not displayed until clicked
      displayColorPicker: false,
      //initialise default color
      defaultColor: "#999",
      //change Color will be set to #999 for now
      //to display color number in text box, and the background of colour diplay
      changeColor: "#999",
      //the r,g,b values initialised
      //to store the r g b values of colulour that is picked
      color: {
        r: "0",
        g: "9",
        b: "153",
        a: "1"
      }
    };
  }

  //5. Add a function that shows Colour Picker below Text Box
  //set the boolean diplayColorPicker to true in order to show Color Picker
  onHandleShowColorPicker = () => {
    this.setState({ displayColorPicker: true });
  };

  onHandleCloseColorPicker() {
    this.setState({ displayColorPicker: false });
  }

  onChangeColorPicker = color => {
    this.setState({ color: color.rgb, changeColor: color.hex });

  };

  render() {
    //3. Adding TextBox in App compoennets to show colour value
    return (
      //6.Show Color Picker below the TextBox only if the boolean
      //displayColorPicker is true
      //show the ChromePicker element
      //use a div container to store jsx expression
      //add the function in Input React Element to handle onClick event
      //with an ANONYMOUS function

      //7. Close the Color Picker when it is clicked again
      //after it opens
      //create a wrapper class(with div container)
      //that handle the event of closing the Color Picker when it is Clicked
      //by setting the bololean onDisplayColorPicker to be false

      //10. TextBox will display the colour number of colour
      //that is clicked on
      //a) value of textBox will display the colour number stored in
      //changeColor variable in the STATE
      //b) colorPicker element will have a property color
      //and the event onChange, which will be handled by
      //this.onHandle

      //12. Set the text box value to read-only so that it cannot be changed

      //13. In the text box thst follows colorTextBosStyle in default props
      //it has a small square that displays the colour picked be user
      //In order for it to display the colour in time,
      //a new react element must be created
      //inside the element, the style attibute will be the newest colour picked by user, so that it can display the colour
      //the main containner is the colour picker container

      //14.Make the colour numbr displsay read-only,
      //so its values cannot be changed

      //15.Add in a label to label the Color Picker
      //Do this by setting the style of label in the default props
      //of APP
      //and then setting the style of the "label" react element
      //to this default props
      <div className={"color-picker-container"}>
        
        <div
          style={{
            backgroundColor: this.state.changeColor,
            //padding is set in pixels
            padding: "10px",
            //width is set in percent
             width: "1%",
            lineHeight: "100px",
            //to make it on the samw line as the text box
            position: "relative",
            display: 'inline-block'
           
          }}
          className={"colour-picker-color-background"}
        />

        <input
          readOnly
          style={this.props.colorTextBoxStyle}
          className="color-picker-text"
          //standard html input elemenet(Type and name)
          type="text"
          name="color-picker-text"
         
          value={this.state.changeColor}
          onClick={() => this.onHandleShowColorPicker()}
        />


        {this.state.displayColorPicker && (
          <div className="color-picker-palette">
            <div
              className={"color-picker-cover"}
              onClick={() => this.onHandleCloseColorPicker()}
            />
            <SketchPicker onChangeComplete={this.onChangeColorPicker} /> 
          </div>
        ) }
      </div>
      
    );
  }
}
//function onChnageColor is called when the color change 
//is complete(User chose a colour)

App.defaultProps = {
  defaultColor: "#999999",
  colorTextBoxStyle: {
    height: "35px",
    border: "none",
    borderBottom: "1px solid lightgray",
    paddingLeft: "35 px",
    
  },

  //setting thr list of attributes to style the label react element
  //later

  labelStyle: {
    paddingBottom: "7px",
    fontSize: "11px"
  },
  //set the tile attribute to be used as the title of label later
  title: "Color Picker"
};



//8. To fix the position of color picker template to absolute,
//set its position on screen in style.css
//set z-index to 100 so it is always at the top of other html elements

//9.Fix the position of 'color-picker-cover' to the centre
//it will overlap with the color-picker-pallete
// and set to  0pixels
//on either side so it is invisible

//doesnt disappear after click?
//text box doesnt show color number?

//11. Under the defaultProps of App component
//fix poisitons and style of text box(list of attributes)
//under the Input Reacy Element, add a Style Object

const domContainer = document.querySelector('#colorpicker_container');
ReactDOM.render(e(App), domContainer);
