import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionCards = () => {
    return (
        <Accordion className='bg-slate-900'>
            <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white'/>}>
                <Typography className='text-white text-4xl'>Protect Your Deliverability with Email Validation and Bulk Domain Testing</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className='text-white'>Clean & verify your lead lists and ensure your domains are correctly set up for cold emailing. Our one-click bulk domain tester lets you know if your domain is missing important records.</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionCards