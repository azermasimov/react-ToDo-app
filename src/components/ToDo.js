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
                        item.isCompleted = e.target.checked;
                        props.inputCheckbox(item, index);
                    }

                    let bgColor = item.isCompleted === true ? "black" : "";
                    let checkedColor = item.isCompleted === true ? "white" : "";

                    return(
                        <div key={index} className=""  style={{backgroundColor: bgColor}}>
                            <div className="ui grid">
                                <div className="left floated five wide column">
                                    <div className="ui checkbox">
                                        <input type="checkbox" onChange={onChangeCB} />
                                        <label>
                                            {item.isCompleted === true ? <del style={{color: checkedColor}}>{item.todo}</del> : item.todo}
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