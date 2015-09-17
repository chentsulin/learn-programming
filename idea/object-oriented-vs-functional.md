

## 物件導向 Object-oriented

```js
Number.prototype.add = function(another) {
  return this + another
}

(new Number(3)).add(7)
```

```
man.drive(car)
```

```
woman.recieve(money)
```

- 封裝，抽象化
- 易於思考

## 函數式 Functional

```js
function add(a, b) { return a + b }

add(3, 7)
```

- 容易把工作拆分
- 容易驗證
