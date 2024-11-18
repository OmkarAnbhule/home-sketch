import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF, Html } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import { Box3, Vector3 } from 'three';

function Model({ model }, props) {
    const { scene } = useGLTF(model);
    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    return <primitive object={scene} {...props} />;
}

export default function ModelViewer({ model }) {
    const modelRef = useRef();
    const orbitRef = useRef();


    useEffect(() => {
        if (modelRef.current) {
            const box = new Box3().setFromObject(modelRef.current);
            const center = new Vector3();
            box.getCenter(center);

            const size = box.getSize(new Vector3());
            const minDistance = Math.max(size.x, size.y, size.z) * 0.2;

            orbitRef.current.target.copy(center);
            orbitRef.current.minDistance = minDistance;
            orbitRef.current.update();
        }
    }, [modelRef]);

    return (
        <Canvas
            shadows
            camera={{ position: [7, 7, 10], fov: 50 }}
            className='w-full h-full'
        >
            <Suspense
                fallback={
                    <Html center>
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-white" />
                    </Html>
                }
            >
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-near={1}
                    shadow-camera-far={20}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <Model ref={modelRef} scale={0.5} model={model} />
                <OrbitControls
                    ref={orbitRef}
                    enableZoom={true}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2.2}
                    maxDistance={30}
                />
                <mesh
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, 0, 0]}
                    receiveShadow
                >
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial color="#1e3d58" />
                </mesh>
                <Environment preset='city' />
            </Suspense>
        </Canvas>
    );
}
