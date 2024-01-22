import { useParams } from 'react-router-dom';
import { Fragment, 
  // useContext, 
  useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategorirsMap , selectCategoriesIsLoading } from '../../store/categories/category.selector';
import ProductCard from '../../components/product-card/product-card.component';
// import { CategoriesContext } from '../../contexts/categories.content';
import {Title , CategoryContainer} from './category.styles';
import Spinner from '../../components/spinner/spinner.components';

const Category = () => {
    const { category } = useParams();
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategorirsMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);
  
    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
  
    return (
        <Fragment>
        <Title>{category.toUpperCase()}</Title>
        {isLoading ? ( <Spinner/>
        ): (
        <CategoryContainer>
          {products &&
            products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
        </CategoryContainer>

        ) 
        }
        
                </Fragment>
    );
  };
  
  export default Category;