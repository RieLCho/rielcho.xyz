import { Dot } from './Dot'
import { Italic } from './Italic'
import { SubTitle } from './Title'

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
            <div className="pl-5">
                <Italic>{subTitle}</Italic>
                <div className="flex gap-x-6 py-2">
                    <img src={imgPath} alt={title} className="w-40 h-auto rounded-3xl border-black shadow-box" />
                    <div className="flex-col">
                        <div className="font-maple-light text-xl">{description}</div>
                        <Italic>{`- ${techStack.join(', ')}`}</Italic>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
