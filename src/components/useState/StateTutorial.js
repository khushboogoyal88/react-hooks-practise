import React, {useState} from 'react'

const StateTutorial = () => {
    const [input, setInput] = useState('Khushboo')
    
    const onChange = (e) => {
      setInput(e.target.value);
    };

    return (
      <div>
        <h1> Hello, {input}</h1>
        <input type='text' onChange={onChange} />
      </div>
    );
}

export default StateTutorial
