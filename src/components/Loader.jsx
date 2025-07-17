import {useProgress} from "@react-three/drei";

const Loader = () => {
    const {progress} = useProgress()
    return (

        <html center className="text-xl font-normal text-center">{progress}% loaded</html>
    )
}
export default Loader
