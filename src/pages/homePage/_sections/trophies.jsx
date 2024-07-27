import { ContentBox } from "@components/UI/contentBox";
import { Trophy, Tunnel, Tv } from "iconoir-react";

export function Trophies() {
  const trophies = [
    {
      icon: <Trophy className="text-amber-900" width="4rem" height="4rem" />,
      title: "Nibh viverra",
      text: `Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis
      natoque leo, massa.`,
    },
    {
      icon: <Tunnel className="text-amber-900" width="4rem" height="4rem" />,
      title: "Cursus amet",
      text: `Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis
      natoque leo, massa.`,
    },
    {
      icon: <Tv className="text-amber-900" width="4rem" height="4rem" />,
      title: "Ipsum fermentum",
      text: `Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis
      natoque leo, massa.`,
    },
  ];
  return (
    <section className="section" id="trophies">
      <div className="row justify-content-center justify-content-lg-start g-0">
        {trophies.map(({ icon, title, text }, index) => {
          return (
            <div key={index} className="col-lg col-auto">
              <ContentBox className={"shadow-none"}>
                <div className="d-flex flex-column align-items-center align-items-lg-start  gap-4">
                  {icon}
                  <p className="fw-bold fs-lg">{title}</p>
                  <p>{text}</p>
                </div>
              </ContentBox>
            </div>
          );
        })}
      </div>
    </section>
  );
}
