function MyButton() {
    return <>
        <button onClick={(e) => self.Text = "Hello!"}>
            I'm a button
        </button>
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
