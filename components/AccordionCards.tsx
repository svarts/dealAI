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
        <Accordion className='unlimited-card accordioncards bg-black mb-10'>
            <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white'/>}>
                <Typography className='flex justify-center items-center text-white text-4xl w-[1200px] h-[100px]'>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className='text-white'>{content}</Typography>
                <img src={img} alt="card" />
                <div className="flex justify-center mb-10 mt-10">
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