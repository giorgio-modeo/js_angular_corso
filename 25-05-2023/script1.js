// literal object 

const Book={
    title:'io, robot',
    price:16.5,
    page:120,
    available:true,
    author:['asimov'],
    cover:{
        big:'img/asimov.jpg',
        small:'thumb/asimov.jpg'
    }
};
const BookJson = JSON.stringify(Book);//convert a object to a string 
console.log(BookJson);
console.log(Book);
const Book2 = JSON.parse(BookJson);//convert a string to a object





