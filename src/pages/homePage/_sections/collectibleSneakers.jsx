import { Button } from "@components/UI/button";
import { ButtonGroup } from "@components/UI/buttonGroup";
import { SectionText } from "@components/UI/sectionText";

export function CollectibleSneakers() {
  return (
    <section className="section" id="collectible-sneakers">
      <div className="row g-0 gap-lg-20 justify-content-center position-relative">
        <div className="col-12 col-lg">
          <SectionText
            className={"text-lg-start align-items-lg-start text-center align-items-center"}
            mainHeadline={"Collectible Sneakers"}
            buttons={
              <ButtonGroup>
                <Button outline variant="amber-900" text={"Sign up now"} />
                <Button
                  iconLeft={<i className="jam jam-play-circle" />}
                  className={"text-amber-900"}
                  text={"Watch Demo"}
                />
              </ButtonGroup>
            }>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem
            mauris. Pharetra, eu imperdiet ipsum ultrices amet.
          </SectionText>
        </div>
        <div className="col-auto sneakers-image">
          <img
            className="position-relative w-100"
            src="/assets/img/collectible-sneakers.png"
            alt="collectible-sneakers"
          />
        </div>
      </div>
    </section>
  );
}
