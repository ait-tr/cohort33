# Basics of relational databases, lesson 2

## SQL: creating a DBMS user

```sql
CREATE USER test_user WITH PASSWORD 'qwerty';
```
The user is created in the DBMS!

## SQL: creating a database

```sql
CREATE DATABASE test_db OWNER test_user
```

Any database must be created before you can connect to it.
The user specified as owner will have maximum access rights to this database.

## SQL: user rights in the database

```sql
GRANT ALL PRIVILEGES ON DATABASE test_db TO test_user;
```

By default, only the owner and super-administrator of the DBMS have access to the database. All other users need to add access explicitly.

## SQL: delete database

```sql
DROP DATABASE test_db;
```

A database can be deleted by its owner, a DBMS super-administrator, or a user who has been explicitly granted the right to do so.

## SQL: creating a table

```sql
CREATE TABLE students (
id serial PRIMARY KEY, name varchar(80), age integer
);
```

# Data Manipulation Language

**DML** is a subset of the SQL language designed to create, modify, and delete data in tables within a database. This includes all commands starting with `SELECT`, `INSERT`, `UPDATE` and `DELETE`.
(CRUD is an abbreviation for CREATE READ UPDATE DELETE)
In general, SQL DMLs are very similar among different databases, but sometimes there are major differences, so it's always a good idea to check your specific database's documentation if you have problems.

## SQL: adding rows to a table

```sql
INSERT INTO students (name, age) VALUES
('Anna', 25),
('Maria', 23),
('Roman', 28);
```

Please note that the id field exists in the table, but its value is not required. The serial data type allows it to be filled in automatically.

## SQL: data retrieval

```sql
SELECT * FROM students;
SELECT name, age FROM students;
SELECT * FROM students WHERE age < 18;
SELECT * FROM students ORDER BY age ASC;
SELECT AVG(age) AS 'Middle age' FROM students;
```

Using `SELECT` you can not just pull out data, but also filter, sort and carry out simple aggregations.

## SQL: changing data

```sql
UPDATE students SET age = 26 WHERE name = 'Anna';
```

Using `UPDATE` you can change any data in the table.
Using `WHERE` is optional, although highly recommended. Without `WHERE`, all existing rows in the table will be updated.

## SQL: delete data

```sql
DELETE FROM students WHERE id = 1;
```
Most often, deletion occurs by `id`, but you can delete by any other field:

```sql
DELETE FROM students WHERE name = 'Anna';
```
It is possible to use DELETE without WHERE at all, in which case all data in the table will be deleted.


# Linking tables, relationships between entities

## Primary and Foreign keys
**Primary key** (primary key) in databases is a unique identifier for each record in a table. It is used to uniquely identify each row of a table and ensures that the data in that table is unique.
Primary key characteristics:
- uniqueness
- immutability
- not null - cannot be empty

A **Foreign key** in databases is a field or set of fields in a table that is related to a primary key or unique key in another table. It is used to create relationships between tables and ensures data integrity in the database.
Foreign key characteristics:
- relationship between tables
- ensures that the foreign key's values must exist in a corresponding primary key or unique key column in the other table it points to
    - ensures communication and integrity of data in the database.
      Example:
      CREATE TABLE ORDERS (
      OrderID INT PRIMARY KEY,
      CustomerID INT,
      OrderDate DATE,
      FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
      );

## Ratio 1 : 1
- Persons (people) and their passport data
- Country and its capital
- give your example...

## Ratio 1 : N
- Company and employees
- Countries and cities
- ... (your own example)

## N : N ratio
A many-to-many (M:N) relationship in databases means that each record in one table can be associated with multiple records in another table, and vice versa. Implementing such a relationship requires the use of an intermediate table that connects the records of both tables.
- Students and courses
- Authors and books
- Products and orders
- your example...

## join operator
Let's say we have two tables: "Orders" and "Customers". The "Orders" table contains information about orders, and the "Customers" table contains information about customers. Let's say we want to get a list of all orders along with the names of the customers who made those orders. We can use the JOIN operator to join these two tables on their common column "CustomerID".
SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
The result will be a list of all orders along with the names of the customers who made those orders. Each result line will contain the order ID, date of order and client's name.

Does this create a new table?
Answer: ...

Presentations:
- Lesson 1
  https://docs.google.com/presentation/d/1N9EdfzetGheLoXJEh1VgvzKGvnyiKsP4/edit#slide=id.p29

