import PropTypes from 'prop-types';
const Category = ({ singleCategory }) => {

    const { picture, title, category, category_bg_color, card_bg_color, text_color } = singleCategory

    return (
        <div className={`rounded-lg bg-[${card_bg_color}] flex flex-col`}>
            <figure className="w-full h-3/4">
                <div className="relative w-full h-full">
                    <img className=" w-full h-full" src={picture} alt="thumbnail" />
                </div>
            </figure>
            <div className="card-body flex-grow flex flex-row  gap-3">
                
                <div className="">
                    <h2 className={`w-fit text-left text-base font-bold bg-[${category_bg_color}] bg-opacity-20 text-[${text_color}] px-2 py-1 rounded-md`}>{category}</h2>
                    <div className="flex items-center gap-2 mt-2">
                        <p className={`text-xl text-left text-[${text_color}] font-semibold max-w-fit`}>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


Category.propTypes = {
    singleCategory: PropTypes.object.isRequired
}
export default Category;