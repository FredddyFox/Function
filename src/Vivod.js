import React, { Component } from 'react';
import  './App.css';

export default class Vivod extends Component {


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
        const { currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = data && data.slice(indexOfFirstTodo, indexOfLastTodo);

        var renderTodos = currentTodos && currentTodos.map((currentTodo,index) => {
        let HTML = '';
        let all = {from : currentTodo.salary.from, to: currentTodo.salary.to};
        let ot = (currentTodo.salary && currentTodo.salary.from);
        let du = (currentTodo.salary && currentTodo.salary.to);
        if (ot === null) {
            HTML =
                <tr>
                    <td><p>Зарплата: До:{du} Рублей</p></td>
                </tr>

        } else if (du === null) {
            HTML =
                <tr>
                    <td><p>Зарплата: От:{ot} Рублей</p></td>
                </tr>
        } else {
            HTML =
                <tr>
                    <td><p>Зарплата: От:{all.from} -
                        До:{all.to} Рублей</p></td>
                </tr>
        }

        return (
        <div className="vivod">
        <div><tr><th><h2><a href={data.alternate_url}>{currentTodo.name}</a></h2></th></tr></div>
        <div><hr/><tr><td><p>Требования:{currentTodo.snippet.requirement}</p></td></tr></div>
        <div><tr><td><p>Город:{currentTodo.area.name}</p></td></tr></div>
        <div><tr><td><p>Статус:{currentTodo.type.name}</p></td></tr></div>
        <div>{HTML}</div>
    </div>
        )
    })
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
            console.log(renderPageNumbers);
            return(
                <div>
                 {renderTodos}
                  <div className="paging">
                   {renderPageNumbers}
               </div>
                  </div>
            )}};
