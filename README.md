# Assignment 1: School Management Module

This module is for managing students, instructors, module, and classes in a school.

This School Management Module is designed to assist school administrators in managing essential school data, including students, instructors, modules, and class schedules. This module enables users to register students, schedule classes, assign students to classes, and search and delete student records as needed.

# References
1.Error Handling in JavaScript: Error handling. Referred to lab 5 "Try...Catch" method and MDN's guide on Error Handling to learn more about try-catch statements.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

2.JSON for Data Storage: JSON is commonly used for storing data. 
https://www.json.org/json-en.html

## Functions

- registerStudent(studentDetails)  
  Allows administrators to register new students by entering basic details such as `name`, `age`, `admin number`, and `class name`. Data validation is included to ensure all required fields are filled before registration.

- showAllRegisteredStudents()  
  Retrieves a list of all registered students including `name`, `age`, `admin number`, and `class name`. If no students are available, returns `"No students available."`

- scheduleClass(classDetails)  
  Allows administrators to schedule classes by linking `moduleCode`, `time`, `location`, and `instructorId`. Each class is assigned a unique `classId` for future reference and enrollment.

- showAllClasses()  
  Retrieves a list of all scheduled classes, including relevant details such as `classId`, `moduleCode`, `moduleName`, `time`, `location`, and `instructor`.

- enrollStudentToClass(adminNum, classId)  
  Allows administrators to enroll a student in a specific class by linking the student’s `admin number` with the `classId`. Updates the student’s class information to reflect their enrollment. If the student or class is not found, returns `"Student not found!"` or `"Class not found!"` accordingly.

- getStudentListByClass(classId)  
  Retrieves a list of all students enrolled in a specific class. Helps administrators view the composition of a particular class. If the `classId` is not found, returns `"Class not found!"`.

- deleteStudent(adminNum)  
  Allows the removal of a student record based on the student’s `admin number`. Ensures data integrity by confirming student existence before deletion. If the student `admin number` is not found, returns `"Student with admin number 123456A(example adminNum) not found!"`.
