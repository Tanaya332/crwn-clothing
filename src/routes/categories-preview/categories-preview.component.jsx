// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectCategorirsMap , selectCategoriesIsLoading } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.components';
import { Fragment } from 'react';

// import { CategoriesContext } from '../../contexts/categories.content';


const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategorirsMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
      <Spinner/>
    ): (
      Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })

    )}
    </Fragment>
  );
};

export default CategoriesPreview;