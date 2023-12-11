import ProductCard from "../components/ProductCard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../store/product/action";
import Loader from "../components/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const {entities, loading} = useSelector((state) => state.product)

  const fetchProducts = async () => {
    dispatch(getAllProduct())
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return(
    <main className="flex flex-wrap justify-center items-center p-[20px] gap-4">
      {loading ? <Loader/> : entities.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            discount={10}
          />
        ))}
    </main>  
  );
}

export default CatalogPage;