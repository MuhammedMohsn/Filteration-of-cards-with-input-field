import React, { Fragment } from 'react'
import Card from './Card'
function Cards({ items, removeitems }) {
    return (
        <Fragment><Card items={items} removeitems={removeitems}/></Fragment>
    )
}

export default Cards

