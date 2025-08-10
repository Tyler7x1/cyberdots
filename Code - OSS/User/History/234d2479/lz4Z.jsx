function MyButton() {
    return <>
        <p onClick={console.log("Hello World!")}>
            I'm a button
        </p>
    </>
}

export default function App() {
    return <>
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    </>
}
