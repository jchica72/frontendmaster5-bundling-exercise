# 04 - Different environment variables in Production & Development Webpack modes

Configure different process.env.* variables.
In production will be set by server values:
 
 ```js
 new webpack.EnvironmentPlugin({
      MODE: 'production',
      DBNAME: null,
      DBSERVER: null
    })
  ```
  > Alternatively, the EnvironmentPlugin supports an object, which maps keys to their default values. The default value for a key is taken if the key is undefined in process.env.

