import React from 'react';

interface CustomButtonProps {
    text: string;
    onClick?: () => void;

}



const CustomButton: React.FC<CustomButtonProps> = ({ text,onClick }) => {
    return (
        <button className="bg-custom-gray hover:bg-stone-600 text-white font-bold py-2 px-4 rounded"
                onClick={onClick}
        >
            {text}
        </button>
    );
};

export default CustomButton;