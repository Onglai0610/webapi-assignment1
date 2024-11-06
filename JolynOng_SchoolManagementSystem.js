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

            const student = { adminNum, name, age, className };
            students.push(student);
            console.log(`Student ${name} registered successfully.\n\n`);
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
            const instructor = instructors.find(i => i.instructorId === instructorId);
            const module = modules.find(m => m.moduleCode === moduleCode);
        
            if (!instructor) throw new Error('\nInstructor not found!');
            if (!module) throw new Error('\nModule not found!');
        
            const classId = classes.length + 1;
            const scheduledClass = {
                classId,
                moduleCode,
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
                    `Index: ${index}, Class ID: ${scheduledClass.classId}, Module Code: ${scheduledClass.moduleCode}, Module Name: ${scheduledClass.moduleName}, Time: ${scheduledClass.time}, Location: ${scheduledClass.location}, Instructor: ${scheduledClass.instructor}\n`
                ).join('\n');
        } else {
            return 'No classes scheduled.\n';
        }
    },

    // Function 5: Enrolls a student into a class (Update student's class)
    enrollStudentToClass(studentId, classId) {
        const student = students.find(s => s.studentId === studentId);
        const scheduledClass = classes.find(c => c.classId === classId);
    
        if (!student) {
            console.log('Student not found!');
            return;
        }
        if (!scheduledClass) {
            console.log('Class not found!');
            return;
        }

        student.className = scheduledClass.className; // Update student’s class
        console.log(`${student.name} enrolled in ${scheduledClass.className} class.`);
    },

    
};
