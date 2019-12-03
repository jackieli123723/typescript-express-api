// 单行注释 注意 ts 暴露 用 export 区别 cjs 
// export = sum  //yarn build:cjs 不报错 但是在 yarn dev 报错 
// export default sum 这样写 两种都不报错

const sum = (a: number, b: number) => a + b
export default sum