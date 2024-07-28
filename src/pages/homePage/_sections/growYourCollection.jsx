import { DesktopFrame } from "@/components/UI/desktopFrame";

import { Button } from "@components/UI/button";
import { ButtonGroup } from "@components/UI/buttonGroup";
import { SectionText } from "@components/UI/sectionText";

export function GrowYourCollection() {
  const { t } = useTranslation();
  return (
    <section className="section py-lg-32" id="grow-collection">
      <div className="row g-0 gap-10">
        <div className="row g-0">
          <SectionText
            className={"text-center text-lg-start align-items-center align-items-lg-start"}
            secondHeadline={t("page.home:grow_your_collection")}>
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum
            pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed
            interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
          </SectionText>
        </div>
        <div className="row gap-12 g-0">
          <div className="col-12 col-lg-4">
            <ButtonGroup
              vertical
              className={
                "justify-content-start w-auto mw-100 flex-nowrap overflow-auto flex-row flex-lg-column"
              }>
              {[
                <Button
                  key={random(10, 100, true)}
                  size={"lg"}
                  iconLeft={<i className="jam jam-search" />}
                  iconRight={<i className="jam jam-arrow-right" />}
                  className={"justify-content-start shadow-sm text-dark"}
                  variant="white"
                  text={"Bibendum tellus"}
                />,
                ...[
                  ["shield-check", "Cras eget"],
                  ["rocket", "Dolor pharetra"],
                  ["screen", "Amet, fringilla"],
                  ["podcast", "Amet nibh"],
                  ["settings-alt", "Sed velit"],
                ].map(([icon, text], index) => {
                  return (
                    <Button
                      className={"justify-content-start"}
                      key={index}
                      size={"lg"}
                      iconLeft={<i className={`jam jam-${icon}`} />}
                      text={text}
                    />
                  );
                }),
              ]}
            </ButtonGroup>
          </div>
          <div className="col-8 col-lg-6 position-relative mx-auto">
            <DesktopFrame
              className={"w-90"}
              dots
              image={"https://picsum.photos/400/200?random=1"}
            />
            <DesktopFrame
              className={"shadow-sm position-absolute w-90 start-10 top-15"}
              dots
              image={"https://picsum.photos/400/200?random=2"}
            />
            <DesktopFrame
              className={"position-absolute w-30 start-75 top-35"}
              image={"https://picsum.photos/250/250?random=3"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
