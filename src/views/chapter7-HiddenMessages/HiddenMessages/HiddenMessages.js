import React, {Component} from "react";
import HiddenMsg from '../HiddenMsg/HiddenMsg'

class HiddenMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                "The crow crows after midnight",
                "Bring a watch and dark clothes to the spot",
                "Jericho Jericho Go"
            ],
            showing: -1
        }
    }

    UNSAFE_componentWillMount() {
        this.interval = setInterval(() => {
            let {showing, messages} = this.state
            showing = (++showing >= messages.length) ?
                    -1 :
                    showing
            this.setState({showing})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const {messages, showing} = this.state
        return (
                <div className="hidden-messages">
                    {messages.map((message, i) =>
                            <HiddenMsg key={i} hide={(i !== showing)}>
                                {message}
                            </HiddenMsg>
                    )}
                </div>
        )
    }
}

export default HiddenMessages
