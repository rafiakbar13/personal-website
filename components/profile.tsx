import React from 'react'
import Image from 'next/image'
const Profile = () => {
    return (
        <div className="w-60 md:w-[400px]">
            <Image src='/images/Avatar.png' width={400} height={400} alt="Rafi Akbar"></Image>
        </div>
    )
}

export default Profile