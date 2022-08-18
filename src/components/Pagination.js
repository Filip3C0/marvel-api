import React from "react";
import {PaginationContainer, Pages} from "../style"
const Pagination = (props) => {
    const{pages, totalPages, onLeftClick, onRightClick, setPages} = props
    return(
        <PaginationContainer setPages={setPages}>
            <button onClick={onLeftClick}>&lt;</button>
            <Pages>{pages} de {totalPages}</Pages>
            <button onClick={onRightClick}>&gt;</button>
        </PaginationContainer>
    )
}

export default Pagination