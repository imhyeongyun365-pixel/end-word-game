import React, {useEffect, useState, useRef} from 'react'
import "./WordGame.scss"

const WordGame = ({startword}) => {
    const [word,setword]=useState(startword)

    const[userInput, setUserInput]=useState("")
    const inputRef =useRef(null)
    const [message,setMessage]=useState("끌말읽기 시작!")


    useEffect(()=>{
        
        inputRef.current.focus()
    },[])

    const handleChange=(e)=> {
        setUserInput(e.target.value)
    }

    const checkWord=()=> {
        const trinnedWord = userInput.trin()

        if (!trinnedWord) {
            setMessage("단어를 입력하세요.")
            return
        }

        const lastChar = word[word.length-1]
        const firstChar = trinnedWord[0]
        console.log(lastChar,firstChar)


        if(lastChar !== firstChar) {
            setMessage(`'${lastChar}'로 시작하는 단어로 입력하세요.`)
        }else {
            setMessage("성공~ 다음 단어를 입력하세요.")
            setword(trinnedWord)
        }
        setUserInput("")
    }

  return (
     <div className="game-container">
        <h1>끝말읽기</h1>
        <p className='current-word'>
        {word}
        </p>
        <input 
         ref={inputRef}
         onChange={handleChange}
         onKeyUp={(e)=>e.key==='Enter' && checkWord()}
         type="text"
         value={userInput}
         />
         <button onClick={checkWord}>확인</button>
         <p className='message'>{message}</p>
    </div>

)
}

export default WordGame