- Lesson 2
  https://docs.google.com/presentation/d/1fzZHuYstuUQWpUSYEOySYOht7xgIiF3_/edit#slide=id.g2bb3f954aca_0_170

-------------------------------------------------------------------------------------

# Основы реляционных БД, занятие 3

## Типы данных

**Типы данных: числовые**

- `serial` — целое с автоувеличением, от 1 до 2147483647
- `smallint`, `int2` — целое, от -32768 до +32767;
- `integer`, `int`, `int4` — целое, от -2147483648 до +2147483647
- `bigint`, `int8` — целое, от -9 223 372 036 854 775 808 до 9 223 372 036 854 775 807
- `double precision`, `float8` — с плавающей точкой, от 1E-307 до 1E+308

**Типы данных: строковые**

- `character(n)`, `char(n)` — представляет строку из фиксированного количества символов. С помощью параметра задается количество символов в строке;
- `character varying(n)`, `varchar(n)` - представляет строку из фиксированного количества символов. С помощью параметра задается количество символов в строке;
- `text` — представляет текст произвольной длины.

char(n) и varchar(n) - это оба типы данных для хранения строковых значений, где n - это максимальная длина строки.
Однако они имеют несколько различий:
1. Фиксированная длина vs. переменная длина:
   char(n): Этот тип данных хранит строки фиксированной длины, где каждая строка будет занимать точно n символов, даже если фактическая длина строки меньше. Если строка короче n, то она дополняется пробелами до длины n.
   varchar(n): Этот тип данных хранит строки переменной длины, где фактическая длина строки может быть меньше n, но не может превышать n. Память используется только для хранения фактических символов строки, а не для дополнения пробелами.
2. Использование памяти:
   char(n): Использует фиксированное количество памяти для каждой строки, даже если фактическая длина строки меньше n. Это может привести к избыточному использованию памяти, особенно если большинство строк короткие.
   varchar(n): Использует только столько памяти, сколько необходимо для хранения фактических символов строки, плюс дополнительные байты для хранения длины строки. Это более эффективно использование памяти, особенно для строк переменной длины.
3. Скорость доступа:
   char(n): Обычно обеспечивает более быстрый доступ к данным, поскольку каждая строка имеет фиксированную длину, что упрощает процесс доступа к строкам.
   varchar(n): В некоторых случаях может быть немного медленнее, так как требует дополнительного времени на обработку переменной длины.

**Типы данных: время и даты**

- `timestamp` — хранит дату и время, с учётом часового пояса или без. Для дат самое нижнее значение 4713 год до н. э., самое верхнее значение 294276 год н. э.
- `date` — представляет дату от 4713 год до н. э. до 5874897 года н.э
- `time` — хранит время суток, без даты, с учётом часового пояса или без. Принимает значения от 00:00:00 до 24:00:00

**Типы данных: прочие**

- `boolean` — булево значение, true или false
- `jsonb` — данные произвольного формата в формате JSON
  {
  'name':'value',
  ...
  }


## SQL: создание пользователя СУБД

```sql
CREATE USER test_user WITH PASSWORD 'password';
```
Пользователь создаётся именно в СУБД!

## SQL: создание базы данных

```sql
CREATE DATABASE test_db OWNER test_user
```

Любая база должна быть создана, прежде чем к ней можно будет подключиться.
Пользователь, указанный как owner, будет иметь максимальные права доступа к этой базе данных.

## SQL: права пользователя в БД

```sql
GRANT ALL PRIVILEGES ON DATABASE test_db TO test_user;
```

По умолчанию доступ к базе имеет только owner и супер-администратор СУБД. Всем остальным пользователям доступ нужно добавлять явным образом.

## SQL: удаление базы данных

```sql
DROP DATABASE test_db;
```

Удалить базу данных может её владелец, супер-администратор СУБД или пользователь, которому явным образом даны на это права.

## SQL: создание таблицы

```sql
CREATE TABLE students (
id serial PRIMARY KEY, name varchar(80), age integer
);
```

# Data Manipulation Language

**DML** — подмножество языка SQL, предназначенное для создания, изменения и удаления данных в таблицах внутри базы данных. К нему относятся все команды, начинающиеся с `SELECT`, `INSERT`, `UPDATE` и `DELETE`.

(CRUD аббревиатура CREATE READ UPDATE DELETE)
C = INSERT
R = SELECT
U = UPDATE
D = DELETE

В целом SQL DML очень похожи среди разных баз данных, но иногда бывают серьезные отличия, поэтому всегда полезно сверяться с документацией по конкретной БД в случае проблем.

