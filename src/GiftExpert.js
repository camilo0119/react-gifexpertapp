import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpert = () => {

const [categories, setCategories] = useState(['Rick & morty'])

const handleAddItem = () => {
    setCategories([...categories, 'Nuevo item'])
}

    return (
        <div>
            <h2>GirfExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category}/>
                    ))
                }
            </ol>
            <button onClick={handleAddItem}>Add item</button>
        </div>
    )
}

export default GiftExpert