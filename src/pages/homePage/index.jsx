import { CollectibleSneakers } from "./_sections/collectibleSneakers";
import { GrowYourCollection } from "./_sections/growYourCollection";
import { ShoesCollected } from "./_sections/shoesCollected";
import { TheBest } from "./_sections/theBest";
import { TheyLoveUs } from "./_sections/theyLoveUs";
import { Trophies } from "./_sections/trophies";
import { WhyJoinUs } from "./_sections/whyJoinUs";

export function HomePage() {
  return (
    <div className="home-page">
      <span className="triangle">
        <CollectibleSneakers />
        <Trophies />
      </span>
      <TheBest />
      <WhyJoinUs />
      <TheyLoveUs />
      <GrowYourCollection />
      <ShoesCollected />
    </div>
  );
}
