## Задание

Отобразить подходящие данные из массива с учетом / без учета фильтра.

Реализация

1) Сделать DataService

Возвращает массив из ItemModel (id: number, name: string, type: string) и заполнить его 10 элементами.

2) Сделать компонент "Фильтр"

Содержит 2 поля (name, type, кнопка "Искать").
При нажатии на кнопку "Искать" передавать данные из полей в другой компонент через роутинг.

3) Второй компонент "Результат"

Принимать значения из роута.
Получить данные из сервиса.
При использовании RxJs осуществить фильтрацию данных по "И" (поиск по вхождению в значение).
Отображает результат фильтрации (можно использовать любой UI-фреймворк для упрощения).

Использование простых переменных (кроме хранения фильтра) нежелательно. 
В идеале все реализовать с использованием RxJs цепочек / подписок / async-pipe.
