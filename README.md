# Assignment 1: School Management Module

This module is for managing students, instructors, module, and classes in a school.

This School Management Module is designed to assist school administrators in managing essential school data, including students, instructors, modules, and class schedules. This module enables users to register students, schedule classes, assign students to classes, and search and delete student records as needed.

# References
1.Error Handling in JavaScript: Error handling. Referred to lab 5 "Try...Catch" method and MDN's guide on Error Handling to learn more about try-catch statements.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

2.JSON for Data Storage: JSON is commonly used for storing data. 
https://www.json.org/json-en.html

## Usage

The following code is a sample for how the functions can be used:
```javascript
const schoolMgmt = require('./JolynOng_SchoolManagementSystem.js');

// Show all Registered students when no students are registered yet
console.log(schoolMgmt.showAllRegisteredStudents());
console.log("========================================");

// Register students (add)
schoolMgmt.registerStudent({ adminNum:'234567A', name: 'Alice Johnson', age: 21, className: '' });
schoolMgmt.registerStudent({ adminNum:'234567B', name: 'Bob Brown', age: 22, className: '' });
schoolMgmt.registerStudent({ adminNum: '234567C', name: 'John Doe', age: 20, className: 'Web API Development' });
console.log("========================================");


// Show all Registered students 
console.log(schoolMgmt.showAllRegisteredStudents());
console.log("========================================");

//schedule class  moduleCode, time, location, instructorId
schoolMgmt.scheduleClass({ moduleCode: 'EGL301', time: '13:00', location: 'S.532', instructorId:2});
schoolMgmt.scheduleClass({ moduleCode: 'EGL303', time: '15:00', location: 'S.532', instructorId:3});
console.log("========================================");

//show all classes
console.log(schoolMgmt.showAllClasses());
console.log("========================================");

//enroll student to class enrollStudentToClass(adminNum, classId)
schoolMgmt.enrollStudentToClass('234567A', 1);
schoolMgmt.enrollStudentToClass('234567B', 2);
schoolMgmt.enrollStudentToClass('234567C', 1);
console.log("========================================");

// Get list of student by classid
console.log(schoolMgmt.getStudentListByClass(1));
console.log("========================================");


// This will delete the student with admin number '234567A'.
schoolMgmt.deleteStudent('234567B');  
console.log("========================================");

//Try deleting the same student. 
//Error deleting student: 
//Student with admin number "234567B" not found! will be shown.
schoolMgmt.deleteStudent('234567B');  
console.log("========================================");

// Show all students to confirm the student is deleted.
console.log(schoolMgmt.showAllRegisteredStudents());
console.log("========================================");
```
Save the code above as "app.js" and run
```node app```

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
