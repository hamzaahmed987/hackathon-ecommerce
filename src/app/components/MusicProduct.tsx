    "use client";

    import { useEffect, useState } from "react";
    import Image from "next/image";

    export default function MusicHero() {
    const [time, setTime] = useState({
        hours: 23,
        days: 4,
        minutes: 59,
        seconds: 35,
    });

    // Countdown timer logic
    useEffect(() => {
        const timer = setInterval(() => {
        setTime((prevTime) => {
            if (prevTime.seconds > 0) {
            return { ...prevTime, seconds: prevTime.seconds - 1 };
            } else if (prevTime.minutes > 0) {
            return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
            } else if (prevTime.hours > 0) {
            return {
                ...prevTime,
                hours: prevTime.hours - 1,
                minutes: 59,
                seconds: 59,
            };
            } else if (prevTime.days > 0) {
            return {
                ...prevTime,
                days: prevTime.days - 1,
                hours: 23,
                minutes: 59,
                seconds: 59,
            };
            }
            return prevTime;
        });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-[1170px] max-h-[500px] mx-auto">
        <div className="hero-container bg-gradient-to-r from-black to-gray-900 p-16 rounded-2xl relative flex justify-between items-center overflow-hidden">
            {/* Left Content Area */}
            <div className="content-area max-w-[600px]">
            <div className="category-label text-[#00ff66] text-base mb-4">Categories</div>
            <h1 className="hero-title text-white text-4xl font-bold leading-tight mb-8 max-w-[500px]">Enhance Your Music Experience</h1>

            <div className="timer-container flex gap-4 mb-8">
                <div className="timer-item bg-white rounded-full w-[80px] h-[80px] flex flex-col items-center justify-center font-bold">
                <span className="timer-value text-xl text-black">{time.days}</span>
                <span className="timer-label text-sm text-gray-600">Days</span>
                </div>

                <div className="timer-item bg-white rounded-full w-[80px] h-[80px] flex flex-col items-center justify-center font-bold">
                <span className="timer-value text-xl text-black">{time.hours}</span>
                <span className="timer-label text-sm text-gray-600">Hours</span>
                </div>

                <div className="timer-item bg-white rounded-full w-[80px] h-[80px] flex flex-col items-center justify-center font-bold">
                <span className="timer-value text-xl text-black">{time.minutes}</span>
                <span className="timer-label text-sm text-gray-600">Minutes</span>
                </div>

                <div className="timer-item bg-white rounded-full w-[80px] h-[80px] flex flex-col items-center justify-center font-bold">
                <span className="timer-value text-xl text-black">{time.seconds}</span>
                <span className="timer-label text-sm text-gray-600">Seconds</span>
                </div>
            </div>

            <button className="buy-button bg-[#00ff66] text-black border-none py-4 px-8 rounded-lg font-bold text-lg cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:bg-[#00e65c]">
                Buy Now!
            </button>
            </div>

            {/* Right Image Area */}
            <div className="image-container absolute right-4 bottom-24 max-w-[600px] max-h-[420px] flex justify-center items-center overflow-hidden">
            <Image className="w-[560px] h-[330px] object-cover" src="/spiker.png" alt="Music Experience" ></Image>
            </div>
        </div>
        </div>
    );
    }
