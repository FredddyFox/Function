import React, { Component } from 'react';
import  './App.css';

export default class Vivod2 extends Component {

    constructor() {
        super();
        this.state = {
          currentPage: 5,
          todosPerPage: 10
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

render() {
    const {data} = this.props;
    console.log('data',data);
    const { currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    let currentTodos = data && data.slice(indexOfFirstTodo, indexOfLastTodo);
    console.log('currentTodos',currentTodos)
    let renderTodos = currentTodos && currentTodos.map((data, index) => {
 return  <div className="vivod"> 
 <div><div><tr><th><h2><a href={data.alternate_url}>{data.name}</a></h2></th></tr></div>
        <div><hr></hr><tr><td><p>Требования:{data.snippet.requirement}</p></td></tr></div>
        <div><tr><td><p>Город:{data.area.name}</p></td></tr></div>
        <div><tr><td><p>Статус:{data.type.name}</p></td></tr></div></div>
        </div>
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data && data.length / todosPerPage); i++) {
     pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <div className="paging-item">
                <button onClick={this.handleClick}
                    key={number}
                    id={number}>
                        {number}       
                </button>
            </div>  
                   );
               });
           return(
               <div>
                {renderTodos}
                 <div className="paging">
                  {renderPageNumbers}
              </div>
                 </div>    

)}};
