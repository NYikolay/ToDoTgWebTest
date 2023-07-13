'use client'
import {useTelegram} from "@/app/telegram.provider";
import { useRouter } from 'next/navigation';


async function regUser(data) {
    const response = await fetch(
        'https://b1a6-178-121-32-240.ngrok-free.app/register/',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
    )
    return await response.json();
}


export default function Home() {
    const telegram = useTelegram()
    const router = useRouter()

    const handleClick = async () => {
        await regUser({
            "username": telegram.initDataUnsafe?.user?.username || null,
            "tg_id": telegram.initDataUnsafe?.user?.id || 1111,
            "is_bot": telegram.initDataUnsafe?.user?.is_bot || null,
            "first_name": telegram.initDataUnsafe?.user?.first_name || null,
            "last_name": telegram.initDataUnsafe?.user?.last_name || null,
            "language_code": telegram.initDataUnsafe?.user?.language_code || 'ru',
            "is_premium": telegram.initDataUnsafe?.user?.is_premium || null,
            "photo_url": telegram.initDataUnsafe?.user?.photo_url || null,
            "password": "123123123"
        })

        router.push('/profile/')
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <div className="flex flex-col gap-10 items-center bg-telegram-white rounded-2xl p-10">
                <div className="flex flex-col items-center gap-3">
                    <h2 className="">Hello, {telegram.initDataUnsafe?.user?.username || 'Someone'}</h2>
                    <p className="">Let's Explore ToDo App</p>
                </div>
                <button

                    onClick={handleClick}
                    className="cursor-pointer bg-telegram-primary text-telegram-primary-text border-none rounded-xl p-3 hover:opacity-90 transition-all">
                    Let's get started
                </button>
            </div>
        </div>
    )
}
