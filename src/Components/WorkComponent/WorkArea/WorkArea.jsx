import { useState } from "react";
import WorkCard from "../WorkCard/WorkCard";
import projectData from "./../WorkCard/project";

const WorkArea = () => {
  const [project, setProject] = useState(projectData);

  console.log("Work Area", project);

  return (
    <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-4">
      {project.map((singleProject) => (
        <WorkCard key={project.id} project={singleProject} />
      ))}
    </div>
  );
};

export default WorkArea;
