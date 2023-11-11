
**Задание: "Безопасное извлечение элементов из массива"**

Напишите программу на Java, которая безопасно извлекает элементы из массива строк, используя индекс, предоставленный пользователем. 
Программа должна учитывать возможность возникновения исключений и корректно их обрабатывать.

**Требования к программе:**

1. Создайте массив строк с различными значениями (минимум 5 элементов).
2. Запросите у пользователя индекс элемента, который нужно извлечь из массива.
3. Напишите метод для безопасного извлечения элемента из массива по индексу.
4. Используйте блок `try-catch` для обработки исключений.
5. Обработайте следующие типы исключений:
    - `ArrayIndexOutOfBoundsException` - если пользователь вводит индекс, который выходит за пределы массива.
    - `NumberFormatException` - если пользователь вводит не число.
6. В блоке `finally` выведите сообщение о том, что операция поиска завершена.
7. Если извлечение прошло успешно, выведите элемент массива.
8. Если возникло исключение, выведите соответствующее сообщение об ошибке и позвольте пользователю попробовать снова.

**Пример работы программы:**

```
Введите индекс элемента для извлечения: 3
Извлеченный элемент: Apple
Операция поиска завершена.
Введите индекс элемента для извлечения: 10
Ошибка: Индекс за пределами границ массива.
Операция поиска завершена.
Введите индекс элемента для извлечения: два
Ошибка: Введено не число.
Операция поиска завершена.
```