import { Dot } from '../utils/Dot'
import { Italic } from '../utils/Italic'
import { Title } from '../utils/Title'

export const Education = () => {
    return (
        <div className="flex flex-col gap-2">
            <Title>Education</Title>
            <Dot>가톨릭대학교 컴퓨터정보공학부</Dot>
            <Italic>2018.03 ~ 2019.01 (중퇴)</Italic>
            <Dot>동국대학교 공과대학 컴퓨터공학과</Dot>
            <Italic>GPA: 3.76/4.5</Italic>
            <Italic>2019.03 ~ (휴학)</Italic>
        </div>
    )
}
