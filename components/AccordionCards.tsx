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
        <Accordion className='bg-slate-900'>
            <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white'/>}>
                <Typography className='text-white text-4xl'>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className='text-white'>{content}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionCards