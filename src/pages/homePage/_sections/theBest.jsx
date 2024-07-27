import { Button } from "@components/UI/button";
import { ButtonGroup } from "@components/UI/buttonGroup";
import { ContentBox } from "@components/UI/contentBox";
import { SectionText } from "@components/UI/sectionText";

export function TheBest() {
  return (
    <section className="section bg-slate-900 text-white row g-0 gap-20" id="the-best">
      <div className="row g-0 justify-content-center align-items-center gap-8">
        <div className="col-12 col-lg text-center text-lg-start">
          <SectionText secondHeadline={"The best of the best"} />
        </div>
        <div className="col-auto">
          <Button size={"xl"} outline variant="light" text={"Sign up now"} />
        </div>
      </div>
      <div className="row gap-8 gap-lg-12 justify-content-center g-0">
        {range(3).map((e, index) => {
          return (
            <ContentBox
              key={index}
              className={"col-12 col-lg"}
              title={<h1 className="fw-bold fs-2xl">Title</h1>}
              style={{
                "--content-box-shadow-color": "rgb(var(--bs-white-rgb), 0.25)",
              }}
              image={
                <img
                  loading="lazy"
                  className="content-image"
                  src={`https://picsum.photos/400/200?random=${index}`}
                  alt="content box"
                />
              }
              buttons={
                <ButtonGroup vertical>
                  <Button
                    outline
                    size={"lg"}
                    iconLeft={<span className="jam jam-shopping-cart" />}
                    variant="light"
                    text={"Buy Now"}
                  />
                </ButtonGroup>
              }>
              <p className="m-0">
                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
              </p>
            </ContentBox>
          );
        })}
      </div>
    </section>
  );
}
