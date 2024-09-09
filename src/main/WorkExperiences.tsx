import { Dot } from '../utils/Dot';
import { Italic } from '../utils/Italic';
import { SubTitle, Title } from '../utils/Title';

export const WorkExperiences = () => {
    return (
        <div className="flex flex-col gap-2">
            <Title>Work Experiences</Title>
            <SubTitle>
                <Dot>
                    NGINE STUDIOS @ NEXON COMPANY{' '}
                    <a href={'https://career.nexon.com/user/recruit/member/postList?joinCorp=GN'} target="_blank">
                        <span className="underline">(채용 공고)</span>
                    </a>
                </Dot>
            </SubTitle>
            <div className="pl-5">
                <Italic>2021.08 ~ (재직 중)</Italic>
            </div>
            <div className="pl-5">
                <SubTitle>
                    <a href={'https://docs.gamescale.io/ko/doc/49/categories/13993'} target="_blank">
                        <SubTitle>
                            <Dot>
                                <span className="underline">AD Creator 프론트엔드 개발</span>
                            </Dot>
                        </SubTitle>
                    </a>
                    <a href={'https://creators.nexon.com'} target="_blank">
                        <SubTitle>
                            <Dot>
                                <span className="underline">넥슨 크리에이터즈 프론트엔드 개발</span>
                            </Dot>
                        </SubTitle>
                    </a>
                    <div className="pl-5">
                        <a
                            href={'https://www.intelligencelabs.tech/86c22758-0540-4732-be7c-2494a44b893e'}
                            target="_blank"
                        >
                            <SubTitle>
                                <Dot>
                                    <span className="underline">
                                        넥슨 크리에이터즈 플랫폼의 전세계 도약을 위한 검색 엔진 최적화 여정
                                    </span>
                                </Dot>
                            </SubTitle>
                        </a>
                    </div>
                    <div className="pl-5">
                        <a href={'https://x.com/jini_QwQ/status/1808043158485586000'} target="_blank">
                            <SubTitle>
                                <Dot>
                                    <span className="underline">게임 The First Descendant 개발자 크레딧 등재</span>
                                </Dot>
                            </SubTitle>
                        </a>
                    </div>
                </SubTitle>
            </div>
        </div>
    );
};
