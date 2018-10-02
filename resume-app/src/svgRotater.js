import React, { Component } from 'react';
import axios from 'axios'

const cos = Math.cos
const sin = Math.sin

class Geometry {
  constructor(beginPoint, endPoint){
    this.target = { begin: beginPoint, end: endPoint }
    let diffX = endPoint.x - beginPoint.x
    let diffY = endPoint.y - beginPoint.y
    let magnitude = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
    this.unitTarget = {x: diffX / magnitude, y: diffY / magnitude}
    this.translateVector = {x: beginPoint.x - this.originalVector.x,
                      y: beginPoint.y - this.originalVector.y }
    this.scaleFactor = magnitude / (629 - 249.6)
    this.findTheta()
  }
  originalVector = {x: 249.6, y: 336}
  unitVector = {x: 1, y: 0}
  findTheta = () => {
    let uDotV = (this.unitVector.x * this.unitTarget.x) +
                (this.unitVector.y * this.unitTarget.y)
    if(this.unitTarget.x < this.unitVector.x)
      if(this.unitTarget.y > this.unitVector.y)
        this.theta = Math.acos(uDotV) // angle in radians
      else
        this.theta = - Math.acos(uDotV) // angle in radians
    else
      if(this.unitTarget.y > this.unitVector.y)
        this.theta = Math.acos(uDotV) + Math.PI // angle in radians
      else
        this.theta = - Math.acos(uDotV) + Math.PI // angle in radians

  }

  translate = (point, xOffset, yOffset) => {
    let { x, y } = point
    return { x: x + xOffset, y: y + yOffset }
  }
  // rotate around begin point
  rotate = (point) => {
    let { x, y } = point
    let { begin } = this.target
    let x3 = this._rotateX(x - begin.x, y - begin.y) + begin.x
    let y3 =  this._rotateY(x - begin.x, y - begin.y) + begin.y
    return { x: x3, y: y3 }
  }
  scale = (point) => {
    let tmpX = point.x - this.target.begin.x
    let tmpY = point.y - this.target.begin.y
    let scaled =  { x: this.scaleFactor*tmpX, y: this.scaleFactor*tmpY}
    return {x: scaled.x + this.target.begin.x, y: scaled.y + this.target.begin.y}
  }
  transform = (point, opts) => {
    let { xOffset, yOffset } = opts
    let tmp1 = this.scale(point)
    let tmp = this.rotate(tmp1)
    return this.translate(tmp, xOffset, yOffset)
  }
  _rotateX = (x, y) => cos(this.theta)*x - sin(this.theta)*y;
  _rotateY = (x, y) => sin(this.theta)*x + cos(this.theta)*y;

}
var rope = new Geometry({x: 250, y:336 }, {x: 800, y: 100})
class svgRotater extends Component {
  state = {ready:false, coords: [], set: []}
  opts = { xOffset: rope.translateVector.x, yOffset: rope.translateVector.y }
  drawLine(){
    var svg = document.getElementById('test');

    this.state.coords.points.forEach((point, i, coords) => {
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

        let opts = this.opts
        let point1 = rope.transform(point, opts)
        //point1 = rope.translate(point1, opts.xOffset, opts.yOffset)

        line.setAttribute('x1', point1.x);
        line.setAttribute('y1', point1.y);
        let point2 = i + 1 < coords.length ? rope.transform(coords[i+1], opts) : point1;
        line.setAttribute('x2', point2.x);
        line.setAttribute('y2', point2.y);

        if(point2.y > 500)
          console.log('(', point2.x, ',', point2.y, ')')
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
      self.drawCircle('begin')
      self.drawCircle('end')
      self.drawLine()
      self.setState({coords: self.state.set[i]})
      i++;
      if(i === self.state.set.length - 1){
        console.log("STOPPED")
        clearInterval(timer)
      }
    }, 25)
  }
  drawCircle(type){
    var svg = document.getElementById('test');
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('cx', type == 'begin' ? rope.target.begin.x : rope.target.end.x)
    circle.setAttribute('cy', type == 'begin' ? rope.target.begin.y : rope.target.end.y)
    circle.setAttribute('r', 5)
    circle.setAttribute('fill', type == 'begin' ? 'green' : 'red')
    svg.appendChild(circle)
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

export default svgRotater;
