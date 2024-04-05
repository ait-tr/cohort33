# Lesson plan No. 1 April 03, 2024

1. Objectives of the course and what you will be able to do after the course:

**Course Objectives:**
- understanding the role and functions - why are DBMSs needed, what are they used for?
- ability to use - how and in what ways to create and connect?
- basics of the sql query language - how to obtain the necessary information (samples) from the database?
- practical skills for use in projects.

**Skills after the course:**
- installation of the necessary software, creation and connection to the DBMS;
- modeling, design of tables and relationships;
- generation of sql queries.

2. Client-server architecture and the place of the DBMS in it - we draw a diagram.

3. Basic functions of a DBMS - see theory.

4. Required minimum theoretical knowledge - see theory:
   - Data models
   - Basic data structures
   - Degrees of data abstraction
   - Data types

5. CRUD concept and data aggregation - see theory.

6. Tables, fields, records - see theory.

7. SQL queries - practice.

Our "testing ground" for today:

[Sandbox (online store)](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all)
Let's get acquainted with the tables - their structure and contents.

**Examples and tasks:**
see the requests.md file in the code section

https://github.com/ait-tr/cohort33/blob/43605302c1114a0199d3ea569203e223140d6b08/db/lesson_01/code/requests.md

**Tasks:**
Selections by fields:
Display data on suppliers from a specific country, for example Japan, USA
Output city and postal code of clients from `France`
Remove clients from the country `Germany` to the city `Berlin`

Selections with logical operations:
Display products with prices from `50` to `100` EUR
Remove clients from `Germany` and `France`
Withdraw clients except those from `UK` and `USA`
Print supplier phone numbers from `UK` and `Brazil`


Sampling with sorting and output limitation
Display products from `5` category by ascending price
Display the three most expensive products
Display the name and cost of one of the most expensive goods from category `1`

--------------------------------------------------------------

# План занятия №1 03 апреля 2024 г.

1. Задачи курса и что вы будете уметь после курса:

**Задачи курса:**
- понимание роли и функций - зачем нужны СУБД, для чего они используются?
- умение использовать - как и какими способами создавать и подключаться?
- основы языка sql-запросов - как получать нужную информацию (выборки) из базы данных?
- практические навыки использования в проектах.

**Умения после курса:**
- установка необходимого ПО, создание и подключение к СУБД;
- моделирование, проектирование таблиц и связей;
- формирование sql-запросов.

2. Клиент-серверная архитектура и место СУБД в ней - рисуем схему.

3. Основные функции СУБД - см. теория.

4. Необходимый минимум теоретических знаний - см. теория:
   - Модели данных
   - Базовые структуры данных
   - Степени абстракции данных
   - Типы данных

5. Концепция CRUD и агрегация данных - см. теория.

6. Таблицы, поля, записи - см. теория.

7. SQL запросы - практика.

Наш "полигон" на сегодня: 

[Песочница (интернет-магазин)](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all)
знакомимся с таблицами - их структурой и содержимым.

**Примеры и задания:**
см. файл requests.md  в разделе code

https://github.com/ait-tr/cohort33/blob/43605302c1114a0199d3ea569203e223140d6b08/db/lesson_01/code/requests.md

**Задания:**
Выборки по полям:
Вывести данные о поставщиках из конкретной страны, например Japan, USA
Вывести город и почтовый индекс клиентов из `France`
Вывести клиентов из страны `Germany` города `Berlin`

Выборки с логическими операциями:
Вывести товары с ценой от `50` до `100` EUR
Вывести клиентов из `Germany` и `France`
Вывести клиентов, кроме тех, что из `UK` и `USA`
Вывести номера телефонов поставщиков из `UK` и `Brazil`


Выборка с сортировкой и лимитацией вывода
Вывести товары из `5` категории по возрастанию цены
Вывести три самых дорогих товара
Вывести название и стоимость одного самого дорогого товара из категории `1`

