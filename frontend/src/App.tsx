import './App.css'
import { CustomMarquee } from './component/CustomMarquee'
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState } from 'react';

function App() {
  const localtText = !localStorage.getItem("data") ? "" : localStorage.getItem("data")

  const texts = !localStorage.getItem("data") ? [] : localStorage.getItem("data").split("|") 
  const [text, setText] = useState(localtText)
  const [seperatedText, setSeperatedText] = useState<string[]>(texts)

  const handleChange = (evt) => {
    const finalText: string = evt.target.value
    localStorage.setItem("data", finalText);
    const textArray = finalText.split("|").filter(
      (string) => string != ""
    )
    if (textArray.length < 7) {
      setText(finalText)
      setSeperatedText(textArray)
      return
    }
  }
  return (
    <>
      <div className='app'>
        {seperatedText.map(
          (text: string, idx: number) => {
            return (
              <CustomMarquee key={idx} speed={50}>
                <p>{text}</p>
              </CustomMarquee>
            )
          }
        )}

      </div>
      <input id="text-input" type={"text"} onChange={handleChange} value={text} />
    </>
  )
}

export default App
