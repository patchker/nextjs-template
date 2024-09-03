import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import {useAppDispatch} from "@/store/hooks";
import {login, logout} from "@/store/authSlice";
import axios from "axios";
import {router} from "next/client";


const Navbar: React.FC = () => {
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
    const [isClient, setIsClient] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }
    const handleLogout =  () => {
                    dispatch(logout());
                    router.push('/login');
        }


    return (
        <nav className="bg-custom-gray text-white p-1">
            <div className="container mx-auto flex justify-between items-center">

                <Link href="/" className="text-xl font-bold font-masque">
                    patchker
                </Link>
                <ul className="flex space-x-4  text-sm font-Inter">
                    <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                    <li><Link href="/table" className="hover:text-gray-300">Table</Link></li>
                    <li><Link href="/list" className="hover:text-gray-300">List</Link></li>
                    <li><Link href="/card" className="hover:text-gray-300">Card</Link></li>
                    {isAuthenticated && <span onClick={()=>handleLogout()} className={`pl-8 hover:text-stone-700 hover:cursor-pointer`}>[{user?.username}] Wyloguj</span>}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;