const confirmAllotment = (data) => {
  const [courseOfferingId] = data;
  const courseOfferingDetails = global.db.courses.get(courseOfferingId);

  if (!courseOfferingId || !courseOfferingDetails) {
    console.log("INPUT_DATA_ERROR");
    return;
  }
  courseOfferingDetails.status = "CONFIRMED";
  const { registrations, minEmpCount } = courseOfferingDetails;

  if (registrations.size < minEmpCount) {
    courseOfferingDetails.status = "COURSE_CANCELED";
  }

  const { courseName, instructor, startDate, status } = courseOfferingDetails;

  new Map([...registrations.entries()].sort()).forEach((emp, courseRegistrationId) => {
    console.log(courseRegistrationId, emp.email, courseOfferingId, courseName, instructor, startDate, status);
  });
  return;
};

module.exports = confirmAllotment;
