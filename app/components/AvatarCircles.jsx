"use client";

import profile1 from '../../public/profile1.webp'
import profile2 from '../../public/profile2.webp'
import profile3 from '../../public/profile3.webp'
import profile4 from '../../public/profile4.webp'

const AvatarCircles = ({
    className,
}) => {

    const numPeople = 10
    const avatarUrls = [profile1, profile2, profile3, profile4]

    return (
        <div className={`flex -space-x-4 rtl:space-x-reverse ${className}`}>
            {avatarUrls.map((url, index) => (
                <img
                    key={index}
                    className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                    src={url.src}
                    width={40}
                    height={40}
                    alt={`Avatar ${index + 1}`}
                />
            ))}
            <a
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-sm font-semibold text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
                href=""
            >
                +{numPeople}
            </a>
        </div>
    );
};

export default AvatarCircles;
