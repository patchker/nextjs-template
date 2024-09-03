import {useEffect, useState} from 'react';
import Head from 'next/head';
import { MdEditSquare, MdDeleteSweep, MdClose, MdSave } from "react-icons/md";

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
        { id: 6, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 7, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 8, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 9, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 10, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 11, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 12, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 13, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 14, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 15, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 16, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 17, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 18, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 19, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
        { id: 20, name: 'Product 5', color: 'Purple', category: 'Clothing', price: 50.00 },
    ]);

    const [editingId, setEditingId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState<Product | null>(null);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

    const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        setDisplayedProducts(filteredProducts.slice(startIndex, endIndex));
    }, [currentPage, filteredProducts]);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filtered = products.filter((product) => {
            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.color.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
        });

        setFilteredProducts(filtered);
        setCurrentPage(1); // Reset to first page when searching
    };


    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };
    const handleRowClick = (product: Product) => {
        if (selectedProduct && selectedProduct.id === product.id && isDetailOpen) {
            // Jeśli kliknięty produkt jest już wybrany i panel jest otwarty, zamykamy panel
            setIsDetailOpen(false);
            setSelectedProduct(null);
        } else {
            // W przeciwnym razie otwieramy panel z nowym produktem
            setSelectedProduct(product);
            setIsDetailOpen(true);
        }

        // Resetujemy tryb edycji przy każdym kliknięciu
        setIsEditing(false);
    };

    const closeDetail = () => {
        setSelectedProduct(null);
        setIsDetailOpen(false);
    };



    const handleSave = () => {
        if (editForm) {
            setProducts(products.map(p => p.id === editingId ? editForm : p));
            setEditingId(null);
        }
    };



    const confirmDelete = () => {
        if (deleteId !== null) {
            setProducts(products.filter(p => p.id !== deleteId));
            setDeleteId(null);
            closeDetail();
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
    const handleEditInDetails = () => {
        setIsEditing(true);
        setEditForm(selectedProduct);
    };

    const handleSaveInDetails = () => {
        if (editForm) {
            setProducts(products.map(p => p.id === editForm.id ? editForm : p));
            setSelectedProduct(editForm);
            setIsEditing(false);
        }
    };

    const handleDeleteInDetails = () => {
        setDeleteId(selectedProduct?.id || null);
    };
    return (
        <>
            <Head>
                <title>Advanced Table Example - My App</title>
            </Head>
            <div className={`transition-all duration-100 ${isDetailOpen ? 'mr-[30%]' : ''}`}>
                <h1 className="text-2xl font-bold mb-4">Advanced Table Example</h1>
                <div className="overflow-x-auto">

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className="w-full border rounded px-2 py-1 mb-4"
                    />


                    <table className="w-full text-sm text-center text-gray-500">
                        <thead className="text-xs text-custom-white uppercase bg-custom-gray">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-1/5">Product name</th>
                            <th scope="col" className="px-6 py-3 w-1/5">Color</th>
                            <th scope="col" className="px-6 py-3 w-1/5">Category</th>
                            <th scope="col" className="px-6 py-3 w-1/5">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {displayedProducts.map((product) => (
                            <tr
                                key={product.id}
                                className={`bg-white border-b cursor-pointer hover:bg-gray-100 ${
                                    selectedProduct?.id === product.id && isDetailOpen ? 'bg-blue-50' : ''
                                }`}
                                onClick={() => handleRowClick(product)}
                            >
                                {editingId === product.id && editForm ? (
                                    <>
                                        <td className="px-6 py-1">
                                            <input
                                                type="text"
                                                name="name"
                                                value={editForm.name}
                                                onChange={handleChange}
                                                className="w-full border rounded px-2 py-1"
                                            />
                                        </td>
                                        <td className="px-6 py-1">
                                            <input
                                                type="text"
                                                name="color"
                                                value={editForm.color}
                                                onChange={handleChange}
                                                className="w-full border rounded px-2 py-1"
                                            />
                                        </td>
                                        <td className="px-6 py-1">
                                            <input
                                                type="text"
                                                name="category"
                                                value={editForm.category}
                                                onChange={handleChange}
                                                className="w-full border rounded px-2 py-1"
                                            />
                                        </td>
                                        <td className="px-6 py-1">
                                            <input
                                                type="number"
                                                name="price"
                                                value={editForm.price}
                                                onChange={handleChange}
                                                className="w-full border rounded px-2 py-1"
                                            />
                                        </td>
                                        <td className="px-6 py-1">
                                            <button onClick={handleSave}
                                                    className="text-green-600 hover:text-green-900 mr-2">
                                                <MdEditSquare/>

                                            </button>
                                            <button onClick={() => setEditingId(null)}
                                                    className="text-red-600 hover:text-red-900">
                                                <MdDeleteSweep/>
                                            </button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="px-6 py-1">{product.name}</td>
                                        <td className="px-6 py-1">{product.color}</td>
                                        <td className="px-6 py-1">{product.category}</td>
                                        <td className="px-6 py-1">${product.price.toFixed(2)}</td>

                                    </>
                                )}
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div className="flex justify-center mt-4">
                        {Array(Math.ceil(filteredProducts.length / productsPerPage)).fill(0).map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-600'} rounded-md hover:bg-gray-600 transition-colors`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {deleteId !== null && (
                <div className="fixed z-10 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
                     id="my-modal">
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

            {/* Szczegóły produktu */}
            {isDetailOpen && selectedProduct && (
                <div className="fixed right-0 top-[36px] bottom-[33px] w-[30%] bg-white shadow-lg overflow-y-auto">
                    <div className="p-6 h-full flex flex-col">
                        <button
                            onClick={closeDetail}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <MdClose className="text-2xl" />
                        </button>

                        <h2 className="text-3xl font-bold mb-6 text-gray-800">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={editForm?.name || ''}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                                />
                            ) : selectedProduct.name}
                        </h2>

                        <div className="space-y-4 flex-grow">
                            <div className="flex items-center">
                                <span className="w-24 font-semibold text-gray-600">Color:</span>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="color"
                                        value={editForm?.color || ''}
                                        onChange={handleChange}
                                        className="flex-grow border-b border-gray-300 focus:border-blue-500 outline-none"
                                    />
                                ) : <span className="text-gray-800">{selectedProduct.color}</span>}
                            </div>
                            <div className="flex items-center">
                                <span className="w-24 font-semibold text-gray-600">Category:</span>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="category"
                                        value={editForm?.category || ''}
                                        onChange={handleChange}
                                        className="flex-grow border-b border-gray-300 focus:border-blue-500 outline-none"
                                    />
                                ) : <span className="text-gray-800">{selectedProduct.category}</span>}
                            </div>
                            <div className="flex items-center">
                                <span className="w-24 font-semibold text-gray-600">Price:</span>
                                {isEditing ? (
                                    <input
                                        type="number"
                                        name="price"
                                        value={editForm?.price || 0}
                                        onChange={handleChange}
                                        className="flex-grow border-b border-gray-300 focus:border-blue-500 outline-none"
                                    />
                                ) : <span className="text-gray-800">${selectedProduct.price.toFixed(2)}</span>}
                            </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-gray-200 space-y-2">
                            {isEditing ? (
                                <button
                                    onClick={handleSaveInDetails}
                                    className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
                                >
                                    <MdSave className="mr-2" /> Save Changes
                                </button>
                            ) : (
                                <button
                                    onClick={handleEditInDetails}
                                    className="w-full bg-custom-gray text-white py-2 px-4 rounded-md hover:bg-stone-700 transition-colors flex items-center justify-center"
                                >
                                    <MdEditSquare className="mr-2" /> Edit Product
                                </button>
                            )}
                            <button
                                onClick={handleDeleteInDetails}
                                className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center"
                            >
                                <MdDeleteSweep className="mr-2" /> Delete Product
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default TableExample;