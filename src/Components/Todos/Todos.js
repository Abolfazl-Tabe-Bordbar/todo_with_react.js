import { PureComponent } from "react";
import BodyHeader from "./../Header/BodyHeader";
import Card from "./Card";
import "./../../index.css";



class Todos extends PureComponent {

    state = {
        done_status: false,
        done_count : 0,
        undone_count : 0,
        todos: [
            {
                id: 0,
                text: "item one",
                done_status: false
            },
            {
                id: 1,
                text: "item two",
                done_status: false
            },
            {
                id: 3,
                text: "item three",
                done_status: true
            },
        ]
    }

    change_tab_todos_status() {
        this.setState({
            done_status: !this.state.done_status,
        })
    }
    change_todo_status(id) {

        let todos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                // console.log();
                return {
                    id : id,
                    text : todo.text,
                    done_status : !todo.done_status
                }
            }else{
                return todo
            }
        });

        this.setState({
            todos
        })
    }

    add_new_todo(new_todo) {

        let new_todo_for_add = { 
            id: this.state.todos[this.state.todos.length - 1].id,
            text : new_todo.text,
            done_status : new_todo.done_status
        };

        this.setState({
            todos: [...this.state.todos,new_todo_for_add]
        });

    }

    render() {
        return (
            <>
                <BodyHeader add_new_todo={this.add_new_todo.bind(this)} />
                <section className="w-full h-auto flex flex-col justify-center items-center">

                    <section className="w-96  h-[50px] mx-auto my-2  border-b-2 relative">
                        <button onClick={this.change_tab_todos_status.bind(this)} className={`w-[110px] absolute h-full flex justify-around items-center  ${this.state.done_status === false ? '-bottom-[2px] rounded-b-none border-2 border-b-white rounded-md' : ''}`}>
                            <span>undone</span>
                            <span className="w-7 h-7 bg-slate-500 rounded-lg text-white flex justify-center items-center">{this.state.undone_count}</span>
                        </button>
                        <button onClick={this.change_tab_todos_status.bind(this)} className={`w-[100px] left-[112px] absolute  h-full flex justify-around items-center ${this.state.done_status === true ? '-bottom-[2px] rounded-b-none border-2 border-b-white rounded-md' : ''}`}>
                            <span>done</span>
                            <span className="w-7 h-7 bg-green-500 rounded-lg text-white flex justify-center items-center">{this.state.done_count}</span>
                        </button>
                    </section>

                    <section className="w-96 h-auto flex flex-col justify-center items-center">
                        {
                            this.state.todos.map((todo, index) => {
                                if (todo.done_status == this.state.done_status) {
                                    return (
                                        <Card change_todo_status={this.change_todo_status.bind(this)} todo_text={todo.text} todo_status={todo.done_status} todo_id={todo.id} key={index} />
                                    )
                                }
                            })
                        }
                    </section>

                </section>
            </>
        )
    }


    componentDidMount(){
        let done_count = 0;
        let undone_count = 0;

        for (let index = 0; index < this.state.todos.length; index++) {
            
            if (this.state.todos[index].done_status) {
                done_count += 1;
            } else {
                undone_count += 1;
            }
            
        }

        this.setState({
            done_count,undone_count
        })
    }

    componentDidUpdate(){
        let done_count = 0;
        let undone_count = 0;

        for (let index = 0; index < this.state.todos.length; index++) {
            
            if (this.state.todos[index].done_status) {
                done_count += 1;
            } else {
                undone_count += 1;
            }
            
        }

        this.setState({
            done_count,undone_count
        })
    }

}


export default Todos;