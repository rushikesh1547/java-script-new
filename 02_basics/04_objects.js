//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"

// console.log(tinderUser);

const regularUser = {
    email : "rsc@google.in",
    fullname : {
        userfullname: {
            firstname: "rushikesh",
            lastname: "chandekar"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}


// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} ,obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2 , ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "rsc@gmail.com"
    },
     {
        id: 1,
        email: "rsc@gmail.com"
    },
     {
        id: 1,
        email: "rsc@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));



const course = {
    coursename: "JS in Hindi",
    price:"999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor } = course
const {courseInstructor :teacher} = course

console.log(teacher);


// const navbar = ({company}) => {

// }

// navbar(company = "rushikesh") //Destructuring concept of react

// {
//    " name" : "Rushikesh",
//     "coursename" : "JS in Hindi",
//     "price": "free"
// } //api in terms of object

// [
//     {},
//     {},
//     {}
// ] //api in terms of array

