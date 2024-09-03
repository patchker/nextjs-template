import React from 'react'
import Footer from './Footer'
import dynamic from 'next/dynamic'

type LayoutProps = {
    children: React.ReactNode
}
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false })


const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex bg-custom-white font-Switzer-Regular flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout