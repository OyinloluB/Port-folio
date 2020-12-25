export const setProjectId = (data) => {
  localStorage.setItem("project_id", JSON.stringify(data));
};

export const getProjectId = () => {
  let projectId = localStorage.getItem("project_id");
  return JSON.parse(projectId);
};
