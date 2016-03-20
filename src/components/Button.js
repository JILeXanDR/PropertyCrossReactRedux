import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default ({ btnType = 'default', btnSize = 'sm', to = '#', onClick, children }) => {

    let getClassNames = (btnType, btnSize) => {

        var classesNames = [
            'btn',
            `btn-${btnType}`,
            `btn-${btnSize}`
        ];

        return classesNames.join(' ');
    };

    let click = (e) => {
        if (typeof onClick === "function") {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <Link className={getClassNames(btnType, btnSize)} role="button" to={to} onClick={click}>{children}</Link>
    );
}