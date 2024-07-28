import { Button } from "@components/UI/button";
import { ButtonGroup } from "@components/UI/buttonGroup";
import { ContentBox } from "@components/UI/contentBox";
import { SectionText } from "@components/UI/sectionText";
import { ArrowLeft, ArrowRight } from "iconoir-react";

export function TheyLoveUs() {
  const sliderElement = useRef();
  const { t } = useTranslation();

  const slides = range(30).map((e, i) => {
    return (
      <ContentBox
        key={e}
        className={"slide bg-white"}
        icon={<img src="/assets/img/zoomers.png" alt="zoomers" />}>
        <div className="row g-0 gap-4">
          <div className="col-12">
            <p className="m-0">
              {++i}. Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra
              turpis lorem. Varius a turpis urna id porttitor.
            </p>
          </div>
          <div className="col-12">
            <div className="row g-0 gap-4 align-items-center">
              <div className="col-3">
                <img
                  src={"https://avatar.iran.liara.run/public/" + i * 3}
                  className="w-100 rounded-circle"
                  alt="avatar"
                />
              </div>
              <div className="col">
                <div className="row flex-column ">
                  <p className="m-0">Hellen Jummy</p>
                  <p className="m-0 fs-base">{t("page.home:team_lead")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentBox>
    );
  });

  function updateSliderIndex(offset) {
    sliderElement.current?.scrollBy({
      left: offset * (sliderElement.current?.scrollWidth / slides.length),
      behavior: "smooth",
    });
  }

  return (
    <section className="section px-0" id="they-love-us">
      <div className="row justify-content-center g-0 gap-10">
        <div className="row g-0 px-4 px-lg-20 justify-content-center align-items-center gap-8">
          <div className="col-12 col-lg text-center text-lg-start">
            <SectionText secondHeadline={t("page.home:because_they_love_us")} />
          </div>
          <div className="col-auto d-none d-lg-block">
            <ButtonGroup gap={6}>
              <Button
                size={"sm"}
                className={"rounded-circle p-3"}
                iconLeft={<ArrowLeft />}
                outline
                variant="amber-900"
                onClick={() => updateSliderIndex(-1)}
              />
              <Button
                size={"sm"}
                className={"rounded-circle p-3"}
                iconLeft={<ArrowRight />}
                outline
                variant="amber-900"
                onClick={() => updateSliderIndex(1)}
              />
            </ButtonGroup>
          </div>
        </div>

        <div className="slider">
          <div ref={sliderElement} className="slider-container">
            {slides}
          </div>
        </div>
      </div>
    </section>
  );
}
