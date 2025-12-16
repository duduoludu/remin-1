export default function Footer() {
    return (
        <footer className="w-full h-[50vh] bg-remin-clear flex flex-col items-center justify-center relative">
            <div className="w-full h-1 bg-remin-blue mb-12 shadow-[0_0_20px_#6DA0E1]" />
            <h2 className="text-2xl md:text-3xl font-serif text-remin-text">
                내일의 날씨는, <span className="text-remin-blue">맑음</span>입니다.
            </h2>
            <p className="mt-8 text-sm text-remin-text/40">© 2024 re:min. All rights reserved.</p>
        </footer>
    );
}
