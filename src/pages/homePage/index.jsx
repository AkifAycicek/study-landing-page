import { CollectibleSneakers } from "./_sections/collectibleSneakers";
import { Trophies } from "./_sections/trophies";

export function HomePage() {
  return (
    <div className="home-page">
      <span className="triangle">
        <CollectibleSneakers />
        <Trophies />
      </span>
    </div>
  );
}
