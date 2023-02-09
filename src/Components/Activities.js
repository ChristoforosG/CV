import ProjectDetails from "./ProjectDetails";

function Activities({ activities }) {
  return activities.map(function (activity, i) {
    return <ProjectDetails detail={activity} />;
  });
}

export default Activities;
