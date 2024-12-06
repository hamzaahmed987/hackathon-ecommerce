import Herosection from "./components/Hero";
import Products from "./components/Products";
import Categories from "./components/Catagories";
import ThisMonth from "./components/ThisMonth";
import MusicHero from "./components/MusicProduct";
import ExploreProducts from "./components/ExploreProducts";

export default function Home() {
  return (
    <>
    
    <div className="my-20">
      <Herosection />
    </div>

    <div className="my-20">
<Products />
    </div>

    <div className="my-20">
<Categories />
    </div>

    <div className="my-20">
      <ThisMonth />
    </div>
    
<div className="my-20">
  <MusicHero />
</div>

<div className="py-20">
  <ExploreProducts /> 
</div>

    </>
  );
}
