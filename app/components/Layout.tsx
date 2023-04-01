import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer"


export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}