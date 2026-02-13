import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-foreground/50 text-sm flex items-center gap-2">
                    © {new Date().getFullYear()} Ahmed. Designed & Built with <span className="text-red-500">♥</span> & <span className="text-accent">AI</span>
                </p>
                <div className="flex space-x-8 space-x-reverse">
                    <Link href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm font-medium">
                        LinkedIn
                    </Link>
                    <Link href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm font-medium">
                        Twitter (X)
                    </Link>
                    <Link href="https://github.com/amiryousry1" className="text-foreground/60 hover:text-accent transition-colors text-sm font-medium">
                        GitHub
                    </Link>
                </div>
            </div>
        </footer>
    );
}
