"use client";
import { useRouter } from 'next/navigation';
import style from './photoModalCloseButton.module.css';

const PhotoModalCloseButton = () => {
    const router = useRouter();
    const onClick = () => {
        router.back();
    };

    return (
        <button className={style.closeButton} onClick={onClick}>
            <svg width={24} viewBox="0 0 24 24" aria-hidden="true"
                className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                <g>
                    <path
                        d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                </g>
            </svg>
        </button>
    )
}

export default PhotoModalCloseButton