if(process.env.DEV_ENV === 'true') {
  //开发环境用babel
  require('@babel/register')({
    extensions: ['.js', '.ts']
  })
  require('./src/app')
} else {
  //生产环境用 cjs 这样性能更优不需要内存编译 
  require('./lib/app')
} 

