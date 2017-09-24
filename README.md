# Introduction:

#### Why we need bable?

##### What is a transpiler?

A transpiler reads code written in one language and produces the equivalent code in another.

##### Why do we need transpiler?

- Browser only currently have widespread support of older JS
- transpiler convert advanced Typescript and coffescript code back into the original JS

##### Babel

- Transpiles es6 back into the supported pre-es6 JS

###### The benefits of webpack

- it bundles modules into one.js file
- comes with a dev-server

### Setting up Webpack

- npm init -y
- npm install --save-dev webpack
- Lalu membuat file webpack.config.js
    - A config file (https://webpack.github.io/docs/tutorials/getting-started/#config-file)
    - di file package.json "test" => "build"
    - untuk path: (path: path.resolve(__dirname, './build')), tambahkan const path
    - lalu 'npm run build' => untuk menjalankan
- Kesimpulan setting:
    - Semua file akan menjadi satu di bundle.js
    - index.js tidak akan berubah bila tidak di run kembali