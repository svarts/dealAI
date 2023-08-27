"use client";
import { UserProps } from '@/types';
import Image from "next/image"

interface UserRatingProps {
    userratings: UserProps;
}

const UserRatings = ({ userratings }: UserRatingProps) => {
    const { img, title, content } = userratings;
    return (
        <div className="">
            <Image 
                src={img} 
                alt="usersrating"
                width={160}
                height={160}            
            />
            <h1 className='text-white text-center text-2xl'>
                {title}
            </h1>
            <p className='text-white text-center'>
                {content}
            </p>
        </div>
    )
}

export default UserRatings