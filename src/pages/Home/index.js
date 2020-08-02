import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepos from '../../repositories/categories';
import BaseTemplate from '../../components/BaseTemplate';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepos.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData([
          ...categoriesWithVideos,
        ]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <BaseTemplate paddingAll={0}>

        {initialData.length === 0 && (<div>Loading...</div>)}

        {initialData.map((category, idx) => {
          if (idx === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={initialData[0].videos[0].title}
                  url={initialData[0].videos[0].url}
                  videoDescription="Lane 8"
                />

                <Carousel
                  ignoreFirstVideo
                  category={initialData[0]}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={category.id}
              category={category}
            />
          );
        })}

      </BaseTemplate>

    </div>
  );
}

export default Home;
