import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import HeroHome from '../components/Hero-Home/HeroHome'
import CategoryCard from '../components/CategoryCard/CategoryCard'
import About from '../components/About/About'
import HomeDecor from '../../public/assets/home-decor.png';
import Kitchenware from '../../public/assets/kitchenware.png';
import Apparel from '../../public/assets/apparel.png';
import { FaHouseChimney } from 'react-icons/fa6';
import { FaKitchenSet } from 'react-icons/fa6';
import { FaPersonDress } from 'react-icons/fa6';
import Footer from '../components/Footer/Footer'


const Home = () => {
   const categories = [
    { image: HomeDecor, caption: 'Home Decor', icon: <FaHouseChimney />},
    { image: Kitchenware, caption: 'Kitchenware', icon: <FaKitchenSet />},
    { image: Apparel, caption: 'Apparel', icon: <FaPersonDress />}
   ]
    
  return (
    <div>
      <Navbar />
      <HeroHome />
      <h1 className='categories-header'>Categories</h1>
      <p className='categories-text'>We have a variety of products available to fit your needs!</p>
      <div className="category-grid">
      
        {categories.map((category, index) => (
        <CategoryCard
            key = {index}
            image = {category.image}
            caption = {category.caption}
            icon= {category.icon}
        />
        ))}
      </div>
      <About />
      <Footer />
    </div>
  )
}

export default Home
