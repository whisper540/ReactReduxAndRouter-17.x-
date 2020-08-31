import React from "react";
import PropTypes from 'prop-types';

const AddColorForm = ({ onNewColor })=>{
    let _title, _color,myColorInput=React.createRef();

    const submit = (e)=> {
        _color = myColorInput.current;
        e.preventDefault();
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
            <form className={'add-color'} onSubmit={submit}>
                <input ref={element => _title = element} type="text" placeholder="color title..." required/>
                <input ref={myColorInput} type="color" required/>
                <button>ADD</button>
            </form>
    )
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

export default AddColorForm
