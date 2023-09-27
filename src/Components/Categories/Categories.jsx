import PropTypes from 'prop-types';
import Category from '../Category/Category';

const Categories = ({ categories }) => {
    return (
        <div className="container mx-auto -mt-16 pb-56">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 p-4 lg:p-0'>
                {
                    categories?.map(singleCategory => <Category key={singleCategory.id} singleCategory={singleCategory}></Category>)
                }
                {/* {
                    categories?.map(singleCategory => singleCategory.category === 'Health' ? <Category key={singleCategory.id} singleCategory={singleCategory}></Category> : '')
                } */}
            </div>
        </div>
    );
};


Categories.propTypes = {
    categories: PropTypes.array.isRequired
}
export default Categories;