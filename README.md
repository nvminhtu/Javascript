# ES6 - Tutorial List

ES6 là phiên bản mới nhất của bộ ECMAScript.
(tính đến thời điểm tháng 2 - 2017). Vì cần làm việc nhiều với Javascript, chính vì thế cùng xem và áp dụng những tính năng mới của ES6

# Một số câu hỏi
* Tôi cần gì để có thể chạy code ES6?
* Tôi cần có điều kiện cơ bản gì để học ES6?
* Tôi cần code ES6 bằng công cụ gì?
* Tôi có thể làm những ứng dụng gì với ES6?

# Tìm hiểu về ES6
### let/const:
ES6 bổ sung cách khai báo biến cục bộ (còn gọi là Block Scope Varialbes).
* Let khai báo biến trong block và không làm ảnh hưởng tới giá trị của biến trong block khác.
* Và dĩ nhiên let chỉ có giá trị cục bộ trong phạm vi block code mà ta đã sử dụng let để khai báo.
* Const dùng để khai báo các biến không thay đồi giá trị.

[Ví dụ về Let]

[Ví dụ về Const]

### Arrow:
Thực ra đây là 1 dạng viết tắt của function (giống bên JAVA, C# hoặc CoffeeScript).

```sh
(a,b) => a + b
```

```sh
(a,b) = {
  return a + b;
}
```

[Ví dụ về Arrow]

### Class
Hồi xưa javascript (ECMAScript 5) chưa hỗ trợ OOP, chúng ta phải mô tả các đối tượng thông qua function và prototype.
Giờ ES6 đã hỗ trợ, viết OOP ngon nhé!!!
[Ví dụ về Class]

### Enhanced Object Literals
### Exporting
Export dùng để làm gì trong ES6?
### Importing Modules
### Template String, Multiline Strings, Escaping Characters

* Template String

```sh
// Khởi tạo đơn giản 1 template string
`In JavaScript '\n' is a line-feed.`
```

```sh
// Multiline string, trong Javascript cũ thì cái này không hợp lệ
`In JavaScript this is
 not legal.`
```

```sh
// Sử dụng string với biến bên trong
var name = "Tu", time = "today";
`Hello ${name}, how are you ${time}?`
```

* Escaping Character
Khi sử dụng chúng ta ko cần quan tâm string chúng ta lẫn lộn dấu nháy đơn và nháy kép nữa

```sh
// ES5
var text = "Ôi viết dấu \"double quotes\" trong ES5 vất vả quá"

// ES6
let text = `ahihi viết dấu "nháy đôi" không cần quan tâm cú pháp nữa.`

```

```sh
// Multiline string,
// ES5: viết dài dòng và code dễ bị sai
var text = (
  'plane\n' +
  'train\n' +
  'bus'
)
var text = [
  'plane',
  'train',
  'bus'
].join('\n')

// ES6
var text = (
  `plane
  train
  bus`
)
```
### Tips & Tricks

### Editors

* [Sublime Text] - Light weight editor and easy to code and hightlight your work.
* [Atom] - Powerful code editor now with thoundsand of plugins.

### Todos



** Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Sublime Text]: <https://www.sublimetext.com/>
   [Atom]: <https://atom.io/>
