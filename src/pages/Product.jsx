import React from "react";
import {useNavigate} from "react-router-dom";

export default function Product() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/detail`);
    }
    return (
        <div className={'py-16 px-2 flex flex-wrap '}>
            <p>
                kontol
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid consectetur, culpa distinctio dolor
                dolorem doloribus eos, id illum iusto mollitia, nam neque perspiciatis repudiandae sint. Ipsa nostrum
                pariatur quaerat?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid deserunt expedita hic minima
                officia perferendis provident repellat velit veritatis. Assumenda, beatae dignissimos et fugit id
                laboriosam officia voluptatem voluptatibus?
            </p>
            <button onClick={() => handleClick('idProduk')} className={'p-1 w-full rounded-md bg-sky-500'}>Go</button>
        </div>
    )
}