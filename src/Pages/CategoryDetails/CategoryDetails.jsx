import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

const CategoryDetails = () => {

    const categories = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const singleCategory = categories.find(singleCategory => singleCategory.id === idInt);

    const { picture, title, text_color, description, price } = singleCategory;

    const handleAddToDonation = () => {
        const addedCategory = [];
        const selectedCategory = JSON.parse(localStorage.getItem('selected-category'));

        if (!selectedCategory) {
            addedCategory.push(singleCategory);
            localStorage.setItem('selected-category', JSON.stringify(addedCategory));
            swal("Thank You!", "Your donation submitted successfully!", "success");
        }
        else {

            const isExists = selectedCategory.find(singleCategory => singleCategory.id === idInt);
            if (!isExists) {
                addedCategory.push(...selectedCategory, singleCategory);
                localStorage.setItem('selected-category', JSON.stringify(addedCategory));
                swal({
                    title: "Thank You!",
                    text: "Your donation submitted successfully!",
                    icon: "success",
                    buttons: {
                        goHome: {
                            text: "Go Home",
                            value: "goHome",
                        },
                    },
                })
                    .then((value) => {
                        if (value === "goHome") {
                            window.location.href = "/";
                        }
                    });
            }
            else {
                toast('Already donated')
            }
        }
    }



    return (
        <div to={`/category/${id}`} className='flex flex-col container mx-auto px-2 md:px-12 lg:px-28 my-10 md:my-20'>
            <figure className="w-full h-3/4">
                <div className="relative w-full">
                    <img className="w-full h-60 md:h-96 lg:h-[700px]" src={picture} alt="thumbnail" />
                    <div className="absolute bottom-0 w-full py-3 md:py-5 lg:py-9 pl-4 md:pl-9 bg-black bg-opacity-50">
                        <button onClick={handleAddToDonation} className="btn border-none rounded-lg h-7 md:h-10 lg:h-16 text-white text-lg lg:text-xl font-semibold" style={{ background: text_color }}>Donate ${price.toFixed(2)}</button>
                    </div>
                </div>
            </figure>
            <div className="card-body flex-grow flex flex-row">
                <div className="">
                    <div className="flex flex-col gap-6 mt-2 text-left">
                        <h2 className='text-3xl md:text-4xl text-left font-bold max-w-fit'>{title}</h2>
                        <p className="text-justify leading-8">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CategoryDetails;