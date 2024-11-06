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
    // Registers a new student with basic details like name, age, and class
    registerStudent() {
        return 1+2;
    },
    // Adds a new instructor with relevant information.
    addInstructor() {
        console.log("Hello function B");
    }
}