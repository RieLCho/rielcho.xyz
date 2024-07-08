import { WorkExperiences } from './main/WorkExperiences';
import { Education } from './main/Education';
import { PersonalInfo } from './main/PersonalInfo';
import { PersonalProjects } from './main/PersonalProjects';
import Contribution from './main/Contributions';

const Header = () => {
    return (
        <header className="h-20 2xl:sticky top-10">
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
    );
};

const Main = () => {
    return (
        <body className="h-fit w-full 2xl:px-64 xl:px-16 lg:px-16 md:px-8 sm:px-0">
            <div
                className="2xl:px-48 xl:px-16 lg:px-16 md:px-8 sm:px-6 
                2xl:py-20 xl:py-20 lg:py-16 md:py-8 sm:py-6 
            bg-bg100 
            2xl:space-y-20 xl:space-y-16 lg:space-y-10 md:space-y-5 sm:space-y-5 
            shadow-box border-2 rounded-3xl"
            >
                <PersonalInfo />
                <WorkExperiences />
                <Education />
                <PersonalProjects />
                <Contribution />
            </div>
        </body>
    );
};

const Footer = () => {
    return (
        <footer className="bg-black pt-4 justify-center align-middle h-20 font-maple-light md:text-base text-xs text-white">
            <div>
                <p className="text-center">© 2024 Yangjin Cho. All rights reserved.</p>
                <p className="text-center">
                    이 페이지에는 메이플스토리가 제공한 메이플스토리 서체가 적용되어 있습니다.
                </p>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <>
            <div className="w-full h-full p-10 bg-bg200">
                <Header />
                <Main />
            </div>
            <Footer />
        </>
    );
};

export default App;
