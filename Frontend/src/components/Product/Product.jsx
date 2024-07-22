import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCartShopping } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';
import './Product.css'


const Product = () => {
    const [products, setProducts] = useState([]); 
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');
    const [likedProducts, setLikedProducts] = useState({});

    const handleHeartClick = (productId) => {
        setLikedProducts((prevState) => ({
        ...prevState,
        [productId]: !prevState[productId],
        }));
    };

    useEffect(() => {
        const fetchProducts = () => {
            let url = 'http://localhost:3000/products';
            const params = new URLSearchParams();
            if (category) params.append('category', category);
            if (sort) params.append('sort', sort);
            if (params.toString()) url += `?${params.toString()}`;

            axios.get(url)
                .then(response => {
                    setProducts(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the products!', error);
                });
        };
        fetchProducts();
    }, [category, sort]);

    return (
        <div>
            <div className="filters">
                <div className="category-filters">
                    <button onClick={() => setCategory('apparel')}>Apparel</button>
                    <button onClick={() => setCategory('kitchenware')}>Kitchenware</button>
                    <button onClick={() => setCategory('homedecor')}>Home Decor</button>
                    <button onClick={() => setCategory('')}>All Products</button>
                </div>
                <div className="sort-filters">
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="">Sort by</option>
                        <option value="price_asc">Price (Low to High)</option>
                        <option value="price_desc">Price (High to Low)</option>
                        <option value="alpha_asc">Name (A-Z)</option>
                        <option value="alpha_desc">Name (Z-A)</option>
                    </select>
                </div>
            </div>

            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img className="product-img" src={product.ImagePath} alt={product.title} />
                        <h6>{product.title}</h6>
                        <p>{product.price}</p>
                        <div className="product-btns">
                        <button className="cart-btn">Add To Cart <FaCartShopping /></button>

                        <button
                        className={`heart-btn ${likedProducts[product.id] ? 'red' : ''}`}
                        onClick={() => handleHeartClick(product.id)}
                        >
                        <FaHeart />
                        </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
