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

      getQuery = url => {
        return new Promise((succeed, fail)=>{
          const request = new XMLHttpRequest();
          request.open('GET', url);
          request.addEventListener('load', () => {
            (request.status < 400) ? succeed(request.responseText) : fail(new Error('Error '+request.statusText))
          });
          request.addEventListener('error', ()=>{
            fail(new Error('Error'));
          });
    
          request.send();
        });
      };
    
      
      componentDidMount() {
        this.getQuery(`https://api.hh.ru/vacancies?&only_with_salary=true`)
        .then(
          response => {
              return JSON.parse(response);
          }
          )
            .then(
             obj => {
                return obj.items;
              })
              .then(
                items => {
                 this.setState({data: items});
                })
    
      }
      handleChange = event => {
        this.setState({
          name: event.target.value,
        });
      };
    
    handleClickSearch = name => event => {
    event.preventDefault();
    this.getQuery(`https://api.hh.ru/vacancies?text=${name}&only_with_salary=true`)
    .then(
    response => {
        return JSON.parse(response);
    }
    )
      .then(
        obj => {
          return obj.items;
        })
        .then(
          items => {
            this.setState({
            data: items,
            loading: false
          });
          })
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
        console.log('currentTodos',currentTodos);
        var renderTodos = currentTodos && currentTodos.map((data, index) => {
    

            return(    
            <div className="vivod"> 
        <div><tr><th><h2><a href={data.alternate_url}>{data.name}</a></h2></th></tr></div>
        <div><hr></hr><tr><td><p>Требования:{data.snippet.requirement}</p></td></tr></div>
        <div><tr><td><p>Город:{data.area.name}</p></td></tr></div>
        <div><tr><td><p>Статус:{data.type.name}</p></td></tr></div>
        </div>
        )
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
