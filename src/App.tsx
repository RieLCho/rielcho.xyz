const Header = () => {
    return (
        <header className="h-20 sticky top-10">
            <div className="flex gap-4 justify-end">
                <a href="https://sheepjin99.tistory.com/">Tistory</a>
                <a href="https://github.com/">GitHub</a>
                <a href="https://twitter.com/jini_QwQ">Twitter</a>
            </div>
        </header>
    )
}

const Main = () => {
    return (
        <body className="h-screen w-full">
            <div>Yangjin Cho</div>
            <div>좋아하는 것에 진심인, 꿈나무 개발자 조양진입니다.</div>
        </body>
    )
}

const Footer = () => {
    return <footer className="">footer</footer>
}

const App = () => {
    return (
        <div className="w-full h-full p-10 bg-bg100">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App
