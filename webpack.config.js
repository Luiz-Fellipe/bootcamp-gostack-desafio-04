const path = require('path');

module.exports = {
  //arquivo de entrada
  entry: path.resolve(__dirname, 'src', 'index.js'),
  
  //onde ele vai criar o bundle, ou seja o condigo transpilado pelo webpack
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  //hot reload
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },

  //regras , informamos ao webpack o que ele deve utilizar para transpilar os arquivos de acordo com o tipo dele.s
  module: {
    rules: [
      //quem vai lidar com arquivos js é o babel
      {
        //expressão regular que informa o tipo do arquivo
        test: /\.js$/,
        // a pasta node_modules não é transpilada
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /.*\.(gif|png|svg|jpe?g)$/i,
        use: { loader: 'file-loader'}
      }
    ]
  }
};  