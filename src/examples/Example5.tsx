import React, { useEffect, useState } from 'react';

type TQandResult = { q: string, payload: string[] | undefined } | undefined

function Example5() {
    const [qAndResult, setQandResult] = useState<TQandResult>(undefined);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setQandResult({ q: event.target.value, payload: undefined });

    const fetchAndSaveData = async () => {
        if (qAndResult?.q) {
            const response = await query(qAndResult.q)
            setQandResult(prevQandResult => {
                if (prevQandResult?.q === qAndResult.q) {
                    return { q: qAndResult.q, payload: response }
                } else {
                    return prevQandResult;
                }
            });
        } else {
            setQandResult({ q: "", payload: undefined })
        }
    }

    useEffect(() => {
        fetchAndSaveData()
    }, [qAndResult?.q])

    return (
        <>
            <Input onChange={onChange} qAndResult={qAndResult} />
            <ResultList qAndResult={qAndResult} />
        </>
    );
}

function Input({ onChange, qAndResult }: { onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, qAndResult: TQandResult }) {
    // some very long stuff
    return <input type="text" value={qAndResult?.q ?? ""} onChange={onChange} />
}

function ResultList({ qAndResult }: { qAndResult: TQandResult }) {
    // some very long stuff
    return <>{qAndResult?.payload?.map((r, index) => <li key={index}>{r}</li>)}</>;
}

async function query(q: string): Promise<string[]> {
    return new Promise((res) => {
        const latency = Math.random() * 500;
        window.setTimeout(() => res([q + " " + " res1", q + " " + " res2", q + " " + " res3", "latency = " + latency]), latency)
    });
}

export default Example5;
