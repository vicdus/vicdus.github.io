import React, { useEffect, useState } from 'react';

function Example3() {
    const [text, setText] = useState<string>("");
    const [result, setResult] = useState<string[] | undefined>(undefined);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value);

    const fetchAndSaveData = async () => {
        if (text) {
            const response = await query(text)
            setResult(response);
        } else {
            setResult(undefined)
        }
    }

    useEffect(() => {
        fetchAndSaveData()
    }, [text])

    return (
        <>
            <input type="text" value={text} onChange={onChange} />
            {result?.map((r, index) => <li key={index}>{r}</li>)}
        </>
    );
}

async function query(q: string): Promise<string[]> {
    return new Promise((res) => {
        const latency = Math.random() * 500;
        window.setTimeout(() => res([q + " " + " res1", q + " " + " res2", q + " " + " res3", "latency = " + latency]), latency)
    });
}

export default Example3;
