import { Hero_Section } from '../components/Hero_Section';
import { FlashSalesProducts } from '../components/Products/FlashSalesProducts';
import { useSelector } from 'react-redux';
import { Offers } from '../components/offers/Offer';
import { LatestProducts } from '../components/Products/LatestProducts';
import { Banner } from '../components/banner/Banner';
import { TrendingProducts } from '../components/Products/TrendingProducts';
import { DiscountBanner } from '../components/banner/DiscountBanner';
import { BackgroundImageBanner } from '../components/banner/BackgroundImagebanner';
import { Parteners } from '../components/offers/Parteners';
import { LatestBlog } from '../components/offers/LatestBlog';
import { TopCategory } from '../components/Products/TopCategory';

export const Home = () => {
  // const favorite = useSelector((state) => state.favorite);

  return (
    <>
      <Hero_Section />

      {/* <TodayTimer /> */}

      {/* <FlashSalesProducts /> */}
      {/* Latest Products */}
      {/* <LatestProducts /> */}
      {/* <Offers /> */}
      {/* Banner */}
      {/* <Banner /> */}
      {/* Trending Products */}
      {/* <TrendingProducts /> */}
      {/* Discount Item Banner */}
      {/* <DiscountBanner /> */}
      {/* Top Category */}
      {/* <TopCategory /> */}
      {/* Background Image */}
      {/* <BackgroundImageBanner /> */}
      {/* Our Parteners */}
      {/* <Parteners /> */}
      {/* Latest blog */}
      {/* <LatestBlog /> */}
    </>
  );
};
