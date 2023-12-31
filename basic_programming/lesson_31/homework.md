**Задание "Интернет-магазин"**

**Цель:** Применение основных принципов объектно-ориентированного программирования для создания базовой структуры интернет-магазина.

**1. Описание классов:**

1.1. **Product**
- *Поля*:
  - `id`: уникальный идентификатор продукта.
  - `name`: название продукта.
  - `price`: цена продукта.
  - `description`: описание продукта.
  
- *Методы*:
  - `displayInfo()`: отображение основной информации о продукте.
  - `applyDiscount(double percentage)`: применяет скидку к продукту по заданному проценту.

1.2. **Book (наследует Product)**
- *Дополнительные поля*:
  - `author`: автор книги.
  - `genre`: жанр книги.
  - `yearPublished`: год издания.
  
- *Методы*:
  - `displayInfo()`: переопределенный метод, который также показывает информацию о авторе, жанре и годе издания.

1.3. **Electronics (наследует Product)**
- *Дополнительные поля*:
  - `brand`: бренд электроники.
  - `warrantyPeriod`: гарантийный период (в месяцах).
  
- *Методы*:
  - `displayInfo()`: переопределенный метод, который также показывает информацию о бренде и гарантийном периоде.

1.4. **Cart**
- *Поля*:
  - `products`: список продуктов в корзине.
  
- *Методы*:
  - `addProduct(Product product)`: добавляет продукт в корзину.
  - `removeProduct(int id)`: удаляет продукт из корзины по идентификатору.
  - `calculateTotal()`: расчет общей стоимости товаров в корзине.
  - `displayCartContents()`: отображение содержимого корзины.

**2. Требования к выполнению:**
- Продемонстрируйте использование наследования (классы `Book` и `Electronics` наследуют `Product`).
- Используйте полиморфизм (переопределенные методы `displayInfo()`).
- Используйте инкапсуляцию (делайте поля закрытыми и предоставляйте доступ к ним через геттеры и сеттеры).
- Реализуйте тестовый класс, который демонстрирует создание различных продуктов, добавление их в корзину, применение скидок и расчет общей стоимости.
- Реализуйте возможность сортировки товаров в корзине по цене, названию или идентификатору.
