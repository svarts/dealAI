"use client";
import { UserProps } from '@/types';
import Image from "next/image"

interface UserRatingProps {
    userratings: UserProps;
}

const UserRatings = ({ userratings }: UserRatingProps) => {
    const { img, title, content } = userratings;
    return (
        <div className="text-white text-center md:text-left mb-28">
            <div className="hidden md:block">
                <Image 
                    src={img} 
                    alt="usersrating"
                    width={160}
                    height={160}
                    className="mb-5"            
                />
                <h1 className='text-2xl text-left'>
                    {title}
                </h1>
            </div>
            <div className="md:hidden">
                <Image 
                    src={img} 
                    alt="usersrating"
                    width={160}
                    height={160}            
                />
            </div>
            <p>
                {content}
            </p>
        </div>
    )
}

export default UserRatings