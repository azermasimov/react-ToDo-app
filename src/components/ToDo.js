import './ToDo.css';

const ToDo = (props) => {
    return (
        <ul className="ui list">
            {
                props.listItems.map((item, index) => { 
                    return( 
                        <li key={index}>
                            <div className="ui checkbox">
                                <input type="checkbox" />
                                <label>{item}</label>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default ToDo;