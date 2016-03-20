import React from 'react'

export default ({ loadHandler, show }) => {

    let getText = () => show ? 'Load more...' : 'It\'s last page. You can\'t load more';

    return (
        <div className="text-center">
            <button className="btn btn-block btn-danger btn-sm" disabled={!show} onClick={loadHandler}>{getText()}</button>
        </div>
    )
}