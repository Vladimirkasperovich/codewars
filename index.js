/**
 * Реализуйте функцию memoize, которая кэширует результаты вызова функции
 * и возвращает закэшированное значение при повторных вызовах с теми же аргументами.
 * Учесть, что функция может принимать несколько аргументов.
 */

function memoize(fn) {
    // Ваша реализация
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key)
        }

        const res = fn(...args);
        cache.set(key, res);
        return res;
    }
}

// Тесты
function expensiveCalculation(x, y) {
    console.log('Выполняются сложные вычисления...');
    return x * y;
}

const memoizedCalculation = memoize(expensiveCalculation);

// console.log(memoizedCalculation(5, 3)); // Должно выполнить вычисления и вывести сообщение
// console.log(memoizedCalculation(5, 3)); // Должно вернуть результат из кэша без вычислений
// console.log(memoizedCalculation(2, 8)); // Новые аргументы - снова вычисления
// console.log(memoizedCalculation(2, 8)); // Снова из кэша