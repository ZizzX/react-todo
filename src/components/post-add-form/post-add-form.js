import React from 'react';
import { Button } from 'reactstrap';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex mt-5">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
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

export default PostAddForm;