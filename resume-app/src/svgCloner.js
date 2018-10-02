import React, { Component } from 'react';
import axios from 'axios'

class svgCloner extends Component {
  state = {ready:false, coords: [], set: []}
  drawLine(){
    var svg = document.getElementById('test');

    this.state.coords.points.forEach((point, i, coords) => {
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

        line.setAttribute('x1', point.x);
        line.setAttribute('y1', point.y - 200);

        line.setAttribute('x2', i + 1 < coords.length ? coords[i+1].x: point.x);
        line.setAttribute('y2', (i + 1 < coords.length ? coords[i+1].y: point.y) -200);

        line.setAttribute('style', "stroke:black;stroke-width:1");

        svg.appendChild(line);
    })
  }
  removeChildren(elementId) {
    var element = document.getElementById(elementId);
    while(element.firstChild)
      element.removeChild(element.firstChild)
  }
  async fetchCoords(){
    const res = await axios.get('http://localhost:8080/coords')
    console.log(res.data)
    this.setState({ready: true, set: res.data.data, coords: res.data.data[0]})
    let i = 1
    let self = this;
    let timer = setInterval(() => {

      self.removeChildren('test')
      self.drawLine()
      self.setState({coords: self.state.set[i]})
      i++;
      if(i === self.state.set.length - 1){
        console.log("STOPPED")
        clearInterval(timer)
      }
    }, 25)
  }
  componentDidMount(){
    this.fetchCoords()
  }
  render() {
    return (
      <div>
        <svg viewBox="0 0 800 800" id="test">
          <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
        </svg>
      </div>
    );
  }
}

export default svgCloner;
