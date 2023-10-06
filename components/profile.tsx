import React from 'react'
import Image from 'next/image'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
const Profile = () => {
    return (
        <div className="w-60 md:w-[400px] bg-slate-100 dark:bg-slate-700 rounded-full " style={{
            borderWidth: 2,
            borderColor: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        }}>
            <Image src='/images/Avatar.png' width={400} height={400} alt="Rafi Akbar" />
        </div>
    )
}

export default Profile