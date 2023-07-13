'use client'
import {useTelegram} from "@/app/telegram.provider";
import {useRouter} from "next/navigation";


export default function About({ children }) {
    const telegram = useTelegram()

    const router = useRouter()

    const handleClick = () => {
        router.push('/')
    }

    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-center font-bold">Профиль пользователя</h1>
            <div className="flex flex-col gap-4">
                <p>User id: { telegram.initDataUnsafe?.user?.id || 'None'}</p>
                <p>You bot: { telegram.initDataUnsafe?.user?.is_bot || 'None'}</p>
                <p>User first_name: { telegram.initDataUnsafe?.user?.first_name || 'None'}</p>
                <p>User last_name: { telegram.initDataUnsafe?.user?.last_name || 'None'}</p>
                <p>User username: { telegram.initDataUnsafe?.user?.username || 'None'}</p>
                <p>User language_code: { telegram.initDataUnsafe?.user?.language_code || 'None'}</p>
                <p>User is_premium: { telegram.initDataUnsafe?.user?.is_premium || 'None'}</p>
            </div>
            <button
                onClick={handleClick}
                className="cursor-pointer bg-telegram-primary text-telegram-primary-text border-none rounded-xl p-3 hover:opacity-90 transition-all">
                Turn Back
            </button>
        </div>
    )
}