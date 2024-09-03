import { useState } from 'react';
import Head from 'next/head';
import { MdEditSquare } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";

interface Product {
    id: number;
    name: string;
    color: string;
    category: string;
    price: number;
}

const TableExample = () => {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Product 1', color: 'Red', category: 'Electronics', price: 10.00 },
        { id: 2, name: 'Product 2', color: 'Blue', category: 'Clothing', price: 20.00 },
        { id: 3, name: 'Product 3', color: 'Green', category: 'Home', price: 30.00 },
        { id: 4, name: 'Product 4', color: 'Yellow', category: 'Electronics', price: 40.00 },
        { id: 5, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
    ]);

    const [editingId, setEditingId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState<Product | null>(null);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const handleEdit = (product: Product) => {
        setEditingId(product.id);
        setEditForm(product);
    };

    const handleSave = () => {
        if (editForm) {
            setProducts(products.map(p => p.id === editingId ? editForm : p));
            setEditingId(null);
        }
    };

    const handleDelete = (id: number) => {
        setDeleteId(id);
    };

    const confirmDelete = () => {
        if (deleteId !== null) {
            setProducts(products.filter(p => p.id !== deleteId));
            setDeleteId(null);
        }
    };

    const cancelDelete = () => {
        setDeleteId(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editForm) {
            const { name, value } = e.target;
            setEditForm({
                ...editForm,
                [name]: name === 'price' ? parseFloat(value) : value
            });
        }
    };

    return (
        <>
            <Head>
                <title>Advanced Table Example - My App</title>
            </Head>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold mb-4">Advanced Table Example</h1>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-custom-white uppercase bg-custom-gray">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-1/5">Product name</th>
                            <th scope="col" className="px-6 py-3 w-1/5">Color</th>
                            <th scope="col" className="px-6 py-3 w-1/5">Category</th>
                            <th scope="col" className="px-6 py-3 w-1/5">Price</th>
                            <th scope="col" className="px-6 py-3 w-1/5">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="bg-white border-b">
                                {editingId === product.id && editForm ? (
                                    <>
                                        <td className="px-6 py-2">
                                            <input
                                                type="text"
                                                name="name"
                                                value={editForm.name}
                                                onChange={handleChange}
                                                className="w-full border rounded px-2 py-1"
                                            />
                                        </td>
                                        <td className="px-6 py-2">
                                            <input
                                                type="text"
                                                name="color"
                                                value={editForm.color}
                                                onChange={handleChange}
                                                className="w-full border rounded px-2 py-1"
                                            />
                                        </td>
                                        <td className="px-6 py-2">
                                            <input
                                                type="text"
                                                name="category"
                                                value={editForm.category}
                                                onChange={handleChange}
                                                className="w-full border rounded px-2 py-1"
                                            />
                                        </td>
                                        <td className="px-6 py-2">
                                            <input
                                                type="number"
                                                name="price"
                                                value={editForm.price}
                                                onChange={handleChange}
                                                className="w-full border rounded px-2 py-1"
                                            />
                                        </td>
                                        <td className="px-6 py-2">
                                            <button onClick={handleSave} className="text-green-600 hover:text-green-900 mr-2">
                                                <MdEditSquare />

                                            </button>
                                            <button onClick={() => setEditingId(null)} className="text-red-600 hover:text-red-900">
                                                <MdDeleteSweep/>
                                            </button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="px-6 py-2">{product.name}</td>
                                        <td className="px-6 py-2">{product.color}</td>
                                        <td className="px-6 py-2">{product.category}</td>
                                        <td className="px-6 py-2">${product.price.toFixed(2)}</td>
                                        <td className="px-6 py-2">
                                            <button onClick={() => handleEdit(product)} className="text-custom-gray hover:text-stone-700 mr-2">
                                                <MdEditSquare  className={`text-xl`}/>
                                            </button>
                                            <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-900">
                                                <MdDeleteSweep className={`text-xl`}/>

                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {deleteId !== null && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
                    <div className="relative top-60 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Potwierdź usunięcie</h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500">
                                    Czy na pewno chcesz usunąć ten produkt?
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    id="ok-btn"
                                    className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-24 mr-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                                    onClick={confirmDelete}
                                >
                                    Usuń
                                </button>
                                <button
                                    id="cancel-btn"
                                    className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-24 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    onClick={cancelDelete}
                                >
                                    Anuluj
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TableExample;