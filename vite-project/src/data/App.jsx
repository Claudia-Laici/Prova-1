import { getAllTags } from './data/products.js';
import tagList from './components/TagList.jsx';
import productCard from './components/ProductCard.jsx';
import './App.css';
import { getAllProducts } from './data/products.js';


const App = () => {
    const tags = getAllProducts();
    return (
        <div style={{ padding: '1rem' }}>
           { products.mp((product) => (
               <productCard key = {product.id} product={product} />   
           ))}
        
        </div>
    );
};

 export default TagList;