## SQL: добавление строк в таблицу

```sql
INSERT INTO students (name, age) VALUES
('Anna', 25),
('Maria', 23),
('Roman', 28);
```

Обратите внимание, что поле id существует в таблице, но указывать его значение не обязательно. Тип данных serial позволяет ему заполняться автоматически.

## SQL: извлечение данных

```sql
SELECT * FROM students;
SELECT name, age FROM students;
SELECT * FROM students WHERE age < 18;
SELECT * FROM students ORDER BY age ASC;
SELECT AVG(age) AS 'Средний возраст' FROM students;
```

С помощью `SELECT` можно не просто вытаскивать данные, но и проводить фильтрацию, сортировать и проводить несложные агрегации.

## SQL: изменение данных

```sql
UPDATE students SET age = 26 WHERE name = 'Anna';
```

С помощью `UPDATE` можно изменять любые данные в таблице.
Использование `WHERE` не обязательно, хотя и крайне рекомендуется. Без `WHERE` будут обновлены все существующие строчки в таблице.

## SQL: удаление данных

```sql
DELETE FROM students WHERE id = 1;
```
Чаще всего удаление происходит по `id`, но можно удалять и по любому другому полю:

```sql
DELETE FROM students WHERE name = 'Anna';
```
Возможно использование DELETE вообще без WHERE, в таком случае будут удалены вообще все данные в таблице.


# Cвязывание таблиц, отношение между сущностями

## Primary и Foreign keys
**Primary key** (первичный ключ) в базах данных - это уникальный идентификатор каждой записи в таблице. Он используется для однозначного определения каждой строки таблицы и обеспечивает уникальность данных в этой таблице.
Характеристики primary key:
- уникальность
- неизменяемость
- not null - не может быть пустым

**Foreign key** (внешний ключ) в базах данных - это поле или набор полей в таблице, которые связаны с первичным ключом или уникальным ключом в другой таблице. Он используется для создания связей между таблицами и обеспечивает целостность данных в базе данных.

Характеристики foreign key:
- связь между таблицами
- гарантирует, что значения внешнего ключа должны существовать в соответствующем столбце первичного ключа или уникального ключа в другой таблице, на которую он указывает
    - обеспечивает связь и целостность данных в базе данных.
  
      Пример:
      CREATE TABLE Orders (
      OrderID INT PRIMARY KEY,
      CustomerID INT,
      OrderDate DATE,
      FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
      );

## Отношение 1 : 1
- Персоны (люди) и их паспортные данные
- Страна и ее столица
- приведите свой пример...

## Отношение 1 : N
- Компания и сотрудники
- Страны и города
- ... (свой пример)

## Отношение N : N
Отношение "многие ко многим" (M:N) в базах данных означает, что каждая запись в одной таблице может быть связана с несколькими записями в другой таблице, и наоборот. 
Для реализации такого отношения **требуется использование промежуточной таблицы**, которая соединяет записи обеих таблиц.
- студенты и курсы
- авторы и посты
- товары и заказы
- свой пример ...

## Оператор join
Предположим, у нас есть две таблицы: "Orders" и "Customers". Таблица "Orders" содержит информацию о заказах, а таблица "Customers" содержит информацию о клиентах. Допустим, мы хотим получить список всех заказов вместе с именами клиентов, сделавших эти заказы. Мы можем использовать оператор JOIN для объединения этих двух таблиц по их общему столбцу "CustomerID".
SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
Результатом будет список всех заказов вместе с именами клиентов, сделавших эти заказы. Каждая строка результата будет содержать ID заказа, дату заказа и имя клиента.

Создается ли при этом новая таблица?
Ответ: нет, создается **view**. Именно для этого и имеется оператор JOIN, чтобы не "плодить" таблицы.

Презентации:
- Занятие 1
  https://docs.google.com/presentation/d/1N9EdfzetGheLoXJEh1VgvzKGvnyiKsP4/edit#slide=id.p29

- Занятие 2
  https://docs.google.com/presentation/d/1fzZHuYstuUQWpUSYEOySYOht7xgIiF3_/edit#slide=id.g2bb3f954aca_0_170

## Операторы языка SQL

#### `=` равенство
#### `<` меньше
#### `>` больше
#### `<=` меньше или равно
#### `>=` больше или равно
#### `<>` не равно
#### `!=` не равно

#### `LIKE` проверяет соответствует ли значение определенному патерну(чувстивтельно к регистру)

