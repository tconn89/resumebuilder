import React, { Component } from 'react';
import Resume from './components/Resume'

class App extends Component {
  render() {
    return (
      <div className="Margin" >
        <style dangerouslySetInnerHTML={{__html: `

          body{
            box-sizing: border-box;
            ${process.env.NODE_ENV === 'production' ? 'zoom: 0.55;': ''}
            font-family: -apple-system;
            background: #fff;
          }
          .App {
            text-align: center;
          }

          .App-logo {
            -webkit-animation: App-logo-spin infinite 20s linear;
                    animation: App-logo-spin infinite 20s linear;
            height: 80px;
          }

          .App-header {
            background-color: #222;
            height: 150px;
            padding: 20px;
            color: white;
          }

          .App-title {
            font-size: 1.5em;
          }

          .App-intro {
            font-size: large;
            margin: 8px 0;
          }

          @-webkit-keyframes App-logo-spin {
            from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
            to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
          }

          @keyframes App-logo-spin {
            from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
            to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
          }

          .inner-section  {
            border-bottom: solid 1px black;
          }

          .Margin {
            padding: 0 80px;
          }
          .icon { 
            ${process.env.NODE_ENV === 'production' ? 'font-size: 30px;': ''}
            padding-left: 5px;
            padding-right: 5px;
            display: block;
          }
          .inner-section {
            margin-top: 10px;
            max-height: 30px;
          }
          .icon.education { 
            ${process.env.NODE_ENV === 'production' ? 'font-size: 40px; line-height: 10px;': 'font-size: 20px;'}
          }
          .icon-container, .title-container {
            display: inline-block;
            vertical-align: top;
            font-size: 24px;
            font-weight: bold;
          }
          .icon-container.education {
            margin-top: 5px;
          }
          .work {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
                    flex-direction: row;
          }
          .work > div {
            padding: 5px;
          }
          .work .name {
            width: 15%;
            font-weight: 600;
            text-align: right;
            padding-right: 20px;
            font-size: 14px;
          }
          .work .description {
            width: 80%;
          }
          .work .description div{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            font-weight: bold;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
                    flex-direction: row;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
          }

          .description div.right {
            font-weight: 600;
            color: #555;
            font-size: 14px;
          }
          .description ul {
            -webkit-padding-start: 25px;
                    padding-inline-start: 25px;
            margin: 0;
          }

          .description li {
            font-size: 14px;
          }
          #title-name {
            font-size:2em;
            font-weight:bold;
            margin-bottom: 8px;
          }
          .row {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
                    flex-direction: row;

          }
          .half {
            width: 50%;
            padding:10px;
          }
          .space-between {
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
          }
          h4 {
            margin: 0;
            margin-bottom: 10px;
          }
          .dots {
            font-size: 24px;
            line-height: 14px;
          }

          ` }} />
        <div id="title-name">Ty Connors</div>
        <strong> Fullstack Developer </strong>
        <p className="App-intro" >
        <code>  Raleigh, NC  |  tconn89@gmail.com  |  (919) 205 8593 </code>
        </p>
        < Resume/>
      </div>
    );
  }
}

export default App;
