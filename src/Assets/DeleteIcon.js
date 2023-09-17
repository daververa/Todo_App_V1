import React from "react";
import { TodoIcon } from '../Assets/TodoIcon';

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon
            type='delete'
            color='gray'
            onclick={onDelete}
        />
    );

}

export { DeleteIcon };
