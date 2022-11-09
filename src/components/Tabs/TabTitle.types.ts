export interface ITabTitleProps {
    className?: string;
    title: string;
    index: number;
    setSelectedTab: (index: number) => void;
}