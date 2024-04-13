const Footer = () => {
    return (
        <header className="bg-red-50 h-20">
            <div>
                <a href="https://sheepjin99.tistory.com/">Tistory</a>
                <a href="https://github.com/">GitHub</a>
                <a href="https://twitter.com/jini_QwQ">Twitter</a>
            </div>
        </header>
    )
}

const Main = () => {
    return <body className="bg-bg100">main</body>
}

const App = () => {
    return (
        <div className="w-full h-full bg-bg100">
            <Footer />
            <Main />
        </div>
    )
}

export default App
