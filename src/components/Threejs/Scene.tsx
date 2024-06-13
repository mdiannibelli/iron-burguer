import { Canvas } from '@react-three/fiber'

const Scene = () => {
  return (
    <div id="canvas-container" className="h-full w-full"> {/* change w/h responsive */}
		<Canvas> {/* setup scene & camera */}
			<ambientLight intensity={0.1} />
			<directionalLight color="red" position={[0, 0, 5]}/>
			<mesh>  {/* scene object */}
				<boxGeometry args={[2,2,2]}/>
    			<meshStandardMaterial />
			</mesh>
		</Canvas>
	</div>
  )
}

export default Scene
