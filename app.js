import React from 'react'
import ReactDOM from 'react-dom'

const heading = React.createElement('div',{id:'parent',abc:'xyz' , style:{color:'black'}},
    [React.createElement('div',{id:'child1'},   
        [React.createElement('h1',{},'hh1 inside child1'),React.createElement('h2',{},'h2 inside child1')]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1',{},'h1 inside child2'),React.createElement('h2',{},'h2 inside child2')])
       ]);

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
