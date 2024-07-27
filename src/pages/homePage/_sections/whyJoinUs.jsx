import { DesktopFrame } from "@/components/UI/desktopFrame";
import { Button } from "@components/UI/button";
import { ButtonGroup } from "@components/UI/buttonGroup";
import { SectionText } from "@components/UI/sectionText";

export function WhyJoinUs() {
  return (
    <section className="section py-4 py-lg-40" id="why-join-us">
      <div className="row align-items-center justify-content-center g-0 gap-8 bg-white shadow p-4 py-8 p-lg-20 shadow radius-8">
        <div className="col-auto col-lg z-1">
          <SectionText
            className={"text-lg-start align-items-lg-start text-center align-items-center"}
            secondHeadline={"Why Join Us"}
            buttons={
              <ButtonGroup>
                <Button outline size={"lg"} variant="amber-900" text={"Sign up now"} />
              </ButtonGroup>
            }>
            <ul className="list-group list-group-flush fs-xl">
              {range(3).map((e) => {
                return (
                  <li key={e} className="list-group-item bg-transparent border-0 px-0">
                    <p className="m-0">
                      <i className="jam jam-check text-green-700" />
                      Est et in pharetra magna adipiscing ornare aliquam.
                    </p>
                  </li>
                );
              })}
            </ul>
          </SectionText>
        </div>
        <div className="col-12 col-lg-6 position-relative">
          <div className="video-decorations">
            {range(4).map((e) => (
              <span key={e} />
            ))}
          </div>
          <DesktopFrame dots className={"position-relative"}>
            <div className="ratio position-relative" style={{ "--bs-aspect-ratio": "60%" }}>
              <iframe
                src="https://www.youtube.com/embed/XxbJw8PrIkc?si=WCfqFkj29HDibHmI"
                title="Heil Developers"
                allow="autoplay; clipboard-write; gyroscope;"
              />
            </div>
          </DesktopFrame>
        </div>
      </div>
    </section>
  );
}
