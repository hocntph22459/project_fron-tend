import ListCategories from './components/ListCategories'
import ListProducts from './components/ListProducts'
import { ICategory } from '../../../types/category'
import { useLocation } from "react-router-dom";
import useFetchData from '../../../hooks/useFetchData';

const ProductPage = () => {
  const { data: categories } = useFetchData("/categories");
  const location = useLocation();
  const cateId = new URLSearchParams(location.search).get("cateId");
  const url = cateId ? `/products/filter?CategoryId=${cateId}` : '/products';
  const { data: products } = useFetchData(url);
  return (
    <section>
      <div className="main-banner">
        <img src="https://file.hstatic.net/1000376021/file/1920x720_d628af2ab2c24b26b156660120d24bef.png" alt="" />
      </div>
      <div className='my-16' style={{ display: 'grid', gridTemplateColumns: '330px 1fr' }}>
        <ListCategories categories={categories} />
        <ListProducts products={products} />
      </div>
    </section>
  )
}

export default ProductPage;
