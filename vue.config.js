module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/le-demo/" : "/",
  css: {
    loaderOptions: {
      less:{
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {
          
        }
      }
    }
  }
}
  
