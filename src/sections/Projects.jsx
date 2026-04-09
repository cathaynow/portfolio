import {myProjects} from "../constants/index.js";
import Project from "../components/Project.jsx";
import {motion, useMotionValue, useSpring} from "motion/react";
import {useState} from "react";

const Projects = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, {damping: 10, stiffness: 50})
    const springY = useSpring(y, {damping: 10, stiffness: 50})
    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    }

    const [preview, setPreview] = useState(null)

    return (
        <section onMouseMove={handleMouseMove} className="relative c-space section-spacing" id="work">
            <h2 className="text-heading">My Selected Projects</h2>
            <div className="mt-12 w-full">
                {myProjects.map((project) => (
                    <Project key={project.id} {...project} setPreview={setPreview}/>
                ))}
            </div>
            {preview && (<motion.img
                className="fixed top-0 left-0 z-50 hidden h-56 w-80 rounded-lg object-cover pointer-events-none shadow-lg md:block"
                src={preview}
                style={{x: springX, y: springY}}/>)}
        </section>
    )
}
export default Projects
