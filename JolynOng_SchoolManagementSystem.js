// Array of current Instructors
const instructors = [
    { instructorId: 1, name: "Mr Lim Khai Cher" },
    { instructorId: 2, name: "Mr Tan Hock Yong" },
    { instructorId: 3, name: "Mr Ang Beng Hoe" },
    { instructorId: 4, name: "Mr Hameed" },
    { instructorId: 5, name: "Mr Flex Tio" }
];

// Array of available Module
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
    // Function 1: Register/Add a new student with basic details like name, age, and class
    registerStudent(studentDetails) {
        try {
            const { adminNum, name, age, className } = studentDetails;
            if (!adminNum || !name || !age ) throw new Error("Missing student details.");

            const student = {adminNum, name, age, className };
            students.push(student);
            console.log(`Student ${name} registered successfully.`);
        } catch (e) {
            console.error(`Error registering student: ${error.message}`);
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
            return 'No students available.';
        }
    },

    // Function 3: Schedule class
    scheduleClass(classDetails) {
        const { moduleCode, time, location, instructorId } = classDetails;
        const instructor = instructors.find(i => i.instructorId === instructorId);
        const module = modules.find(m => m.moduleCode === moduleCode);
    
        if (!instructor) {
            console.log('Instructor not found!');
            return;
        }
        if (!module) {
            console.log('Module not found!');
            return;
        }
    
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
        console.log(`Class for ${module.moduleName} scheduled successfully.`);
    }
}