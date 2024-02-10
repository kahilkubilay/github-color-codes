# github-color-codes

 ![github-color-codes logo](/public/colorful-github-logo.png)

color codes for languages ​​on Github

### install

npm i colorful-github

### usage 

###### Vue
```js
import { getByLabel } from 'colorful-github1'
const { label, color } = getByLabel('typescript')

console.info('label:', label, 'color:', color)
```

### attributes

| function | parameter |  describe | 
| ----------- | ----------- | ----------- |
| getByLabel | label: string | Returns the object with a color that matches the value entered as a parameter. |
| getLabelsByColorCode | code: string | Returns labels that match the value entered as parameters as objects. |

### Sample Code
