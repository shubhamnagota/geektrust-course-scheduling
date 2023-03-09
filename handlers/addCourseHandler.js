const addCourseOffering = (data) => {
  const [courseName, instructor, startDate, minEmpCount, maxEmpCount] = data;

  if (!courseName || !instructor || !startDate || !minEmpCount || !maxEmpCount) {
    console.log("INPUT_DATA_ERROR");
    return;
  }
  const courseOfferingId = `OFFERING-${courseName}-${instructor}`;

  global.db.courses.set(courseOfferingId, {
    courseName,
    instructor,
    startDate,
    date: new Date(`${startDate.slice(2, 4)}-${startDate.slice(0, 2)}-${startDate.slice(4)}`),
    minEmpCount,
    maxEmpCount,
    registrations: new Map(),
    status: "AVAILABLE",
  });

  console.log(courseOfferingId);
  return;
};

module.exports = addCourseOffering;
