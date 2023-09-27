import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SelectCategory = ({ selectedCategory }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_color, price } = selectedCategory;
    return (
        <div>
            <div className='rounded-lg flex flex-col md:flex-row h-fit ' style={{ background: card_bg_color }}>
                <figure className="w-full md:w-1/3">
                    <div className="relative w-full h-full">
                        <img className="w-full rounded-l-lg h-full" src={picture} alt="thumbnail" />
                    </div>
                </figure>
                <div className="card-body flex flex-row  gap-3">

                    <div className="">
                        <h2 className='w-fit text-left text-base font-bold px-2 py-1 rounded-md' style={{ backgroundColor: category_bg_color, color: text_color }}>{category}</h2>
                        <div className="flex flex-col gap-2 mt-2">
                            <p className='text-xl md:text-2xl font-semibold text-left max-w-fit'>{title}</p>
                            <h2 className='text-left text-base font-bold ' style={{ color: text_color }}>${price.toFixed(2)}</h2>
                            <Link to={`/category/${id}`}>
                                <button className="btn w-40 border-none rounded-lg h-7 md:h-10 text-white text-lg font-medium mt-4" style={{ background: text_color }}>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SelectCategory.propTypes = {
    selectedCategory: PropTypes.object.isRequired
}
export default SelectCategory;