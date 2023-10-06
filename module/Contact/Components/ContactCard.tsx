import { Card, CardDescription, CardFooter } from '@/components/ui/card'
import React from 'react'
import SocialMedia from '@/components/SocialMedia';
const ContactCard = () => {
    return (
        <Card className='flex flex-col items-center border border-purple-500'>
            <div className='flex flex-col items-center justify-center w-[600px]'>
                <h2 className='text-center font-bold text-2xl'>Get In Touch</h2>
                <CardDescription className='text-center'>
                    Interested in working together or have a question? Feel free to reach out. I'm here to help you turn your ideas into amazing digital realities. Looking forward to hearing from you soon!
                </CardDescription>
                <CardFooter>
                    <SocialMedia />
                </CardFooter>
            </div>
        </Card>
    )
}

export default ContactCard