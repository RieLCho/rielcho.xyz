import { Dot } from '../utils/Dot'
import { Italic } from '../utils/Italic'
import { SubTitle, Title } from '../utils/Title'

export const WorkExperiences = () => {
    return (
        <div className="flex flex-col gap-2">
            <Title>Work Experiences</Title>
            <SubTitle>
                <Dot>NGINE STUDIOS @ NEXON COMPANY</Dot>
            </SubTitle>
            <div className="pl-5">
                <Italic>2021.08 ~ (재직 중)</Italic>
            </div>
        </div>
    )
}
