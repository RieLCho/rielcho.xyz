import { Dot } from './Dot'
import { Italic } from './Italic'
import { SubTitle } from './Title'

interface techStack {
    label: string
    url: string
}

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
    techStack: techStack[]
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
                        <p className="font-maple-light text-xl whitespace-pre-line">{description}</p>
                        <Italic>
                            {techStack.map((v) => {
                                return (
                                    <a key={v.label} href={v.url} target="_blank">
                                        <div>{v.label}</div>
                                    </a>
                                )
                            })}
                        </Italic>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
