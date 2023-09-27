import { useState } from 'react';

const useInputState = (defaultValue = null) => {
    const [value, setInputValue] = useState(defaultValue);

    const onChange = e => {
        setInputValue(e.target.value)
    }
    return {
        value,
        onChange
    }

};

export default useInputState;