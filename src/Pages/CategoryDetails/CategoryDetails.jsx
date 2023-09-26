import { useLoaderData, useParams } from "react-router-dom";

const CategoryDetails = () => {

    const categories = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const singleCategory = categories.find(singleCategory => singleCategory.id === idInt);

    const { picture, title, text_color, description, price } = singleCategory;



    return (
        <div to={`/category/${id}`} className='flex flex-col container mx-auto px-2 md:px-12 lg:px-28 my-20'>
            <figure className="w-full h-3/4">
                <div className="relative w-full h-full">
                    <img className="w-full h-full" src={picture} alt="thumbnail" />
                    <div className="absolute bottom-0 w-full py-9 pl-9 bg-black bg-opacity-50">
                        <button className="btn border-none  px-6 py-4 rounded-lg h-[60px] text-white text-xl font-semibold" style={{background:text_color}}>Donate ${price}</button>
                    </div>
                </div>
            </figure>
            <div className="card-body flex-grow flex flex-row">
                <div className="">
                    <div className="flex flex-col gap-6 mt-2 text-left">
                        <h2 className='text-4xl text-left font-bold max-w-fit'>{title}</h2>
                        <p className="text-justify leading-8">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;