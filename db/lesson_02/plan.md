
--------------------------------------------------------

# План занятия №2 05 апреля 2024 г.

1. Что было на прошлом занятии:
- клиент-серверная архитектура и место СУБД в ней
  - ПО на стороне клиента:
  
  - известные СУБД

  - функции СУБД

- модели данных:
  - ...
  - ...
  - ...
- концепция CRUD 

- знакомство с таблицами

- SQL-запросы

- знакомство с таблицами, их структурой и содержимым [Песочница (интернет-магазин)](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all)

2. Есть ли вопросы по домашнему заданию?

3. Практика работы с СУБД
- подключение к БД;
- создание таблиц, заполнение их данными;
- связывание таблиц, отношение между сущностями - см. теорию.

4. Практика:

**Задание 1.**
Сервер, пользователь, база данных.
**Шаг 1.**
Открываем консоль сервера PostgreSQL, создаем локальный сервер:
- имя - его надо придумать
- порт - 5432 или 5431, если 5432 занят
- ПАРОЛЬ ПОЛЬЗОВАТЕЛЯ QWERTY007 ИЛИ POSTGRES (ТОЛЬКО В УЧЕБНЫХ ЦЕЛЯХ)

- Шаг 2.
  Подключаемся к СУБД с помощью клиента Beekeeper Studio

Шаг 3.
Создаем пользователя.
CREATE USER test_user WITH PASSWORD 'qwerty';
Шаг 4. Создаем БД test_db
CREATE DATABASE test_db OWNER test_user;
Шаг 5.
Наделяем пользователя правами:
GRANT ALL PRIVILEGES ON DATABASE test_db TO test_user;

**Задание 2.**
Создание таблицы с 3-мя колонками.
CREATE TABLE students (
id serial PRIMARY KEY, name varchar(80), age integer
);
Добавление данных в таблицу:
INSERT INTO students (name, age) VALUES
('Anna', 25),
('Maria', 23),
('Roman', 28);
Извлечение данных:
SELECT * FROM students;
SELECT name, age FROM students;
SELECT * FROM students WHERE age < 18;
SELECT * FROM students ORDER BY age ASC;
SELECT AVG(age) AS 'Средний возраст' FROM students;
Изменение данных:
UPDATE students SET age = 26 WHERE name = 'Anna';
Удаление данных:
DELETE FROM students WHERE id = 1;
DELETE FROM students WHERE name = 'Anna';

**Задание 3.**
Создание и связывание таблиц в https://drawsql.app/
1 : 1 - сотрудник и его паспорт, страна и ее столица
1 : N - компания и сотрудники, страны и города
N : N - студенты и курсы, авторы и книги, товары и заказы