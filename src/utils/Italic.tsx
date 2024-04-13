import { ReactNode } from 'react';

export const Italic = ({ children }: { children: ReactNode }) => {
    return <div className="italic text-gray-400 font-maple-light">{children}</div>;
};
