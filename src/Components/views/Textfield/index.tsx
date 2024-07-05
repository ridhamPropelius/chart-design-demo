import React from "react";

interface TextFieldProps {
    id: string;
    label: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ id, label, placeholder, value, onChange, required }) => {
    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
            <input
                type="text"
                id={id}
                className="bg-gray-50 border border-[#6366f1] text-gray-900 text-sm rounded-lg focus:ring-[#6366f1] focus:border-[#6366f1] focus-visible:outline-[#6366f1] block w-full p-2.5 "
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export default TextField;
