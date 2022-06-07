import React, { Fragment } from 'react'

function Cards({ items, removeitems }) {
    return (
        <Fragment>
            {items.map(item => {
                let { id, name, age, job, phone } = item
                return (<div key={Math.random()} className="card" >

                    <h2>{name}</h2>
                    <h2>{age}</h2>
                    <h2>{job}</h2>
                    <h2>{phone}</h2>
                    <button className="close_btn" onClick={()=>{removeitems(id)}}>X</button>
                </div>)
            })}



        </Fragment>
    )
}

export default Cards

