// export default PanoramaViewer;
import React, { useRef, useEffect } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import "@photo-sphere-viewer/core/index.css";

const PanoramaViewer = ({ src }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const container = viewerRef.current?.container;
    if (container) {
      container.style.pointerEvents = "auto";
      // ✅ Remove default gray
      container.style.backgroundColor = "transparent";
    }
  }, []);

  return (
    <div className="absolute inset-0">
      <ReactPhotoSphereViewer
        ref={viewerRef}
        src={src}
        width="100%"
        height="100%"
        navbar={false} // no toolbar
        mousewheel={true}
        keyboard={true}
        defaultYaw={0}
        defaultPitch={0}
        loadingImg={null} //added
        loadingTxt="" //added
        canvasBackground="transparent" // ✅ remove gray
        plugins={[[AutorotatePlugin, { speed: 1.2, autostartDelay: 0 }]]}
        /* 🔥 OVERRIDE LOADER HERE */
        // 🔥 Correct callback (no destructuring)
        onReady={(viewer) => {
          // Safely check
          if (!viewer) return;

          // Disable loader text & image
          viewer.config.loadingTxt = "";
          viewer.config.loadingImg = null;

          // Hide loader DOM
          const el = viewer.container.querySelector(".psv-loader");
          if (el) el.style.display = "none";

          // Force hide loader
          if (viewer.loader) viewer.loader.hide();
        }}
      />
    </div>
  );
};

export default PanoramaViewer;
