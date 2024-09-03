import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CustomButton from "@/components/Button"; // Poprawione importowanie routera

interface Product {
    name: string;
    url: string;
}

const SimpleTable = () => {
    const router = useRouter(); // Użycie useRouter


    return (
        <>
            <Head>
                <title>Advanced Table Example - My App</title>
            </Head>
            <div className={`flex justify-start`}>
                <div className="w-[400px] container mx-auto px-4">
                    <h1 className="text-2xl font-bold mb-4">DEBUG CONTAINER</h1>
                    <div className="overflow-x-auto border border-gray-200 rounded">
                        <div className={`font-masque bg-custom-gray p-2 text-custom-white`}>Container</div>

                        <div className={`flex flex-col justify-center items-center pt-10 bg-custom-white2`}>
                        <div>Is this OK?</div>
                        <div
                            className={` flex justify-center items-center gap-x-2 font-Inter bg-custom-white2 h-[120px] text-custom-gray`}>
                            <CustomButton text={"OK"}/>
                            <CustomButton text={"CLOSE"}/>


                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SimpleTable;