**Задание: "Управление учётными записями пользователя без пользовательских исключений"**

Цель задания — создать программу для регистрации новых пользователей с проверкой корректности введённых данных, используя стандартные исключения.

**Требования к программе:**

1. Программа должна запрашивать у пользователя имя и пароль для создания новой учётной записи.
2. Имя пользователя не должно быть пустым, и пароль должен соответствовать следующим требованиям:
   - Не менее 8 символов.
   - Содержит хотя бы одну цифру.
   - Содержит хотя бы один специальный символ (например, !, @, #).
3. Программа должна проверять введённые данные и выдавать соответствующие сообщения об ошибках, используя стандартные исключения, такие как например `IllegalArgumentException`.
4. Если введённые данные корректны, программа должна сообщать о успешной регистрации.
5. Программа должна предоставить возможность повторного ввода данных при возникновении ошибок.
6. Программа должна завершаться по команде пользователя (например, вводом слова 'exit').

**Пример работы программы:**

	
	Введите имя пользователя или 'exit' для выхода: 
	user123
	Введите пароль: 
	pass
	Ошибка: Пароль должен быть не менее 8 символов и содержать хотя бы одну цифру и один специальный 	символ.

	Введите имя пользователя или 'exit' для выхода: 
	user123
	Введите пароль: 
	password!2
	Учётная запись успешно создана.
	

**Примечания к реализации:**

- Используйте методы класса `String`, такие как `contains`, `length` и другие, для проверки условий пароля.
