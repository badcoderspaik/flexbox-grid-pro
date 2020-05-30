##Введение
Flexbox Grid Pro - это богатая модульная сеточная система для создания адаптивных, отзывчивых макетов. Сетка доступна в
двух вариантах - как набор множества предопределенных html-классов и как набор большого количества sass-миксинов. То есть
вы можете либо в html-разметке проставить нужным элементам небходимые классы, либо же в вашем sass-коде в селекторах 
подключить необходимые миксины, как показано ниже. Оба варианта равнозначны и дают аналогичные результаты. Каким из них 
воспользоваться - лишь вопрос ваших предпочтений:

Библиотека содержит следующие разделы css-классов и соответствующих миксинов:
  - Выравнивание
  - Направление расположения ячеек в сетке
  - Смещение колонок
  - Упорядочивание ячеек
  - Скрытие и отображение элементов

Система сеток Flexbox Grid Pro использует контейнеры, строки и столбцы для размещения и выравнивания содержимого. Она
основана на [flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flex) и полностью отзывычива и адаптивна.
Для того чтобы создать адаптивную сетку, нужно в разметку добавить элемент контейнера <span class='inline-snippet'>container</span>, 
содержащий элементы строк <span class='inline-scripts'>row</span> с необходимым количеством столбцов внутри. В примере 
ниже представлена сетка, состоящая из трёх строк <span class='inline-snippet'>row</span>, каждая из которых в свою очередь 
содержит по три столбца <span class='inline-snippet'>col</span> одинаковой ширины:

##Выравнивание
Для вертикального и горизонтального выравнивания столбцов воспользуйтесь необходимыми классами или миксинами.

  ###Вертикальное
    Пример
    Сниппет
    
  ###Горизонтальное
    Пример
    Сниппеты

##Направление расположения столбцов
Чтобы задать направление расположения столбцов в строке, воспользуйтесь необходимыми классами или миксинами:

    Пример
    Сниппеты
    
##Упорядочивание столбцов
Для указания порядка расположения столбцов в строке воспользуйтесь нужными классами или миксинами:

    Пример
    Сниппеты
    
##Смещение столбцов
Для смещения столбцов и его направления используйте нужные классы или миксины:

    Пример
    Сниппеты
    
##Скрытие и отображение элементов
Чтобы скрыть или отобразить элементы сетки, воспользуйтесь предназначенными для этого классами или миксинами:

    Пример
    Сниппеты
    
##Обнуление внешних отступов у элементов строк и колонок
Чтобы обнулить внешние отступы у элементов строк и колонок, воспользуйтесь предназначенными для этого классами или миксинами:

    Пример
    Сниппеты
    
##Колоночные классы
По умолчанию сетка состоит из двенадцати столбцов и соответственно содержит двенадцать колоночных классов:
- <span class='inline-script'>col-1</span>
- <span class='inline-script'>col-2</span>
- <span class='inline-script'>col-3</span>
- <span class='inline-script'>col-4</span>
- <span class='inline-script'>col-5</span>
- <span class='inline-script'>col-6</span>
- <span class='inline-script'>col-7</span>
- <span class='inline-script'>col-8</span>
- <span class='inline-script'>col-9</span>
- <span class='inline-script'>col-10</span>
- <span class='inline-script'>col-11</span>
- <span class='inline-script'>col-12</span>
    
##Контрольные точки ( breakpointns )
По умолчанию система использует восемь предопределенных контрольных точек в стиле desktop-first:

| Контрольная точка | Размер вьюпорта |
|-------------------|-----------------|
| desktop           | 1280px          |
| laptop            | 1024px          |
| laptop-md         | 960px           |
| tablet-landscape  | 768px           |
| phone-landscape   | 640px           |
| phone             | 480px           |
| phone-md          | 360px           |
| phone-sm          | 320px           |

##"Отзывчивые" колоночные классы
Исходя из предопределенного числа используемых в сетке столбцов и названий контрольных точек ( по умолчанию ) система
включает набор "отзывчивых" колоночных классов:
- <span class='inline-script'>col-desktop-1</span> - <span class='inline-script'>col-desktop-12</span>
- <span class='inline-script'>col-laptop-1</span> - <span class='inline-script'>col-laptop-12</span>
- <span class='inline-script'>col-laptop-md-1</span> - <span class='inline-script'>col-laptop-md-12</span>
- <span class='inline-script'>col-tablet-landscape-1</span> - <span class='inline-script'>col-tablet-landscape-12</span>
- <span class='inline-script'>col-phone-landscape-1</span> - <span class='inline-script'>col-phone-landscape-12</span>
- <span class='inline-script'>col-phone-1</span> - <span class='inline-script'>col-phone-12</span>
- <span class='inline-script'>col-phone-md-1</span> - <span class='inline-script'>col-phone-md-12</span>
- <span class='inline-script'>col-phone-sm-1</span> - <span class='inline-script'>col-phone-sm-12</span>

