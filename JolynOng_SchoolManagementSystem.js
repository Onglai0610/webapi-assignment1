// Array of current instructors
const instructors = [
    { instructorId: 1, name: "Mr Lim Khai Cher" },
    { instructorId: 2, name: "Mr Tan Hock Yong" },
    { instructorId: 3, name: "Mr Ang Beng Hoe" },
    { instructorId: 4, name: "Mr Hameed" },
    { instructorId: 5, name: "Mr Flex Tio" }
];

// Array of available modules
const modules = [
    { moduleCode: "EGL301", moduleName: "Web API Development", moduleYear: 3 },
    { moduleCode: "EGL302", moduleName: "Database Modelling and Implementation", moduleYear: 3 },
    { moduleCode: "EGL303", moduleName: "Cross Platform Mobile App Development", moduleYear: 3 },
    { moduleCode: "EGL304", moduleName: "Infocomm System Project", moduleYear: 3 },
    { moduleCode: "EGL305", moduleName: "Emerging Trends & Technologies", moduleYear: 3 }
];

// Data storage for students and classes
let students = [];
let classes = [];

module.exports = {
    // Function 1: Register/Add a new student with basic details like admin number, name, age, and class
    registerStudent(studentDetails) {
        try {
            const { adminNum, name, age, className } = studentDetails;
            if (!adminNum || !name || !age ) throw new Error("Missing student details.\n");

            const studentAdminNum = students.find(s => s.adminNum === adminNum);

            if (!studentAdminNum) {
                const student = { adminNum, name, age, className };
                students.push(student);
                console.log(`Student ${name} registered successfully.\n\n`);
            }
            else {
                console.error(`Student with Admin Number ${adminNum} is already registered.`);
                console.error('Please enter the correct Admin Number')
                return;
                
            }
            
        } catch (e) {
            console.error(`Error registering student: ${e.message}\n`);
        }
    },

    // Function 2: Show all registered students
    showAllRegisteredStudents() {
        if (students.length > 0) {
            return `List of students:\n` + 
                students.map((student, index) => 
                    `Index: ${index}, Admin Number: ${student.adminNum}, Student Name: ${student.name}, Age: ${student.age}, Class: ${student.className}`
                ).join('\n');
        } else {
            return 'No students available.\n';
        }
    },

    // Function 3: Schedule a class
    scheduleClass(classDetails) {
        try {
            const { moduleCode, time, location, instructorId } = classDetails;

            //finds and returns the instructor object where the instructorId matches the value of instructorId
            const instructor = instructors.find(i => i.instructorId === instructorId);
            //finds and returns the module object where the moduleCode matches the value of moduleCode
            const module = modules.find(m => m.moduleCode === moduleCode);
            
            if (!instructor) throw new Error('\nInstructor not found!');
            if (!module) throw new Error('\nModule not found!');
            if (!time || !location) throw new Error;
        
            const classId = classes.length + 1;
            const scheduledClass = {
                classId,
                moduleCode,
                moduleYear: module.moduleYear,
                moduleName: module.moduleName,
                time,
                location,
                instructor: instructor.name
            };
            classes.push(scheduledClass);
            console.log(`Class for ${module.moduleName} scheduled successfully.\n`);
        } catch (e) {
            console.error(`Error scheduling class: ${e.message}`);
        }
    },

    // Function 4: Show all scheduled classes
    showAllClasses() {
        if (classes.length > 0) {
            return `List of scheduled classes:\n` + 
                classes.map((scheduledClass, index) => 
                    `Id: ${index}, Class ID: ${scheduledClass.classId}, Module Code: ${scheduledClass.moduleCode}, Module Name: ${scheduledClass.moduleName}, Time: ${scheduledClass.time}, Location: ${scheduledClass.location}, Instructor: ${scheduledClass.instructor}\n`
                ).join('\n');
        } else {
            return 'No classes scheduled.\n';
        }
    },

    // Function 5: Enrolls a student into a class (Update student's class)
    enrollStudentToClass(adminNum, classId) {

        //finds and returns the student object where the adminNum matches the value of adminNum
        const student = students.find(s => s.adminNum === adminNum);
        
        //finds and returns the class object where the classId matches the value of classId
        const scheduledClass = classes.find(c => c.classId === classId);
    
        if (!student) {
            console.log('Student not found!');
            return;
        }
        if (!scheduledClass) {
            console.log('Class not found!');
            return;
        }

        student.className = scheduledClass.moduleName; // Update student’s class with the module name
        console.log(`${student.name} enrolled in ${scheduledClass.moduleName}, year ${scheduledClass.moduleYear} class.`);
    },

    // Function 6: Retrieves a list of students for a specific class
    getStudentListByClass(classId) {
        //finds and returns the class object where the classId matches the value of classId
        const scheduledClass = classes.find(c => c.classId === classId);
        if (!scheduledClass) {
            console.log('Class not found!');
            return;
        }

        //filter() method returns all students whose className is also 'Web API Development'
        const studentsInClass = students.filter(s => s.className === scheduledClass.moduleName);
        console.log(`\nStudents enrolled in year ${scheduledClass.moduleYear} ${scheduledClass.moduleName}:`);
        studentsInClass.forEach(student => console.log(student.name));
    },

    // Function 7: Delete a student by admin number
    deleteStudent(adminNum) {
        try {
            const studentIndex = students.findIndex(s => s.adminNum === adminNum);

            // Check if the student exists
            if (studentIndex === -1) { // -1 means no student was found with the given adminNum
                throw new Error(`\nStudent with admin number "${adminNum}" not found!\n`);
            }

            // Remove the student from the array
            const deletedStudent = students.splice(studentIndex, 1)[0]; // "1" Indicates that only one element (the student at the specified index) will be removed.
            //[0] accesses the first element of this array (which is the deleted student) and assigns it to the deletedStudent variable.
            console.log(`\nStudent ${deletedStudent.name} with admin number ${adminNum} deleted successfully.\n`);
        } catch (e) {
            console.error(`\nError deleting student: ${e.message}`);
        }
    },

    
};
