"use client";
import Image from 'next/image';
import { RecruitersProps } from '@/types';

interface RecruitersCardProps {
    recruiters: RecruitersProps;
}

const Recruiters = ({ recruiters }: RecruitersCardProps) => {
    const { name, img, title, content } = recruiters;
    return (
        <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] bg-neutral-950 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5'>
            <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
            <div className="flex flex-row">
                <Image
                    src={img}  
                    alt={name} 
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] rounded-full" />
                <div className="flex flex-col ml-4 ">
                    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Recruiters;