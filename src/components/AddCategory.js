import React, {useState} from 'react'
import PropsTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {
            setCategories(args => [inputValue, ...args])
            setinputValue('')
        }
    }

    return (
        <>
           <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
            />
           </form>
        </>
    )
}

AddCategory.propsTypes = {
    setCategories: PropsTypes.func.isRequired
}