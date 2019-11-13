import React, { Component } from "react";

class TextOnPicture extends Component {
  constructor() {
    super();
    this.state = {
        Text: "",
      randomImg: "http://wiki.chssigma.com/images/8/84/Cute_cat.jpg",
      };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
 
  render() {
    console.log(this.state.font_size);
    return (
      
      <div>
        <div className="text-form">
          <input
            type="text"
            name="Text"
            placeholder="Write your text on picture"
            onChange={this.handleChange}
            value={this.state.Text}
          />
        </div>
        
        <div className="image">
          <img src={this.state.randomImg} alt="" />
          <h2 className="bottom">
            {this.state.Text}
          </h2>
        </div>
              </div>
    );
  }
}

export default TextOnPicture;