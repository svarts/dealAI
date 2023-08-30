import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface FeedbackProps {
    id:string,
    img:string,
    content:string,
    name:string,
    title:string,
}

export interface UserProps {
    id:string,
    img:string,
    title:string,
    content:string,
}

export interface AccordionProps {
    id:string,
    img:string,
    title:string,
    content:string
}

export interface RecruitersProps {
    [x: string]: any;
    id:string,
    name: string,
    img:string,
    title:string,
    content:string
}