##Кастомизация сетки
Наряду с готовым css-файлом библиотека доступна в виде исходных файлов Sass. При этом доступен как sass-, так и 
scss-синтаксис. При использовании Sass у вас есть возможность использовать набор готовых переменных и миксинов для 
кастомизации сетки и её гибкой настройки. Все предопределённые классы сетки используют те же переменные и миксины для
предоставления целого набора готовых к использованию класоов для быстрого создания адаптивных макетов.

###Переменные
Переменные и карты определяют ширину контейнера сетки и его внутренние горизонтальные отступы, количество столбцов и 
расстояние между ними по горизонтали и вертикали, контрольные точки для медиазапросов, а также части библиотеки, которые
будут включены в сформированный css-файл. Они используются для генерации заданных классов сетки, а также для миксинов, 
использованных в примерах выше.

###Миксины
В директории <span class='inline-snippet'>grid/mixins/</span> содержатся миксины, которые используются вместе с переменными 
сетки для генерации css. Все генерируемые классы библиотеки используют эти же миксины.

###Исходные файлы Sass
#### Сетка
В файле <span class='inline-snippet'>grid/grid.scss</span> содержатся все переменные и настройки сетки, которые вы можете
переопределить:

    snippet
    
Для того чтобы переопределить переменные по умолчанию, задайте им свои значения перед импортом основного
файла библиотеки <span class='inline-snippet'>grid/grid.scss</span>:

    snippet
    
- <span class='inline-snippet'>container-width</span> - ширина контейнера сетки
- <span class='inline-snippet'>container</span>       - внутренние отступы контейнера
- <span class='inline-snippet'>h-gutter</span>        - расстояние между колонками сетки по горизонтали
- <span class='inline-snippet'>v-gutter</span>        - расстояние между колонками сетки по вертикали
- <span class='inline-snippet'>columns</span>         - количество колонок сетки
- <span class='inline-snippet'>mobile-first</span>    - булев флаг, указывающий, какой подход будет использован при 
формировании медиазапросов - mobile first или desktop first

- <span class='inline-snippet'>media-query</span>     - переменная принимает одно из двух значений - min или max. Какое 
значение примет переменная, зависит от значения переменной mobile-first. Эта переменная служит для определения того, по 
какому принципу будут сформированы медиазапросы сетки - mobile first или desktop first.

- <span class='inline-snippet'>grid-breakpoints</span> - карта контрольных точек ( breakpoints ) сетки. По умолчанию 
доступно восемь контрольных точек. Карта используется миксинами системы, а также частями библиотеки 
<span class='inline-snippet'>grid/partials</span>, отвечающими за генерацию \"отзывчивых\" колоночных и иных классов. 
Например, исходя из имен ключей карты и их значений в собранном конечном css-файле библиотеки будут сгенерированы одни из 
следующих класоов и правил медиазапросов:

  - Количество колонок в строке при той или иной ширине вьюпорта - <span class='inline-snippet'>col-desktop-5</span>,
  <span class='inline-snippet'>col-laptop-2</span>, <span class='inline-snippet'>col-tablet-landscape-3</span>, 
  <span class='inline-snippet'>col-phone-md-12</span> и т.д.
  
        snippet
        
  - выравнивание: <span class='inline-snippet'>justify-content-desktop-start</span>, 
  <span class='inline-snippet'>justify-content-desktop-center</span>, <span class='inline-snippet'>justify-content-laptop-end</span>
   и т.д.
  
        snippet
      
  - направление расположения колонок в строке: <span class='inline-snippet'>direction-desktop-column</span>, 
  <span class='inline-snippet'>direction-desktop-row-reverse</span>, <span class='inline-snippet'>direction-laptop-column</span>,
  <span class='inline-snippet'>direction-laptop-row-reverse</span> и т.д.
  
        snippet
        
  - смещение колонок в строке: <span class='inline-snippet'>offset-desktop-right-2</span>, 
  <span class='inline-snippet'>offset-laptop-left-4</span>, <span class='inline-snippet'>offset-tablet-landscape-left-9</span>, 
  <span class='inline-snippet'>offset-phone-left-11</span> и т.д.
  
        snippet
        
  - упорядочивание колонок в строке: <span class='inline-snippet'>order-desktop-1</span>, 
  <span class='inline-snippet'>order-laptop-3</span>, <span class='inline-snippet'>order-laptop-md-5</span>, 
  <span class='inline-snippet'>order-phone-first</span>, <span class='inline-snippet'>order-phone-sm-last</span>
  и т.д.
  
        snippet
  
  - скрытие элементов сетки при той или иной ширине вьюпорта: <span class='inline-snippet'>hide-desktop</span>, 
  <span class='inline-snippet'>hide-laptop</span>, <span class='inline-snippet'>hide-tablet-landscape</span>, 
  <span class='inline-snippet'>hide-phone-sm </span> и т.д.
  
        snippet
        
  - отображение элементов сетки при той или иной ширине вьюпорта: <span class='inline-snippet'>show-desktop</span>, 
  <span class='inline-snippet'>show-laptop</span>, <span class='inline-snippet'>show-tablet-landscape</span>, 
  <span class='inline-snippet'>show-phone-md</span> и т.д.
  
        snippet
        
  Допустим есть шесть элементов, которые по умолчанию занимают по два столбца каждый, но при ширине вьюпорта в 
  1280px и меньше элементы будут занимать по три столбца, при ширине вьюпорта 960px и меньше - по четыре, при 768px и 
  меньше - по три столбца, при 640px и меньше - по 2 столбца и при ширине в 320px и меньше - по 12 столбцов каждый. 
  Для этого необходимо написать следующий код:
  
        snippet
        
  Также, как и другие переменные по умолчанию, вы можете переопределить значение переменной 
  <span class='inline-snippet'>grid-breakpoints</span>, задав для контрольных точек более традиционные названия и размеры вьюпорта:
  
        snippet
        
  Это сгенерирует классы вида <span class='inline-snippet'>col-lg-12</span>, <span class='inline-snippet'>col-md-4</span>, 
  <span class='inline-snippet'>justify-content-sm-center</span>, <span class='inline-snippet'>offset-xs-2</span>, order-lg-9, 
  <span class='inline-snippet'>direction-sm-column</span>, <span class='inline-snippet'>hide-sm</span>, 
  <span class='inline-snippet'>show-xs</span> и т.д.
  
