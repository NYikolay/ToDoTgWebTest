'use client'
import {TelegramProvider} from "@/app/telegram.provider";

export default function Providers({ children }) {
    return (
        <TelegramProvider>
            { children }
        </TelegramProvider>
    )
}