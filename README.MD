```shell
  yarn add text-master-pro
  or
  npm install text-master-pro
```

```ts
import {textMaster} from 'add text-master-pro'


console.log(
  textMaster("xin chào việt nam, @@@@@#####,8958495894").uses([
    "removeVietnameseDiacritics",
    "removeNumber",
    "removeSpace",
    "removeSpecialCharacters",
  ])
);

// outpu-> xinchaovietnam

```