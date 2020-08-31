import React, {Component} from "react";
import PropTypes from 'prop-types';

class AddColorForm extends Component {
    //校验规则
    static propTypes = {
        onNewColor: PropTypes.func
    }

    //设置默认值
    static defaultProps = {
        onNewColor: f => f //简单的函数占位符
    }

    //实例属性的写法一
    myTitleInput = React.createRef();

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        //实例属性的写法二
        // this.myTitleInput = React.createRef();
    }

    submit(e) {
        const _title = this.myTitleInput.current;
        const _color = this.myColorInput;
        e.preventDefault();
        //翻转数据流(双向绑定)
        this.props.onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref={this.myTitleInput} type="text" placeholder="color title..." required/>
                <input ref={element => this.myColorInput = element} type="color" required/>
                <button>ADD</button>
            </form>
        )
    }
}

export default AddColorForm
