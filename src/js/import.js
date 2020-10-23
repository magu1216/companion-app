export default function getIt () {
    fetch('https://jsonplaceholder.typicode.com/todos') // continues in next line with .then
    .then (res => res.json())
    .then (todos => console.log(todos));
    console.log("ok");
};

getIt();
