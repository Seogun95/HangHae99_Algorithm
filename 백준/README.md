# Beakjoon 입력 템플릿

![](baekjun.png)

## 1. 입력값 받기

값들은 텍스트 파일 형태로도 주어진다. 우리는 이 파일을 fs 모듈로 받아야 한다. (입력 파일의 경로는
"/dev/stdin")

### 1-1. 한 줄로 입력

```javascript
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
```

### 1-2. 여러줄로 입력

```JavaScript
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
```
