import { Typography } from '@mui/material'
import React from 'react'
import './Footer.css'
import resumeData from '../../utilities/resumeData'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography className='footer_name'> {resumeData.name}</Typography>
            </div>
            <div className='footer_right'>
                <Typography className='footer_copyright'>
                    designed and developed by  Oskar Åhling
                    
                </Typography>
            </div>

        </div>
    )
}

export default Footer