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