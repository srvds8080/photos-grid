# Photos Grid
Клиент-серверное приложение позволяет нарисовать на сцене область и разместить на ней фоторамки по определенным правилам
> За основу взято вступительное задание в Школу Разработки Интерфейсов Академии Яндекса 

## Сервер на Express

* принимает POST с размерами поля, количеством фоторамок

    ``` typescript
    // POST data
    type TPayload: {
        n: number
        width: number
        height: number
    }

    type TPhoto = {
        width: number // Ширина каждой фоторамки
        height: number // Высота каждой фоторамки
        x: number // Положение крепления фоторамки по x относительно верхнего левого угла пространства на стене
        y: number // Положение крепления фоторамки по y относительно верхнего левого угла пространства на стене
    }

    response: {
        data: TPhoto[]
    }

    ```

    * фоторамки должны быть одинаковых размеров
    * симметричны по вертикали
    * нумерация слева направо, сверху вниз
    * неполный ряд всегда первый, выровнен по центру

## Клиент на ts и PIXI

* рисует сцену заданных размеров
* отправляет POST на сервер
* рисует фоторамки на сцене 
* доп: добавить интерактивности на рамках

## TODO
* Добавить форму для ввода количества фотографий
* Возможность отрисовать область курсором 
* Записать скринкаст с демонстрацией
