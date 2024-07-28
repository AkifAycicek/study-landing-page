import worldGeoJson from "@/assets/json/worldGeoJson.js";
import { DesktopFrame } from "@/components/UI/desktopFrame";

import { SectionText } from "@components/UI/sectionText";
import { CircleMarker, Popup } from "react-leaflet";
import { GeoJSON } from "react-leaflet/GeoJSON";
import { MapContainer } from "react-leaflet/MapContainer";

export function ShoesCollected() {
  const { t } = useTranslation();
  const setColor = () => {
    const fillColor = shuffle(["#FBBF24", "#D97706", "#FBBF24", "#B45309"]).shift();
    return { weight: 0.5, fillColor, color: "#78350F", fillOpacity: 0.5 };
  };

  return (
    <section className="section user-select-none" id="shoes-collected">
      <div className="d-flex w-100 h-100 g-0">
        <div className="col" title={`Zoom:  Double click\nZoom out:  Shift + Double click`}>
          <MapContainer
            style={{
              backgroundColor: "var(--bs-amber-900)",
              height: "100%",
              zIndex: 1,
            }}
            attributionControl={false}
            center={[41.015137, 28.97953]}
            zoom={1}
            maxZoom={3}
            minZoom={1}
            zoomControl={false}
            scrollWheelZoom={false}
            boxZoom={false}
            keyboard={false}>
            <GeoJSON data={worldGeoJson} style={setColor} />
            {[
              [35.68949, 139.69171],
              [41.015137, 28.97953],
              [41.002697, 39.716763],
              [40.37767, 49.89201],
              [31.5, 34.46667],
              [21.42251, 39.826168],
            ].map((coords, index) => {
              return (
                <CircleMarker
                  key={index}
                  center={coords}
                  pathOptions={{
                    opacity: 1,
                    fillOpacity: 0,
                    fill: "#A3E635",
                    color: "#A3E635",
                  }}
                  stroke={0.1}
                  radius={random(5, 15, true)}>
                  <Popup closeButton={false} offset={[0, -10]}>
                    <DesktopFrame
                      style={{ width: "110%", left: "-5%" }}
                      className={"position-absolute bottom-80 "}
                      image={new URL("@/assets/img/collectible-sneakers.png", import.meta.url).href}
                    />
                    <p>
                      Emma Simpson collected one pair <br />
                      of Cool Shoes.
                    </p>
                  </Popup>
                </CircleMarker>
              );
            })}
          </MapContainer>
        </div>
      </div>
      <SectionText
        className={
          "text-white text-center z-1 pe-none position-absolute top-50 start-50 translate-middle"
        }
        mainHeadline={"11,658,467"}
        secondHeadline={t("page.home:shoes_collected")}
      />
    </section>
  );
}
