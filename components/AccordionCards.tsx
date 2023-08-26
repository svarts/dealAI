"use client";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionProps } from '@/types';


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
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionCards