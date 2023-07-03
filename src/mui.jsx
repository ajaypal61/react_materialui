import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Mui = () => {
    return (
        <>
            <div>
                <Button variant="text">Text</Button>
                <Button variant="text" color="success" size="large">
                    Text
                </Button>
                <Button variant="contained" color="success" startIcon={<DeleteIcon />}>
                    Success
                </Button>
            </div>
        </>
    );
};

export default Mui;
