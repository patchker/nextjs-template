import Head from 'next/head'
import CustomButton from "@/components/Button"

const CardExample = () => {
    return (
        <>
            <Head>
                <title>Card Example - My App</title>
            </Head>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold mb-4">Card Example</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-md">
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Card {index + 1}</h5>
                                <p className="mb-3 font-normal text-gray-700">Here's some example content for Card {index + 1}. You can replace this with any content you like.</p>

                                <CustomButton text="Read more"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardExample