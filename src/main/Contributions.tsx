import Project from '../utils/Project';
import { Title } from '../utils/Title';
import ShareXLogo from '../assets/projects/ShareX.png';
import FlameshotLogo from '../assets/projects/Flameshot.svg';
import { Dot } from '../utils/Dot';

const Contribution = ({ href, label }: { href: string; label: string }) => {
    return (
        <a href={href} target="_blank" className="font-maple-light">
            <Dot>{label}</Dot>
        </a>
    );
};
const Contributions = () => {
    return (
        <div className="flex flex-col gap-4">
            <Title>Open Source Project Contributions</Title>
            <Contribution href="https://github.com/ShareX/ShareX/commits?author=RieLCho" label="ShareX (번역 기여)" />
            <Contribution
                href="https://github.com/flameshot-org/flameshot/commits?author=RieLCho"
                label="Flameshot (번역 기여)"
            />
            <Contribution
                href="https://aur.archlinux.org/packages/ttf-proggy-vector"
                label="ttf-proggy-vector (PKGBUILD 작성)"
            />
            <Contribution
                href="https://aur.archlinux.org/packages/ttf-neodgm-pro"
                label="ttf-neodgm-pro (PKGBUILD 작성)"
            />
            <Contribution
                href="https://github.com/misskey-dev/misskey/commits?author=RieLcho"
                label="misskey (Front-End 버그 수정)"
            />
        </div>
    );
};

export default Contributions;
