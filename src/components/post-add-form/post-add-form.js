import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitText = this.onSubmitText.bind(this);
    }

    onChangeText(e) {
        const text = e.target.value;
        this.setState({text});
    }

    onSubmitText(e) {
        e.preventDefault();

        this.props.onAdd(this.state.text);

        this.setState({
            text: ''
        });
    }



    render() {
        return (
            <form 
            className="bottom-panel d-flex mt-5"
            onSubmit={this.onSubmitText}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onChangeText}
                    value={this.state.text}
                />
                <Button
                    color="primary"
                    size="sm"
                    type="submit"
                >
                    Добавить!
                </Button>
            </form>
        )
    }
}