import { PersonalInfo } from './main/PersonalInfo'

const Header = () => {
    return (
        <header className="h-20 sticky top-10">
            <div className="flex gap-4 justify-end font-maple-light">
                <a target="_blank" href="https://sheepjin99.tistory.com/">
                    Tistory
                </a>
                <a target="_blank" href="https://github.com/RieLCho">
                    GitHub
                </a>
                <a target="_blank" href="https://twitter.com/jini_QwQ">
                    Twitter
                </a>
            </div>
        </header>
    )
}

const Main = () => {
    return (
        <body className="h-screen w-full">
            <div className="p-10">
                <PersonalInfo />
            </div>
        </body>
    )
}

const Footer = () => {
    return <footer className="bg-black">footer</footer>
}

const App = () => {
    return (
        <>
            <div className="w-full h-full p-10 bg-bg100">
                <Header />
                <Main />
            </div>
            <Footer />
        </>
    )
}

export default App
