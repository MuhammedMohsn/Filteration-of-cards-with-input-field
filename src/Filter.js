import React, { Fragment } from 'react'
function Filter({ filternames }) {
    let inputref = React.createRef()
    const handler = (e) => {
        filternames(e.target.value)
    }
    const focus_handler = (e) => { e.preventDefault(); 
        inputref.current.focus(); }
    return (
        <Fragment>
            <div className="filter">
                <form action="" onSubmit={(e) => focus_handler(e)}>
                    <input type="text" placeholder="Search" ref={inputref} onChange={(e) => { handler(e) }}></input>
                    <button className="focus_btn">Click here</button>
                </form>
            </div>
        </Fragment>
    )
}
export default Filter

