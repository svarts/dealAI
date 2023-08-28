"use client";
import { RecruitersProps } from '@/types';

interface RecruitersCardProps {
    recruiters: RecruitersProps;
}

const Recruiters = ({ recruiters }: RecruitersCardProps) => {
    const { name, img, title, content } = recruiters;
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className='px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 mb-10 accordioncards'>
                <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
                <div className="flex flex-row items-center mb-5">
                    <img src={img} alt="recruiters" className="w-[100px] h-[100px] rounded-full " />
                    <div className="flex flex-col ml-4">
                        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
                        <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recruiters;