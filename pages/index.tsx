import Head from 'next/head'
import CustomButton from "@/components/Button"
import SimpleTable from "@/components/SimpleTable"
import SimpleContainer from "@/components/SimpleContainer"
import SimpleForm from "@/components/SimpleForm"


export default function Home() {

    const handleClick2 = () => {
        alert("Kliknięto przycisk 2!");
    };

    return (
        <>
            <Head>
                <title>Home - My App</title>
                <meta name="description" content="Welcome to my app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">App Template</h1>
                <p className="mb-4">This is a template for Next.js applications.</p>
                <CustomButton text="OK" onClick={handleClick2} />
            </div>
            <div className="flex items-start justify-start mt-5">
                <SimpleTable/>
                <SimpleContainer/>
                <SimpleForm/>

            </div>
        </>
    )
}