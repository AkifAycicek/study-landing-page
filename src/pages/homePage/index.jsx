import { CollectibleSneakers } from "./_sections/collectibleSneakers";
import { TheBest } from "./_sections/theBest";
import { Trophies } from "./_sections/trophies";

export function HomePage() {
  return (
    <div className="home-page">
      <span className="triangle">
        <CollectibleSneakers />
        <Trophies />
      </span>
      <TheBest />
    </div>
  );
}
