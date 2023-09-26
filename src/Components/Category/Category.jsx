import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Category = ({ singleCategory }) => {

    const {id, picture, title, category, category_bg_color, card_bg_color, text_color } = singleCategory;


    return (
            <Link to={`/category/${id}`} className='rounded-lg flex flex-col duration-300 cursor-pointer hover:scale-105' style={{ background: card_bg_color }}>
                <figure className="w-full h-3/4">
                    <div className="relative w-full h-full">
                        <img className=" w-full h-full" src={picture} alt="thumbnail" />
                    </div>
                </figure>
                <div className="card-body flex-grow flex flex-row  gap-3">

                    <div className="">
                        <h2 className='w-fit text-left text-base font-bold px-2 py-1 rounded-md' style={{ backgroundColor: category_bg_color, color: text_color }}>{category}</h2>
                        <div className="flex items-center gap-2 mt-2">
                            <p className='text-xl text-left font-semibold max-w-fit' style={{ color: text_color }}>{title}</p>
                        </div>
                    </div>
                </div>
            </Link>
    );
};


Category.propTypes = {
    singleCategory: PropTypes.object.isRequired
}
export default Category;