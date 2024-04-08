# Lesson plan No. 3 April 08, 2024

1. What we learned in the last lesson:
- installation of a local database server;
- creating a user and database;
- connection to the database (port, host name, user, password);
- creating tables, filling them with data;

2. Are there any questions about homework?

3. Plan for today's lesson:

- linking tables:
    - PRIMARY KEY
    - FOREIGN KEY

- relationships between tables:
    - eleven
    - 1 : MANY
    - MANY-to-MANY relationship
- linking tables
- SQL statements
- Aggregation - obtaining calculated data (results, statistics, analytics)
- Constraints, data validation
- Aliases in SQL / AS Operator

4. Practice:
- create several tables
- perform SQL queries - examples using operators

5. Group work:

    - create a data model "Library":
        - book
        - genre
        - reader
        - book rental

- create a data model "School":
    - student
    - teacher
    - item
    - well

- create a data model "Car sharing"
    - automobile
    - driver
    - region
    - deal

Step 1. Make a model in SQLdraw
Step 2: Export SQL scripts to create tables
Step 3. Creating a database and tables
Step 4. Entering data
Step 5. Make 5 queries and get samples

6. Let's summarize the RDBMS:
- what is positive about them?

- what's negative about them?

--------------------------------------------------------

# План занятия №3 08 апреля 2024 г.

1. Что мы изучили на прошлом занятии:
- установка локального сервера БД 
  - PostgreSQL - сервер БД(локально, локальный порт 5432), 
  - pgAdmin - локальное приложения, 
  - Beekeeper - локальное приложение, мы его подключили к СУБД PostgreSQL.
- создание пользователя и БД;
  - см. теория к занятию 2.
  
- подключение к БД (port, host name, user, password);

- создание таблиц, заполнение их данными;

2. Есть ли вопросы по домашнему заданию?

3. План на сегодняшнее занятие:

- связывание таблиц:
  - PRIMARY KEY (есть в каждой таблице)
  - FOREIGN KEY (это значение ключа из другой таблицы)

- отношения между таблицами:
  - 1 : 1
    гражданин и номер его действующего паспорта
    страна и ее столица 
  
  - 1 : MANY
  
  - отношение MANY-to-MANY
  
- связывание таблиц
- операторы SQL
- Aggregation - получение вычисленных данных (итоги, статистика, аналитика)
- Ограничения (Constraints), валидация данных
- Псевдонимы (alias) в SQL / Оператор AS

4. Практика:
- создаем таблиц для сущностей
- выполняем SQL-запросы 
- примеры с использованием операторов

5. Групповая работа:

  - создать модель данных "Библиотека":
    - книга
    - жанр
    - читатель
    - аренда книг

- создать модель данных "Школа":
  - студент
  - преподаватель
  - предмет
  - курс

- создать модель данных "Каршеринг"
  - автомобиль
  - водитель
  - регион
  - сделка

Шаг 1. Сделать модель в SQLdraw
Шаг 2. Экспорт SQL-скриптов для создания таблиц
Шаг 3. Создание БД и таблиц
Шаг 4. Внесение данных
Шаг 5. Сделать 5 запросов и получить выборки

6. Подводим итоги по RDBMS:
- что в них позитивного?

- что в них негативного?
