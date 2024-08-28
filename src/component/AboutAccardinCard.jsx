import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import React from 'react'


function AboutAccardinCard({ header, desc }) {
    return (
        <div className='accordion'>
            <Accordion >
                <AccordionItem header={<h3>{header}</h3>}>
                    <div>
                        <p> {desc}</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AboutAccardinCard
