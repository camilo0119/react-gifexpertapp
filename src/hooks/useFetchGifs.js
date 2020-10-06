import {useEffect, useState} from 'react'
import { getGift } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // Evita que el metodo se ejecute cada vez que exista un cambio en el componente
    useEffect(() => {
        getGift(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            })
        })
    }, [category]) //Se llama si category cambia

    return state
}
