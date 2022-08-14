import React, { Suspense, } from 'react';
import { RecoilRoot, atom, selector, useRecoilState, RecoilValueReadOnly, useRecoilValue } from 'recoil';

type TQandResult = { q: string, payload: string[] } | undefined

const searchBarText = atom({
    key: 'searchBarText',
    default: '',
});

const searchResult: RecoilValueReadOnly<string[] | undefined> = selector({
    key: 'searchResult',
    get: async ({ get }) => {
        const q = get(searchBarText);
        return q ? await query(q) : undefined
    }
});

function Example6() {
    return (
        <RecoilRoot>
            <Input />
            <Suspense fallback={undefined}>
                <ResultList />
            </Suspense>
        </RecoilRoot>
    );
}

function Input() {
    // some very long stuff
    const [text, setText] = useRecoilState(searchBarText);
    return <input type="text" value={text} onChange={event => setText(event.target.value)} />
}

function ResultList() {
    // some very long stuff
    const res = useRecoilValue(searchResult);
    return <>{res?.map((r, index) => <li key={index}>{r}</li>)}</>;
}

async function query(q: string): Promise<string[]> {
    return new Promise((res) => {
        const latency = Math.random() * 500;
        window.setTimeout(() => res([q + " " + " res1", q + " " + " res2", q + " " + " res3", "latency = " + latency]), latency)
    });
}

export default Example6;
