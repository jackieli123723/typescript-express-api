
### 打开 tsconfig.json 文件，找到 noImplicitAny，改为 false

```
$ yarn types
yarn run v1.10.1
$ tsc
error TS2468: Cannot find global value 'Promise'.
src/app-controller.ts(2,15): error TS7006: Parameter 'request' implicitly has an 'any' type.
src/app-controller.ts(2,32): error TS7006: Parameter 'response' implicitly has an 'any' type.
src/app-controller.ts(4,19): error TS2705: An async function or method in ES5/ES3 requires the 'Promise' constructor.  Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your `--lib` option.
src/app.ts(1,21): error TS7016: Could not find a declaration file for module 'express'. '' implicitly has an 'any' type.
  Try `npm install @types/express` if it exists or add a new declaration (.d.ts) file containing `declare module 'express';`
src/app.ts(7,14): error TS2705: An async function or method in ES5/ES3 requires the 'Promise' constructor.  Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your `--lib` option.
src/app.ts(7,21): error TS7006: Parameter 'req' implicitly has an 'any' type.
src/app.ts(7,26): error TS7006: Parameter 'res' implicitly has an 'any' type.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```

### 合并 配置 多个js 合并为一个



```

//合并 配置 多个js 合并为一个
// {
//   "compilerOptions": {
//     "module": "amd",
//     "removeComments": true,
//     "preserveConstEnums": true,
//     "noImplicitAny":false,
//     "outFile": "dist/all.js",
//     "sourceMap": true
//   },
//   "include": [
//     "src/*"
//   ],
//   "exclude": [
//     "node_modules"
//   ]
// }


```