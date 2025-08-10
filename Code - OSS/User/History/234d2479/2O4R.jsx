export function MyButton() {
    return <>
        <button>
            I'm a button
        </button>
    </>
}

export default function App() {
    return <>
        <div>
            <h1 className="text-3xl bold">Welcome to my app</h1>
            <MyButton />
        </div>
    </>
}
