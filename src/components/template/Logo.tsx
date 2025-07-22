import { CodeIcon } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
    return (
        <div>
            <Link href='/' className='flex items-center justify-center gap-2 text-2xl font-semibold cursor-pointer'>
                <CodeIcon fontSize="large" />
                <span className='hidden lg:block'>Matheus Mattos</span>
                <span className='lg:hidden'>MM</span>
            </Link>
        </div>
    );
}