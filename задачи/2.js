// Необходимо расширить список стандартных методов массива, путем добавления новой функции объединения двух массивов.
// Расширяемый метод не должен переопределять метод массива, если такой уже определен.
// Результатом работы функции является новый массив, включающий элементы первого и второго массива, 
// отсортированные в порядке возрастания. 
// В реализация функции запрещено использовать сортировку массивов. Если исходные массивы не отсортированы в порядке возрастания,
// необходимо вызвать исключение.

// Пример:
// [1, 3, 4], [1, 2, 6] -> [1, 1, 2, 3, 4, 6]
// [1, 2, 3, 4], [2, 5, 10] -> [1, 2, 2, 3, 4, 5, 10]
// [1, 3, 2], [1, 2, 3] -> Error

Array.prototype.customConcat = function(arr1, arr2) {
    const res = [];
    const length = arr1.length + arr2.length;

    for(let i = 0; i < length; i++) {
        const currItem = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();

        if (res[i - 1] > currItem) {
            throw new Error('Array is not sorted');
        }

        res.push(currItem);
    }

    return res;
}

const arr = [];

console.log(arr.customConcat([1, 2, 7], [1, 5, 10]));
