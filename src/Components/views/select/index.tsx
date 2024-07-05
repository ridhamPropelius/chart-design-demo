import React, {useState} from "react";

interface Props {
    options : {label:string, value:any, [key:string]:any}[],
    onChange : ({label,value}:{label:string, value:any, [key:string]:any}) => void,
    selected : {label:string, value:any}
}

const Select = ({options, onChange, selected={label:'Select'}}:Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOptionClick = (option: { label: string, value: any }) => {
        onChange(option);
        setIsOpen(false);
    };

    const handleSelectOption = (option: { label: string, value: any }) => {
        onChange(option);
        setIsOpen(false);
    };


    return (
        <div>
            <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">Assigned to</label>
            <div className="relative mt-2">
                <button type="button"
                        className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"
                        onClick={() => setIsOpen(!isOpen)}
                >
      <span className="flex items-center">
        {/*<img*/}
        {/*    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
        {/*    alt="" className="h-5 w-5 flex-shrink-0 rounded-full"/>*/}
        <span className="ml-3 block truncate">{selected?.label || ''}</span>
      </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clipRule="evenodd"/>
        </svg>
      </span>
                </button>
                {isOpen && <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    tabIndex="-1" role="listbox" aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-option-3">
                    {options?.map((item,index)=>(
                        <li className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                            id="listbox-option-0" role="option"
                            onClick={()=>handleSelectOption(item)}
                        >
                            <div className="flex items-center">
                                {/*<img*/}
                                {/*    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                                {/*    alt="" className="h-5 w-5 flex-shrink-0 rounded-full"/>*/}
                                <span className="ml-3 block truncate font-normal">{item?.label}</span>
                            </div>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                          {(item?.value === selected?.value) && <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clipRule="evenodd"/>
                          </svg>}
                         </span>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
};

export default Select;