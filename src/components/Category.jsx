import React from 'react'

import { useNavigate } from 'react-router-dom'

function Category({ categoryData }) {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate(`/category/${categoryData?.category}`)}
            className="CategorySelectBox flex h-[10rem] w-[15rem] flex-col justify-between rounded cursor-pointer"
        >
            <img className="h-[8rem] w-full object-cover object-center rounded"
                src={categoryData?.thumbnail} alt={categoryData?.category} />
            <p>{categoryData?.category}</p>
        </div>
    )
}


export default Category