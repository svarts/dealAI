"use client";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionProps } from '@/types';
import CustomButton from './CustomButton';

interface AccordionCardProps {
    accordionCards: AccordionProps;
}

const AccordionCards = ({ accordionCards }: AccordionCardProps) => {
    const { img, title, content } = accordionCards;
    return (
        <Accordion className='unlimited-card accordioncards mb-10 @responsive text-base md:text-lg lg:text-xl xl:text-2xl'>
            <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white accordion-icon accordion-icon-mobile'/>}>
                <Typography className='flex justify-center items-center text-white text-4xl w-[1200px] h-[100px] text-center mobile-small accordion-font'>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-wrap">
                <div className="w-full md:w-1/2 pr-4">
                    <Typography className='text-gray-300 font-thin text-center accordion-text mobile-small'>{content}</Typography>
                </div>
                <div className="w-full md:w-1/2 pl-4">
                    <img src={img} alt="card" className="w-[450px] h-auto" />
                </div>
                <div className="w-full flex justify-center mb-10 mt-10">
                    <CustomButton
                        title="Start For Free"
                        containerStyles="uppercase text-white text-lg bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-3xl text-center"
                    />
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionCards