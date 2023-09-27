import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <div className={'canvas-load'}>
                <p
                    style={{
                        fontSize: 14,
                        color: 'white',
                        fontWeight: 800,
                        marginTop: 40,
                    }}
                >
                    Loading 3D model...{progress.toFixed(2)}%
                </p>
            </div>
        </Html>
    );
};

export default Loader;
