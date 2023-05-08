import { useState } from 'react';


export const useLocalStorage = () => {
    const [text, setText] = useState<string>("")
    const data = localStorage.getItem("data");
    if (data) {
        setText(data);
    }

    const handleSave = (data: string) => {
        console.log("Save data to local storage");
        localStorage.setItem("data", data);
    }

    return [text, handleSave]
}