#### `ILIKE` проверяет соответствует ли значение определенному патерну(без учета регистра)

#### `AND` логическое `и`

#### `OR` логическое `или`

#### `IN` проверяет находится ли значение внутури диапазона значений (равнозначно нескольким условиям)

#### `BETWEEN` проверяет находится ли значение внтури диапазона значений

#### `IS NULL` проверяет является ли значение NULL-ом

#### `NOT` в комбинации с другими операторам позволяет формулировать отрицательные условия `NOT LIKE`, `NOT IN`, `NOT BETWEEN`

## Aggregation - получение вычисленных данных (итоги, статистика, аналитика)

### Базовые операторы агрегации
- COUNT() расчет ко-ва строк
- AVG() расчет сред/ариф. знач.
- MAX() расчет макс. значения
- MIN() расчет мин. значения
- SUM() расчет суммы

### GROUP BY
Выводит данные сгруппированные по опредленному значению, например по стране.
```
  SELECT
  country,
  MIN(age) AS min_age
FROM
  farmer
GROUP BY
  country;
```
### HAVING
Если требуется задать уточнение после group by:
```sql
  SELECT
  country,
  COUNT(id)
FROM
  farmer
GROUP BY
  country
HAVING COUNT(id) >= 2;
```

## Ограничения (Constraints)

Типы данных — это способ ограничить тип данных, которые могут храниться в таблице. Однако для многих приложений ограничение, которое они обеспечивают, слишком грубое. Например, столбец, содержащий цену продукта, вероятно, должен принимать только положительные значения. Но не существует стандартного типа данных, который принимает только положительные числа. Другая проблема заключается в том, что вам может потребоваться ограничить данные столбца относительно других столбцов или строк. Например, в таблице, содержащей информацию о продукте, для каждого номера продукта должна быть только одна строка.

С этой целью SQL позволяет вам определять ограничения для столбцов и таблиц. Ограничения дают вам столько контроля над данными в ваших таблицах, сколько вы пожелаете. Если пользователь пытается сохранить данные в столбце, который нарушает ограничение, возникает ошибка. Это применимо, даже если значение получено из определения значения по умолчанию.

### CHECK

Check ограничение — это наиболее общий тип ограничения. Он позволяет указать, что значение в определенном столбце должно удовлетворять какому-то условию.
Иными словами, с помощью check мы можем `проверить` удовлетовряет ли значение условию.

В этом примере мы создадим таблицу, где цена может быть только положительной.

```sql
CREATE TABLE product (
    id serial,
    name text,
    price numeric CHECK (price > 0)
);
```

Вы также можете дать ограничению отдельное имя. Это проясняет сообщения об ошибках и позволяет вам обращаться к ограничению, когда вам нужно его изменить. Синтаксис:

```sql
CREATE TABLE product (
    id serial,
    name text,
    price numeric CONSTRAINT positive_price CHECK (price > 0)
);
```

Внутри ограничения check можно ссылаться на несколько полей:

```sql
CREATE TABLE product (
    id serial,
    name text,
    price numeric CHECK (price > 0),
    discounted_price numeric CHECK (discounted_price > 0),
    CHECK (price > discounted_price)
);
```

Пример альтернативного синтаксиса:

```sql
CREATE TABLE product (
    id serial,
    name text,
    price numeric,
    CHECK (price > 0),
    discounted_price numeric,
    CHECK (discounted_price > 0),
    CONSTRAINT valid_discount CHECK (price > discounted_price)
);
```

Следует отметить, что проверочное ограничение считается удовлетворенным, если проверочное выражение имеет значение `true` или `NULL`. Поскольку большинство выражений будут иметь значение `NULL`, если какой-либо операнд имеет нулевое значение, они не предотвратят появление нулевых значений в ограниченных столбцах. Чтобы гарантировать, что столбец не содержит нулевых значений, можно использовать ограничение not-null.

### NOT NULL

Показывает, что в столбце не может быть значения null.

```sql
CREATE TABLE product (
    serial integer NOT NULL,
    name text NOT NULL,
    price numeric
);
```

Возможно указать несколько ограничений для столбца, их просто следует перечислить одно после другого.

```sql
CREATE TABLE product (
    serial integer NOT NULL,
    name text NOT NULL,
    price numeric NOT NULL CHECK (price > 0)
);
```

### UNIQUE

Ограничение уникальности гарантирует, что данные, содержащиеся в столбце или группе столбцов, уникальны среди всех строк таблицы. Синтаксис:

