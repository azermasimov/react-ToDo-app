import './ToDo.css';

const ToDo = (props) => {
    return (
        <div className="ui segment">
            {
                props.listItems.map((item, index) => {
                    const onClickCB = (e) => {
                        e.preventDefault();
                        props.deleteItem(index);
                    }

                    const onChangeCB = (e) => {
                        // console.log(e.target.checked);
                        props.listItems.isCompleted = e.target.checked;
                        props.inputCheckbox(item, index);
                    }

                    return(
                        <div key={index} className="">
                            <div className="ui grid">
                                <div className="left floated five wide column">
                                    <div className="ui checkbox">
                                        <input type="checkbox" onChange={onChangeCB} />
                                        <label>
                                            {item.isCompleted === true ? <del>{item.todo}</del> : item.todo}
                                            </label>
                                    </div>
                                </div>
                                <div className="right floated five wide column" onClick={onClickCB} >
                                    <i className="times circle outline icon"></i>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ToDo;