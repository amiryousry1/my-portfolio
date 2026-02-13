export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} جميع الحقوق محفوظة.
                </p>
                <div className="flex space-x-6 space-x-reverse">
                    <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                        LinkedIn
                    </a>
                    <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                        Twitter
                    </a>
                    <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
