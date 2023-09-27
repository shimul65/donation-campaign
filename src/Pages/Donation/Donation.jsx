import { useEffect, useState } from "react";
import SelectCategory from "../../Components/SelectCategory/SelectCategory";
import { Link } from "react-router-dom";


const Donation = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const selectedCategory = JSON.parse(localStorage.getItem('selected-category'));
        setSelectedCategories(selectedCategory);
    }, [])

    console.log(selectedCategories);

    return (
        <div>
            {selectedCategories === null ?
                <div className="card container w-1/2 mx-auto bg-base-100 shadow-xl image-full my-10 md:my-16 lg:my-20">
                    <figure><img src="https://i.ibb.co/mGXTn11/team-volunteers-holding-donation-boxes-looking-camera.jpg" alt="Donations" /></figure>
                    <div className="card-body flex justify-around gap-2">
                        <div className="mt-14">
                            <h2 className="text-4xl font-bold text-[#FF444A] text-center">Donate</h2>
                            <p className="text-center text-xl mt-3">You have not made any donation. <br /> We will be pleased if you donate us</p>
                        </div>
                        <Link to='/' className="card-actions justify-center">
                            <button className="btn btn-error text-white">Go Home</button>
                        </Link>
                    </div>
                </div>
                :
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto my-10 md:my-16 lg:my-20">
                        {
                            selectedCategories?.slice(0, dataLength).map(selectedCategory => <SelectCategory key={selectedCategory.id} selectedCategory={selectedCategory}></SelectCategory>)
                        }
                    </div>
                    <div className={`flex justify-center my-6 ${dataLength >= selectedCategories.length && 'hidden'}`}>
                        <button onClick={() => setDataLength(selectedCategories.length)} className="btn bg-[#009444] text-white hover:bg-[#026832]">See All</button>
                    </div>
                </>
            }
        </div>
    );
};

export default Donation;