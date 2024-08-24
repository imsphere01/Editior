import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';

const Folder = ({ folderName }: { folderName: string }) => {
  return (
    <Link
      href={`/data/${folderName}/`}
      className="flex flex-col min-h-52 min-w-16 max-h-60 max-w-52"
    >
      {/* <div className="folder-top  w-full h-6 bg-gray-300"></div>
      <div className="folder-main p-2 bg-gray-300 w-full h-full"></div> */}
      <button className="folder">
        <div className="folder-top p-1 text-sm">{folderName}</div>
        <div className="folder-body p-1">
          <Image src="/bg-1.png" alt="folder-img" width={200} height={200} />
          {/* <ShaderGradientCanvas
            importedFiber={{ ...fiber, ...drei, ...reactSpring }}
            style={{
              //   position: 'absolute',
              //   top: 0,
              borderRadius: '5px',
            }}
          >
            <ShaderGradient
              control="query"
              //   urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%2352ff89&color2=%23dbba95&color3=%23d0bce1&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=0&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false&zoomOut=false"
              urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%236349ca&color3=%2358004d&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.2&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.1&uStrength=1.5&uTime=8&wireframe=false"
            />
          </ShaderGradientCanvas> */}
        </div>
      </button>
    </Link>
  );
};

export default Folder;
