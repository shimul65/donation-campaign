import PropTypes from 'prop-types';
import Category from '../Category/Category';

const Categories = ({categories}) => {
    console.log(categories)
    return (
        <div className="container mx-auto -mt-16 pb-56">
            <h1 className="text-2xl">All categories : {categories.length} </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
                {
                    categories?.map(singleCategory => <Category key={categories.id} singleCategory={singleCategory}></Category>)
                }
            </div>
        </div>
    );
};


Categories.propTypes = { 
    categories: PropTypes.array.isRequired
}
export default Categories;