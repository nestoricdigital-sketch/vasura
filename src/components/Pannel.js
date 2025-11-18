// import React from 'react';
// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
// import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
// import '@photo-sphere-viewer/core/index.css';

// const PanoramaViewer = ({
//   src,
//   width = '100%',
//   height = '500px',
//   autoRotate = true,
//   autoRotateSpeed = 2,
// }) => {
//   return (
//     <div style={{ width, height }}>
//       <ReactPhotoSphereViewer
//         src={src}
//         width={width}
//         height={height}
//         navbar={['zoom', 'fullscreen']}
//         defaultYaw={0}
//         defaultPitch={0}
//         plugins={
//           autoRotate
//             ? [
//                 [
//                   AutorotatePlugin,
//                   {
//                     speed: autoRotateSpeed, // degrees per second
//                   },
//                 ],
//               ]
//             : []
//         }
//       />
//     </div>
//   );
// };

// export default PanoramaViewer;
