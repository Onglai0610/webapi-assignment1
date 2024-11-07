# Assignment 1: School Management Module

This module is for managing students, instructors, module, and classes in a school.

This School Management Module is designed to assist school administrators in managing essential school data, including students, instructors, modules, and class schedules. This module enables users to register students, schedule classes, assign students to classes, and search and delete student records as needed.

# References
1.Error Handling in JavaScript: Error handling. Referred to lab 5 "Try...Catch" method and MDN's guide on Error Handling to learn more about try-catch statements.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

2.JSON for Data Storage: JSON is commonly used for storing data. 
https://www.json.org/json-en.html

# Functions
registerStudent:

Allows administrators to register new students by entering basic details such as name, age, admin number, and class name.
Data validation is included to ensure all required fields are filled before registration.

showAllRegisteredStudents:

Retrieves all student name, age, admin number, and class name.
"No students available." will be return if no student is added into the database.

scheduleClass:
Allows administrators to schedule classes by linking moduleCode, time, location, instructorId.
Classes are assigned unique class IDs to allow for future reference and enrollment.

showAllClasses:
Retrieves all scheduled classes.


enrollStudentToClass:
Allows administrators to enroll students to classes by linking studentAdminNumber, classID.
Updates the student’s class information to reflect their enrollment.
If one of the detail is entered wrongly, either "Student not found!" or "Class not found!" will be returned.

getStudentListByClass:
Retrieves a list of all students enrolled in a specific class.
Helps administrators view class composition.
If the classId is not found, "Class not found!" will be returned.

deleteStudent:
Allows the removal of student records based on their admin number.
Ensures data integrity by confirming student existence before deletion.
If student admin numbe is not found, "Student with admin number "${adminNum}" not found!" will be returned.