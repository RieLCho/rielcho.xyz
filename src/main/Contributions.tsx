import Project from '../utils/Project';
import { Title } from '../utils/Title';
import ShareXLogo from '../assets/projects/ShareX.png';
import FlameshotLogo from '../assets/projects/Flameshot.svg';
import { Dot } from '../utils/Dot';

const Contribution = ({ href, label }: { href: string; label: string }) => {
    return (
        <a href={href} target="_blank" className="font-maple-light">
            <Dot>
                <span className="underline">{label}</span>
            </Dot>
        </a>
    );
};
const Contributions = () => {
    return (
        <div className="flex flex-col gap-4">
            <Title>Contributions</Title>
            <Contribution href="https://github.com/ShareX/ShareX/commits?author=RieLCho" label="ShareX (번역 기여)" />
            <Contribution
                href="https://github.com/flameshot-org/flameshot/commits?author=RieLCho"
                label="Flameshot (번역 기여)"
            />
            <Contribution href="https://aur.archlinux.org/packages/ttf-proggy-vector" label="ttf-proggy-vector" />
            <Contribution href="https://aur.archlinux.org/packages/ttf-neodgm-pro" label="ttf-neodgm-pro" />
            <Contribution
                href="https://github.com/misskey-dev/misskey/commits?author=RieLcho"
                label="misskey (버그 수정)"
            />
        </div>
    );
};

export default Contributions;
