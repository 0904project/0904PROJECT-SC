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
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const [selectedTag, setSelectedTag] = useState(null);
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
        navigate(`/product/detail`);
    }


    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    }

    const filteredData = selectedTag
        ? cardData.filter(item => item.language.map(lang => lang.toLowerCase()).includes(selectedTag))
        : cardData;

    return (
        <>
            <div className={'py-16 px-5 md:px-8 ipad4:px-14 ipad11:px-16 galaxy:px-16 galaxy2:px-24 max:px-2 '}>
                <div className="flex ">
                    <div className="py-12 max:py-0 grid grid-cols-1  md:grid-cols-2 microsoft2:grid-cols-3 max:grid-cols-4 gap-3">
                        {filteredData.map((item, index) => (
                            <Card key={index} {...item} handleClick={handleClick}/>
                        ))}
                    </div>
                    <div className="max:mt-2  max:ml-3 max:w-[18rem]">
                        <div className="flex py-3 px-5  absolute left-0 w-full max:relative max:px-0 ">
                            <FilterTag onTagClick={handleTagClick} />
                        </div>
                    <Category categories={categories}/>
                    </div>
                </div>
            </div>
        </>
    )
}