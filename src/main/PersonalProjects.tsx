import { Dot } from '../utils/Dot'
import { Italic } from '../utils/Italic'
import { SubTitle, Title } from '../utils/Title'
import SWAILogo from '../assets/projects/SWAI.png'
import BarcodeLogo from '../assets/projects/Barcode.png'

const Project = ({
    title,
    subTitle,
    description,
    imgPath,
    techStack,
}: {
    title: string
    subTitle: string
    description: string
    imgPath: string
    techStack: string[]
}) => {
    return (
        <div className="flex flex-col gap-2">
            <SubTitle>
                <Dot>{title}</Dot>
            </SubTitle>
            <img src={imgPath} alt={title} className="w-40 h-auto rounded-3xl border-black border-4" />
            <Italic>{description}</Italic>
            <Italic>{techStack.join(', ')}</Italic>
        </div>
    )
}

export const PersonalProjects = () => {
    return (
        <div className="flex flex-col gap-4">
            <Title>Personal Projects</Title>
            <Project
                title="SleepWithAI"
                subTitle="동국대학교 2020 겨울방학 iOS 개발자 양성 프로그램"
                description="CoreML의 Sound Classification 기술을 사용하여 사용자의 수면 노이즈를 녹음하여 이를 분석하고 사용자에게 가장 알맞는 기상 시간에 알아서 알람을 울려주는 iOS 어플리케이션입니다."
                imgPath={SWAILogo}
                techStack={['Swift 5', 'CoreML', 'Realm']}
            />
            <Project
                title="Barcode"
                subTitle="동국대학교 2021학년도 1학기 공개SW프로젝트"
                description='"편의점 PB 상품들을 평가할 수 있는 모바일 어플리케이션"을 개발하여 소비자들의 합리적인 소비 및 기업 차원에서 더욱 질 좋은 PB 상품을 개발할 수 있도록 하는 Win-Win 전략을 취하려 하였습니다.'
                imgPath={BarcodeLogo}
                techStack={['Java', 'MySQL', 'Glide', 'Firebase', 'KakaoSDK', 'Google Vision API']}
            />
        </div>
    )
}
