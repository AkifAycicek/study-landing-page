import { DesktopFrame } from "@/components/UI/desktopFrame";
import { Button } from "@components/UI/button";
import { ButtonGroup } from "@components/UI/buttonGroup";
import { ContentBox } from "@components/UI/contentBox";
import { SectionText } from "@components/UI/sectionText";
import { StatUp } from "iconoir-react";

export function StyleGuidePage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row g-4 align-items-center justify-content-evenly">
        <div className="col-auto">
          <Button outline variant={"slate-700"} onClick={() => navigate("/")}>
            Go To Home Page
          </Button>
        </div>

        <div className="col-12 col-sm-6">
          <DesktopFrame
            dots
            variant={"amber"}
            title="The ugliest frame color ever !"
            image={
              <img src="https://picsum.photos/400/200?random=1" alt="random" />
            }></DesktopFrame>
        </div>
        <div className="col-12 col-sm-auto">
          <Button
            size={"lg"}
            iconLeft={<span className="jam jam-shopping-cart" />}
            variant="dark"
            onClick={() => navigate("/404")}>
            Wanna buy some error ?
          </Button>
        </div>

        <div className="col-12 col-sm-6">
          <SectionText
            className={"text-sm-start align-items-sm-start text-center align-items-center"}
            caption={"Caption"}
            mainHeadline={"Collectible Sneakers"}
            secondHeadline={"Headline Two"}
            buttons={
              <ButtonGroup vertical>
                <Button
                  key={1}
                  outline
                  size={"sm"}
                  iconRight={<span className="jam jam-heart" />}
                  iconLeft={<span className="jam jam-heart" />}
                  variant="pink-300"
                  onClick={() => navigate("/404")}>
                  small mistakes
                </Button>
                <Button
                  key={2}
                  outline
                  size={"lg"}
                  iconLeft={<span className="jam jam-shopping-cart" />}
                  variant="dark"
                  onClick={() => navigate("/404")}>
                  Wanna buy some error ?
                </Button>
              </ButtonGroup>
            }>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem
            mauris. Pharetra, eu imperdiet ipsum ultrices amet.
          </SectionText>
        </div>

        <div className="col-12 col-sm-6">
          <ContentBox
            image={<img src={"https://picsum.photos/400/200?random=2"} alt="img" />}
            imageThumb={<img src={"https://avatar.iran.liara.run/public"} alt="thumb" />}
            imageBadge={<span className="badge fs-xs bg-rose">Featured</span>}
            icon={<img src="/assets/img/zoomers.png" alt="zoomers" />}
            title={<h1 className="fw-bold fs-2xl">Title</h1>}
            titleBadge={
              <div className="badge bg-green-100 text-green-800">
                +2,5%
                <StatUp className="text-green" />
              </div>
            }
            titleIcon={<span className="jam jam-pencil" />}
            buttons={
              <ButtonGroup>
                <Button
                  key={1}
                  outline
                  size={"xs"}
                  iconRight={<span className="jam jam-shopping-cart" />}
                  variant="dark"
                  text="xs error"
                  onClick={() => navigate("/404")}
                />
                <Button
                  key={2}
                  outline
                  size={"xl"}
                  iconLeft={<span className="jam jam-shopping-cart" />}
                  variant="slate"
                  text="xl error"
                  onClick={() => navigate("/404")}
                />
              </ButtonGroup>
            }>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex incidunt neque inventore
            quasi exercitationem perspiciatis ipsa a laudantium officia veritatis necessitatibus
            dolores sunt, fuga esse optio nemo facilis dicta delectus.
          </ContentBox>
        </div>
      </div>
    </div>
  );
}
