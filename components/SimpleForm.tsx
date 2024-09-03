import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import CustomButton from "@/components/Button";
import { login } from '@/store/authSlice';
import { useAppDispatch } from '@/store/hooks';
import {string} from "prop-types";

const LoginComponent: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const dispatch = useAppDispatch();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setLoading(false);

        setError('');
/*
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
                username,
                password
            });

            if (response.status===200) {
                setTimeout(() => {
                    setLoading(false);
                    dispatch(login({ id: '123', username }));


                    router.push('/test');
                }, 1000);
            } else {
                throw new Error('Bad credentials.');
            }
        } catch (err) {
            setLoading(false);
            setError('Login error. Try again.');
        }
 */

    };

    return (
        <div className="w-full max-w-xs mx-auto">
            <h1 className="text-2xl font-bold mb-4">FORM CONTAINER</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded pb-8 mb-4">
                <h2 className=" text-custom-white px-2 bg-custom-gray rounded-t text-xl  text-left flex  items-center font-bold font-masque h-[35px]">Login</h2>
                <div className="mb-4 relative h-1 w-full bg-gray-200">
                    <div
                        className={`absolute top-0 left-0 h-full bg-blue-400 transition-all duration-1000 ease-in-out ${
                            loading ? 'w-full' : 'w-0'
                        }`}
                    ></div>
                </div>
                <div className="mb-4  px-8 ">
                    <input
                        className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="mb-2  px-8 ">
                    <input
                        className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className={`bg-custom-gray hover:bg-stone-700 text-white font-bold py-2 w-[130px] px-4 rounded focus:outline-none focus:shadow-outline ${
                            loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Wait...' : 'Login'}
                    </button>

                </div>
                <div className={`flex items-center justify-center `}>
                    {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
                </div>
            </form>
        </div>
    );
};

export default LoginComponent;