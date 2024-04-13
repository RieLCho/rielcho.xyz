import { ReactNode } from 'react'

export const Title = ({ children }: { children: ReactNode }) => {
    return <div className="text-[rgba(217,115,13,1)] text-2xl font-maple-bold">{children}</div>
}
