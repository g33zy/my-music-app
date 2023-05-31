import React, { useState } from "react";
import OnlineModeCard from "./OnlineModeCard";
import MasterVolumeCard from "./MasterVolumeCard";
import SoundqualityCard from "./SoundQualityCard";

export default function Dashboard() {
  const [toggle, setToggle] = useState(true);

  const [slide, setSlide] = useState(20);

  const [quality, setQuality] = useState(2);

  const [notifications, setNotifications] = useState([]);

  console.log(toggle);
  console.log(slide);
  console.log(quality);

  return (
    <div style={{ marginLeft: "15%", marginRight: "15%" }}>
      <h2 style={{ textAlign: "left", color: "gray" }}>Welcome User!</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "auto",
        }}
      >
        <OnlineModeCard toggle={toggle} setToggle={setToggle} />
        <MasterVolumeCard slide={slide} setSlide={setSlide} />
        <SoundqualityCard quality={quality} setQuality={setQuality} />
      </div>
      <h2 style={{ textAlign: "left", fontSize: "4vh" }}>
        System Notifications
      </h2>

      {!toggle ? (
        <p style={{ textAlign: "left", fontSize: "2.5vh" }}>
          Your application is offline. You won't be able to share or stream
          music to other devices.
        </p>
      ) : null}

      {slide > 80 ? (
        <p style={{ textAlign: "left", fontSize: "2.5vh" }}>
          Listening to music at a high volume could cause long-term hearing
          loss.
        </p>
      ) : null}

      {quality === 1 ? (
        <p style={{ textAlign: "left", fontSize: "2.5vh" }}>
          Music quality is degraded. Increase quality if your connection allows
          it.
        </p>
      ) : null}
    </div>
  );
}
