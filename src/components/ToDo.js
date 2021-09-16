import './ToDo.css';

const ToDo = (props) => {
    return (
        <ul className="ui segment">
            {
                props.listItems.map((item, index) => {
                    const onClickCallBack = () => {
                        props.deleteItem(index);
                    }

                    return(
                        <li key={index} className="">
                            <div className="ui grid">
                                <div className="ui checkbox left floated five wide column">
                                    <input type="checkbox" />
                                    <label>{item}</label>
                                </div>
                                <div className="right floated five wide column" onClick={onClickCallBack} >
                                    <i class="times circle outline icon"></i>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default ToDo;