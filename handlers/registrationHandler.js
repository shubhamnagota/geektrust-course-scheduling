const registerEmployee = (data) => {
  const [email, courseOfferingId] = data;
  const courseOfferingDetails = global.db.courses.get(courseOfferingId);

  if (!email || !courseOfferingId || !courseOfferingDetails) {
    console.log("INPUT_DATA_ERROR");
    return;
  }

  const { courseName, date, registrations, maxEmpCount, status } = courseOfferingDetails;

  const empName = email.split("@")[0];
  const courseRegistrationId = `REG-COURSE-${empName}-${courseName}`;

  //   console.log(registrations, registrations.size, maxEmpCount);

  if (registrations.size >= maxEmpCount) {
    console.log("COURSE_FULL_ERROR");
    return;
  }

  if (status === "CANCELED") {
    console.log("COURSE_CANCELED");
    return;
  }

  registrations.set(courseRegistrationId, {
    email,
    status: "ACCEPTED",
  });
  global.db.registrations.set(courseRegistrationId, {
    email,
    courseOfferingId,
    status: "ACCEPTED",
  });

  console.log(courseRegistrationId, "ACCEPTED");
  return;
};

module.exports = registerEmployee;
