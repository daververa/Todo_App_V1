import React from 'react';
import { ReactComponent as CheckSVG } from '../Img/check.svg';
import { ReactComponent as DeleteSVG } from '../Img/delete.svg';
import '../Styles/TodoIcon.css';

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />
};

function TodoIcon({ type, color, onclick }) {
    return (
        <span className={`Icon-container Icon-container-${type}`}
            onClick={onclick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };

