import React, { useRef } from 'react'
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value) 
    }

  return (
    <form className='input' onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur()
        }}>

        <input 
            type="input" 
            placeholder='enter a task' 
            className='input__box'
            value={todo}
            onChange={handleChange}
            ref={inputRef}
        />

        <button 
            className='input_submit' 
            type='submit'
        >Go
        </button>

    </form>
  )
}

export default InputField