- <span class='inline-snippet'>partials</span> - содержит список частей библиотеки, отвечающих за генерацию категорий 
классов и медиазапросов. С целью уменьшения сформированного css-файла библиотеки вы можете переопределить список, 
оставив лишь те элементы, названия которых соответствуют тем частям библиотеки, классы которых вы не будете использовать. 
Ниже ещё будет сказано, какие части за что отвечают. Либо же, если вместо расстановки классов на элементах в разметке для
построения сетки вы предпочитаете использовать Sass и предопределенные миксины, вы можете присвоить переменной 
<span class='inline-script'>partials</span> значение <span class='inline-script'>false</span> 
( не <span class='inline-script'>null</span> ) или любое другое \"не null\" значение. 
    
      snippet
    
  Это предотвратит генерацию большого количества готовых классов, что позволит значительно уменьшить размер конечного 
  css-файла библиотеки.
  
####Части
В директории <span class='inline-snippet'>grid/partials/</span> содержатся части библиотеки, генерирующие различные наборы класоов, 
отвечающие за тот или иной аспект библиотеки.

#####Выравнивание
Файл <span class='inline-snippet'>grid/partials/alignment.scss</span> содержит код, генерирующий классы, отвечающие за 
выравнивание колонок внутри строки

#####Расположение колонок в строке
Файл <span class='inline-snippet'>grid/partials/direction.scss</span> содержит код, генерирующий классы, отвечающие за 
направление главной оси, вдоль которой выстраиваются столбцы внутри строки.

#####Смещение колонок
Файл <span class='inline-snippet'>grid/partials/offset.scss</span> содержит код, генерирующий классы, отвечающие за 
смещение колонок внутри строки.

#####Упорядочивание колонок
Файл <span class='inline-snippet'>grid/partials/ordering.scss</span> содержит код, генерирующий классы, отвечающие за
порядок расположения колонок внутри строки.

#####Скрытие элементов
Файл <span class='inline-snippet'>grid/partials/hide.scss</span> содержит код, генерирующий классы, отвечающие за 
скрытие элементов.

#####Отображение элементов
Файл <span class='inline-snippet'>grid/partials/visible.scss</span> содержит код, генерирующий классы, отвечающие за
отображение элементов.

#####Обнуление внешних отступов у элементов строк и колонок
Файл <span class='inline-snippet'>grid/partials/gutters.scss</span> содержит код, генерирующий классы, отвечающие за 
обнуление внешних марджинов у элементов строк и колонок.

####Базовая инициализация
Файл <span class='inline-snippet'>grid/base.scss</span> содержит код, генерирующий базовые классы сетки.
