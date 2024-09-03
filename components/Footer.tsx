import {config} from "@/config/config"
const Footer = () => {
    return (
        <footer className="bg-custom-gray text-white p-1 mt-8">
            <div className="container mx-auto text-center font-Inter">
                <p>&copy; 2024 <span className={`font-masque`}>patchker INC.</span>  <span className={`ml-5`}>APP: {config.version}</span></p>
            </div>
        </footer>
    )
}

export default Footer