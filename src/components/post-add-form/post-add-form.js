import React from 'react';
import { Button } from 'reactstrap';

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex mt-5">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <Button
                color="primary"
                size="sm"
                type="submit"
                onClick={() => onAdd('Hello')}
            >
                Добавить!
            </Button>
        </div>
    )
}

export default PostAddForm;