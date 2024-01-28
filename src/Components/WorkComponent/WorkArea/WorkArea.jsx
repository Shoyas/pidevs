import { useState } from "react";
import WorkCard from "../WorkCard/WorkCard";
import projectData from "./../WorkCard/project";

const WorkArea = () => {
  const [project, setProject] = useState(projectData);

  return (
    <div className="mt-20 mx-3">
      <h1 className="text-5xl font-semibold text-center text-[#0C5ADB] underline mt-10">
        We've completed
      </h1>
      <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-4">
        {project.map((singleProject) => (
          <WorkCard key={project.id} project={singleProject} />
        ))}
      </div>
    </div>
  );
};

export default WorkArea;
