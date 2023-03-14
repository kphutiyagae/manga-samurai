import React from "react";

export interface IHomeProps {    
}

export interface INavigationBarProps {

}

export interface ICustomButtonProps {
    type: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined;
    classStyles?: string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
    children?: React.ReactNode;
    themeColor?: 'light' | 'dark';
}

export interface IPageSectionProps {
    sectionTitle: string;
    floatingPill?:React.ReactNode;
    children: React.ReactNode;
    styles: string;
}

export interface IListComponent {
    children?: React.ReactNode;
    skeletonLoader?: React.ReactNode;
    styles: string;
}

export interface IListCardProps {
    image?: Blob;
    styles: string;
    cardTitle:string;
    cardSubtitle?:string;
    progressPercentage?: number;
    onClick: (event?: React.MouseEvent<HTMLDivElement>) => void;
}