(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(11)},11:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(5),s=n(1),u=n(3),i=n(2),c=n(4),l=n(0),o=n.n(l),m=n(6),d=n.n(m),h=(n(17),n(8)),v=n.n(h);function f(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}o.a.Component;var b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(f,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(o.a.Component),q=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history,n=t[t.length-1].squares.slice();E(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),xIsNext:!this.state.xIsNext}))}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[n.length-1],a=E(r.squares);return e=a?"T"===a?"It's a tie!":"Winner: "+a:"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement(v.a,null,o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,e)),o.a.createElement("div",{className:"reset-button"},o.a.createElement("button",{class:"reset",onClick:function(){return p()}},"Restart")),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(b,{squares:r.squares,onClick:function(e){return t.handleClick(e)}}))))}}]),t}(o.a.Component);function p(){d.a.unmountComponentAtNode(document.getElementById("root")),d.a.render(o.a.createElement(q,null),document.getElementById("root"))}function E(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(r.a)(t[n],3),s=a[0],u=a[1],i=a[2];if(e[s]&&e[s]===e[u]&&e[s]===e[i])return e[s]}return e.every(function(e){return null===e})?null:e.some(function(e){return null===e})?null:"T"}p()},17:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.8840690e.chunk.js.map