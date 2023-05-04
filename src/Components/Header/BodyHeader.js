import { PureComponent } from "react";
import "./../../index.css";


class BodyHeader extends PureComponent {

    state = {}

    add_new_todo(){
        let todo_input = document.getElementById("todo_input"); 
        this.props.add_new_todo({
            text : todo_input.value,
            done_status : false
        });
    }

    render() {
        return (
            <>
                <section className="w-full h-[300px] bg-slate-200 flex justify-center items-center">
                    <div className="container mx-auto h-[70%] flex flex-col justify-center items-center">
                        <span className="text-2xl font-bold my-2">Welcome!</span>
                        <p className="text-center text-slate-400 my-2">To get started, add some items to your list:</p>
                        <div className="flex w-64 gap-2 h-[50px] my-2 box-border p-2">
                            <input id="todo_input" type="text" className="w-[80%] outline-none rounded text-center" placeholder="i want to do..." />
                            <button onClick={this.add_new_todo.bind(this)} className="w-[20%] bg-blue-500 rounded-md text-white flex justify-center items-center h-full">add</button>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}


export default BodyHeader;