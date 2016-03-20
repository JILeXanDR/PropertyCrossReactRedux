import React from 'react'
import { Link } from 'react-router'
import Back from 'Back'

export default () => {
    return (
        <nav className="navbar navbar-default header_btn-back">
            <div className="container-fluid">

                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">PropertyCross</Link>
                </div>

                <div className="collapse navbar-collapse">
                    <form className="navbar-form navbar-right">
                        <Back />
                    </form>
                </div>

            </div>
        </nav>
    );
};