```sql
CREATE TABLE product (
    id integer UNIQUE,
    name text,
    price numeric
);
```

Можно указать несколько свойств сразу:

```sql
CREATE TABLE example (
    a integer,
    b integer,
    c integer,
    UNIQUE (a, c)
);
```

Если есть желания поименовать ограничение - то синтаксис будет таким же, как обычно:

```sql
CREATE TABLE product (
    id serial,
    name text CONSTRAINT must_be_different UNIQUE,
    price numeric
)
```

В этом случае, если мы захотим добавить две строки с одинаковыми именами ошибка будет содержать указанное имя ограничения:

```sql
duplicate key value violates unique constraint "must_be_different"
```

### PRIMARY KEY

Ограничение первичного ключа указывает, что столбец или группа столбцов могут использоваться в качестве уникального идентификатора строк в таблице. Для этого необходимо, чтобы значения были уникальными и не были нулевыми. Итак, следующие два определения таблицы принимают одни и те же данные:

```sql
CREATE TABLE products (
    product_no integer PRIMARY KEY,
    name text,
    price numeric
);
```

Если несколько столбцов являются первичными ключами - синтаксис будет такой же, как в случае с unique:

```sql
CREATE TABLE example (
    a integer,
    b integer,
    c integer,
    PRIMARY KEY (a, c)
);
```

### FOREIGN KEY

Ограничение внешнего ключа указывает, что значения в столбце (или группе столбцов) должны соответствовать значениям, появляющимся в некоторой строке другой таблицы. Мы говорим, что это поддерживает ссылочную целостность между двумя связанными таблицами.

Допустим, у вас есть таблица продуктов, которую мы уже использовали несколько раз:

```sql
CREATE TABLE products (
    product_no integer PRIMARY KEY,
    name text,
    price numeric
);
```

Предположим также, что у вас есть таблица, в которой хранятся заказы на эти продукты. Мы хотим, чтобы таблица заказов содержала только заказы на действительно существующие товары. Поэтому мы определяем ограничение внешнего ключа в таблице заказов, которое ссылается на таблицу продуктов:

```sql
CREATE TABLE orders (
    order_id integer PRIMARY KEY,
    product_no integer REFERENCES products (product_no),
    quantity integer
);
```

Теперь невозможно создавать заказы с non-NULL product_no, которого бы не было ранее в таблице продуктов.

Мы говорим, что в этой ситуации таблица заказов является ссылаюшейся таблицей, а таблица продуктов — та на которую ссылаются. Аналогичным образом существуют ссылающиеся и ссылочные столбцы.

## ON DELETE CASCADE

ON DELETE CASCADE — это опция, которую можно использовать при определении ограничения внешнего ключа. Если указано ON DELETE CASCADE, Postgres автоматически удаляет любую строку в дочерней таблице, которая ссылается на удаленную строку из родительской таблицы.

```sql
CREATE TABLE products (
    product_no integer PRIMARY KEY,
    name text,
    price numeric
);

CREATE TABLE orders (
    order_id integer PRIMARY KEY,
    shipping_address text,
    ...
);

CREATE TABLE order_items (
    product_no integer REFERENCES products ON DELETE RESTRICT,
    order_id integer REFERENCES orders ON DELETE CASCADE,
    quantity integer,
    PRIMARY KEY (product_no, order_id)
);
```

Еще один пример:

```sql
INSERT INTO
  employees (name)
VALUES
  ('Alice'),
  ('Bob'),
  ('Carol'),
  ('David');

INSERT INTO
  departments (employee_id, department_name)
VALUES
  (1, 'Sales'),
  (2, 'Marketing'),
  (3, 'Accounting'),
  (1, 'Marketing');

DELETE FROM employees WHERE id = 1;
```

## Псевдонимы (alias) в SQL / Оператор AS

```sql
SELECT
        ProductName,
    Price AS Price_eur,
    Price * 1.1 AS Price_usd
FROM Products
```

```sql
SELECT *,
    Price * 1.1 AS Price_usd
FROM Products
```

```sql
SELECT *,
    Price * .95 AS Price_down
FROM Products
```
## Index
Индекс — это отдельная структура данных, которая ускоряет извлечение данных из таблицы за счет дополнительных операций записи и хранения для ее обслуживания.

Используйте оператор CREATE INDEX для создания индекса.

```sql
CREATE INDEX farmer_index ON farmer (height);
```