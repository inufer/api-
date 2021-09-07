import {useState} from 'react'

export const useCounter = ( initialState = 10) => {
    
    const [contando, setState] = useState(initialState)
    
    const Siguiente  = () => {
            setState(contando + 1)
    }
    return {
        contando,
        Siguiente,
    }
}
