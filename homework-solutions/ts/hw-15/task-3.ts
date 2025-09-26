/*Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта
*/
function getKeyByValue<T, V>(obj: T, value: V): keyof T | undefined {
    for (const key in obj) {    
        if (obj[key] === value) {
            return key as keyof T;
        }   
    } 
    return undefined;
}   
const exampleObj = {
    id: 1,
    name: 'Alice',  
    age: 30
};  
console.log(getKeyByValue(exampleObj, 'Alice'));
console.log(getKeyByValue(exampleObj, 30));
