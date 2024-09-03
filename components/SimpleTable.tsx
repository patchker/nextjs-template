import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'; // Poprawione importowanie routera

interface Product {
    name: string;
    url: string;
}

const SimpleTable = () => {
    const router = useRouter(); // Użycie useRouter
    const [products, setProducts] = useState<Product[]>([
        { name: "Home", url: '/' },
        { name: "Table", url: '/table' },
        { name: "List", url: '/list' },
        { name: "Card", url: '/card' },
        { name: "Login", url: '/login' },
    ]);

    return (
        <>
            <Head>
                <title>Advanced Table Example - My App</title>
            </Head>
            <div className={`flex justify-start`}>
            <div className="w-[400px] container mx-auto px-4">
                <h1 className="text-2xl font-bold mb-4">DEBUG URLS</h1>
                <div className="overflow-x-auto border border-gray-200 rounded">
                    <table className="w-full text-sm text-left text-gray-500 bg-custom-white2 shadow">
                        <thead className="text-xs text-custom-white uppercase bg-custom-gray">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-1/2">NAME</th>
                            <th scope="col" className="px-6 py-3 w-1/2">Url</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr
                                onClick={() => router.push(product.url)}
                                key={product.name}
                                className="border-b hover:bg-stone-200 hover:cursor-pointer"
                            >
                                <td className="px-6 py-2">{product.name}</td>
                                <td className="px-6 py-2">{product.url}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </>
    );
};

export default SimpleTable;