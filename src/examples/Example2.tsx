import React, { useEffect, useState } from 'react';

function Example2() {
    const [text, setText] = useState<string>("");
    const [result, setResult] = useState<string[] | undefined>(undefined);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value);

    useEffect(() => {
        if (text) {
            const response = query(text);
            setResult(response);
        } else {
            setResult(undefined);
        }
    }, [text])

    return (
        <>
            <input type="text" value={text} onChange={onChange} />
            {result?.map((r, index) => <li key={index}>{r}</li>)}
        </>
    );
}

function query(q: string): string[] {
    const latency = Math.random() * 500;
    return [q + " " + " res1", q + " " + " res2", q + " " + " res3", "latency = " + latency]
}

export default Example2;
