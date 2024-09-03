import Head from 'next/head'

const ListExample = () => {
    return (
        <>
            <Head>
                <title>List Example - My App</title>
            </Head>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold mb-4">List Example</h1>
                <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
                    {[...Array(10)].map((_, index) => (
                        <li key={index} className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                            List Item {index + 1}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ListExample