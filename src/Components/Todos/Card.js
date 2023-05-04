import { PureComponent } from "react";
import "./../../index.css";


class Card extends PureComponent {

    state = {

    }

    render() {
        return (
            <>
                <section className="w-full h-auto flex justify-between items-center border-2 rounded-md box-border p-3 mb-2">
                    <span>{this.props.todo_text}</span>
                    {
                        this.props.todo_status
                            ?
                            <button className="w-[80px] h-7 text-white rounded-md bg-orange-500" onClick={(event) => this.props.change_todo_status(this.props.todo_id)}>undone</button>
                            :
                            <button className="w-[80px] h-7 text-white rounded-md bg-green-500" onClick={(event) => this.props.change_todo_status(this.props.todo_id)}>done</button>

                    }
                </section>
            </>
        )
    }

}


export default Card;