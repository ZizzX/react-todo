import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <ButtonGroup>
            <Button 
            color="primary"
            >Все</Button>
            <Button
                outline
                color="success"
            >Понравилось</Button>
        </ButtonGroup>
    )
}

export default PostStatusFilter;