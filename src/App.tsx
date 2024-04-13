import { WorkExperiences } from './main/WorkExperiences'
import { Education } from './main/Education'
import { PersonalInfo } from './main/PersonalInfo'
import { PersonalProjects } from './main/PersonalProjects'

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
        <body className="h-fit w-full px-64">
            <div className="px-48 py-20 bg-bg100 space-y-20 shadow-box border-2 rounded-3xl">
                <PersonalInfo />
                <WorkExperiences />
                <Education />
                <PersonalProjects />
            </div>
        </body>
    )
}

const Footer = () => {
    return <footer className="bg-black h-20">footer</footer>
}

const App = () => {
    return (
        <>
            <div className="w-full h-full p-10 bg-bg200">
                <Header />
                <Main />
            </div>
            <Footer />
        </>
    )
}

export default App
