Удаление элементов из списка во время итерации может быть довольно хитрой задачей. Если вы пытаетесь удалить элемент из списка во время итерации через обычный цикл `for` или усовершенствованный цикл `for-each`, это может привести к ошибке `ConcurrentModificationException`. 

Поэтому, когда вы хотите модифицировать список во время итерации, рекомендуется использовать `Iterator`.

Вот пример использования `Iterator` для удаления элементов из `ArrayList`:


import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("A");
        list.add("B");
        list.add("C");
        
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            String item = iterator.next();
            if ("B".equals(item)) {
                iterator.remove();
            }
        }
        
        System.out.println(list); // Выводит: [A, C]
    }
}


В этом примере мы использовали итератор для прохода по списку. Когда мы находим элемент, который хотим удалить (в данном случае "B"), мы используем метод `remove()` итератора. Это безопасный способ удаления элементов из списка во время итерации.

Если же вы попробуете использовать метод `remove()` списка во время итерации через цикл `for-each`, вы столкнетесь с ошибкой `ConcurrentModificationException`, так как коллекция модифицирована во время итерации.