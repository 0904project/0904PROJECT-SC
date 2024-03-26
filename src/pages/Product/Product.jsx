// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import Card from "../../components/Card";
import cardData from "../../datas/dataCard";
// eslint-disable-next-line no-unused-vars
import Category from "../../components/Category";
import FilterTag from "../../components/FilterTag";
export default function Product() {
    const navigate = useNavigate();
    // const categories = ['Category 1', 'Category 2', 'Category 3'];
    const [selectedTag, setSelectedTag] = useState([]);
    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios(
    //             'https://my-api.com/data', // Ganti dengan URL API Anda
    //         );
    //         setData(result.data);
    //     };
    //     fetchData();
    // }, []);
    const handleClick = () => {
        navigate(`/produk/detail`);
    }


    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        console.log(selectedTag)
    }

    function formatPrice(price) {
        if (price >= 1000000) {
            return (price / 1000000).toFixed(1) + 'jt';
        } else if (price >= 1000) {
            return (price / 1000) + 'k';
        }
        return price.toString();
    }
    const filteredData = selectedTag.length > 0
        ? cardData.filter(item => item.language.some(lang => selectedTag.includes(lang.toLowerCase())))
        : cardData;

    return (
        <>
            <div className={'py-16 microsoft2:py-20 px-5 justify-center md:px-8 ipad4:px-14 ipad11:px-16 galaxy:px-16 galaxy2:px-[3rem] microsoft2:px-2 max:px-2 '}>
                <div className="flex ">
                    <div className="py-12 microsoft2:py-0 grid grid-cols-1  md:grid-cols-2 microsoft2:grid-cols-3 max:grid-cols-4 gap-3">
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <Card key={index} {...item} handleClick={handleClick} formatPrice={formatPrice}/>
                            ))
                        ) : (
                            <div className="flex justify-center text-center mt-[100px] items-center md:w-[70vh] galaxy:w-[55vh] galaxy2:w-[75vh] microsoft2:w-[140vh] max:left-40  relative">
                                <img src="/public/waiting-img/404-1.png"
                                     className={'w-[350px] transition-all duration-1000 animate-fadeIn'} alt=""/>
                            </div>
                        )}
                    </div>
                    <div className="lg:mt-2 lg:ml-3 max:w-[18rem] microsoft2:w-[14rem] ">
                        <div className="flex py-1 justify-center  absolute left-0 w-full lg:relative lg:px-0 ">
                            <FilterTag onTagClick={handleTagClick} />
                        </div>
                            <Category selectedTag={selectedTag} />
                    </div>
                </div>
                <div className={'border-t-2 max:top-5 relative md:top-[15rem] ipad4:top-[23rem] galaxy:top-[30rem] items-center justify-center'}>
                    <p className={' text-center top-8 text-slate-300 italic font-bold justify-center items-center relative'}>
                    Semangat baru
                    </p>
                    </div>
            </div>
        </>
    )
}