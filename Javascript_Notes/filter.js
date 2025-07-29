
//filter:
//filter is used to filter the elements of an array based on a condition
//it returns a new array with the elements that satisfy the condition

const coursesData = ['Master of Business Administration', 'Entrepreneurship', 'BBA', 'BCA', 'MCA', 'B.Tech', 'M.Tech'];

const filterCourses = coursesData.filter((course) => course.length > 8);

console.log(filterCourses); // [Master of Business Administration] 


//second way of defining the filter method
//filter method takes a callback function as an argument and applies it to each element in the array
const filteredcourses = coursesData.filter((course) => {

    return course.length > 3;

})

console.log(filteredcourses); // [ 'Entrepreneurship', 'B.Tech', 'M.Tech' ]


//third way of filtering the elements of an array
//using forEach method to filter the elements of an array
//forEach method is used to execute a provided function once for each array element
const newfilteredCourses = [];

coursesData.forEach((course) => {
    if (course.length > 6) {
        newfilteredCourses.push(course);
    }

})

console.log(newfilteredCourses); // [ 'Master of Business Administration', 'Entrepreneurship']



//create the database of books 2 of each category english, economics, social sciences, civil services etc

const books =  [

    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. S  alinger", year: 1951 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
];

const filterBooks = books.filter((book) => book.year> 1945);
console.log(filterBooks); // undefined, as forEach does not return anything

