import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
// import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";

// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => 
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categogiesArray) => 
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS , categogiesArray);

export const fetchCategoriesFailed = (error) => 
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED , error);

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());

//   try{
//     const categoriesArray = await getCategoriesAndDocument();
//     dispatch(fetchCategoriesSuccess(categoriesArray));

//   }catch(error){
//     dispatch(fetchCategoriesFailed(error));
//   }
// }
