import React from 'react';
import Menu from './components/Menu/Menu'
import initialData from './data/initial_data.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer'


function App() {
  return (
    <div style = {{ background: "#141414" }}>
        <Menu />

        <BannerMain
          videoTitle = {initialData.categories[0].videos[0].title}
          url = {initialData.categories[0].videos[0].url}
          videoDescription = { "What is front-end?" }
        />

        <Carousel 
          ignoreFirstVideo
          category = {initialData.categories[0]}
        />

        <Carousel 
          category = {initialData.categories[1]}
        />

        <Carousel 
          category = {initialData.categories[2]}
        />

        <Carousel 
          category = {initialData.categories[3]}
        />

        <Carousel 
          category = {initialData.categories[4]}
        />

        <Carousel 
          category = {initialData.categories[5]}
        />

        
        <Footer />
        
    </div>
  );
}

export default App;