import React, { useRef, useState } from 'react'
import { Engine, Scene, useClick, useHover } from 'react-babylonjs'
import { Vector3, Vector4, Color3 } from '@babylonjs/core'
import image from './../../images/image.png'
// const DefaultScale = new Vector3(1, 1, 1);
// const BiggerScale = new Vector3(1.25, 1.25, 1.25);

const Cylinder = (props) => {
    // access Babylon scene objects with same React hook as regular DOM elements
    const boxRef = useRef(null);

    // const [clicked, setClicked] = useState(false);
    // useClick(
    //     () => setClicked(clicked => !clicked),
    //     boxRef
    // );
    // const [hovered, setHovered] = useState(false);
    // useHover(
    //     () => setHovered(true),
    //     () => setHovered(false),
    //     boxRef
    // );
    // This will rotate the box on every Babylon frame.
    // const rpm = 5;
    // useBeforeRender((scene) => {
    //   if (boxRef.current) {
    //     // Delta time smoothes the animation.
    //     var deltaTimeInMs = scene.getEngine().getDeltaTime();
    //     boxRef.current.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMs / 1000));
    //   }
    // });

    const faceUV = [];
    faceUV[0] = new Vector4(0, 0, 0, 0);
    faceUV[1] = new Vector4(1, 0, 0.25, 1);
    faceUV[2] = new Vector4(0, 0, 0, 0);

    return (<cylinder faceUV={faceUV} name={props.name} ref={boxRef} height={10}>
        <standardMaterial name={`${props.name}-mat`}>
            <texture url={image} />
        </standardMaterial>
    </cylinder>);
}

export const CylinderPage = () => {
    const color = new Color3(0.9, 0.9, 0.9)
    return (<div style={{ height: '800px' }}>
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
            <Scene clearColor={color}>
                <arcRotateCamera name="camera1" target={Vector3.Zero()} alpha={Math.PI / 2} beta={Math.PI / 4} radius={8} />
                <hemisphericLight name='light1' intensity={1} direction={Vector3.Up()} />
                <Cylinder name='right' position={new Vector3(0, 0, 0)}
                    color={Color3.FromHexString('#C8F4F9')} hoveredColor={Color3.FromHexString('#3CACAE')}
                />
            </Scene>
        </Engine>
    </div>)

}