import { useCallback, useEffect, useState } from 'react'
import './App.css'
import genFn from './helper';

function Generator() {

    const [len, setLen] = useState(8);
    const [num, setNum] = useState(true);
    const [char, setChar] = useState(false);
    const [pass, setPass] = useState("");


    const passGen = useCallback(() => {
        let p = genFn(len, num, char);
        setPass(p);
    }, [len, num, char])


    useEffect(() => {
        async function initialise() {
            let p = genFn(len, num, char);
            setPass(p);
        }
        initialise();
    }, [len, num, char])


    const copy = () => {
        window.navigator.clipboard.writeText(pass)
    }


    return (
        <>
            <input
                type="text"
                value={pass}
                style={{ width: "500px", height: "50px", fontSize: "40px" }}
                readOnly
            />
            <button onClick={copy}>Copy</button>
            <br />
            <input type="range"
                min={3}
                max={25}
                value={len}
                onChange={(e) => setLen(e.target.value)}
            />
            <label>{len}</label>
            <br />
            <input type="checkbox"
                defaultChecked={num}
                onChange={(e) => {
                    setNum((pr) => !(pr))
                }}
            />
            <label>Numbers</label>
            <br />
            <input type="checkbox"
                defaultChecked={char}
                onChange={() => {
                    setChar((pr) => !(pr))
                }}
            />
            <label>Characters</label>
            <br />
            <button onClick={passGen}>Generate</button>
        </>

    )
}

export default Generator
