import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AddButton () {
    return (
        <Link to='/agregar'>
            <Button type="button" className="btn btn-default" aria-label="Left Align">
                +
            </Button>
        </Link>
    )
}

export default AddButton;