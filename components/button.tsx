import { useRouter } from "next/navigation";

export const OutlineButton = ({ children, navigate, onClick, className }: { children: React.ReactNode; navigate?: string; onClick?: () => void; className?: string }) => {
    const router = useRouter()
    const handleClick = onClick ?? (() => navigate && router.push(navigate))
    return (
        <button onClick={handleClick} className={`relative group overflow-hidden rounded-full bg-kx-surface-800 border border-kx-surface-600 px-8 py-3 flex items-center justify-center transition-all hover:border-kx-orange-400/50 hover:shadow-[0_0_40px_-10px_rgba(242,105,74,0.3)] cursor-pointer ${className}`}>
            {children}
        </button>

    );
}
export const PrimaryButton = ({ children, navigate, className }: { children: React.ReactNode; navigate: string; className?: string }) => {
    const router = useRouter()
    return (
        <button onClick={() => router.push(navigate)} className={`relative group overflow-hidden rounded-full bg-kx-orange border border-kx-orange px-8 py-3 flex items-center justify-center transition-all cursor-pointer ${className}`}>
            {children}
        </button>

    );
}