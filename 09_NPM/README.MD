# Node Package Manager (NPM)

## Install Package

```
npm install <package-name>
npm i <package-name>
npm add <package-name>
```

contoh install package lodash

```
npm install lodash
```

### Object dependencies

object dependencies merupakan object yang menampung package yang kita gunakan untuk membuat aplikasi.

### Object devDependencies

object devDependencies digunakan untuk package yang berkaitan hanya saat proses pengembangan aplikasi.

command install object devdependencies

```
npm install <package-name> --save-dev
```

kemudian terdapat file json baru yaitu package-lock.json yang berisi definisi package yang digunakan lebih spesifik.

## Use Package

Package yang digunakan adalah bersifat module. maka untuk menggunakan package tersebut dapat menuliskan kode seperti ini didalam class yang digunakan :

```
const variabelName = require('package-name');
```

misalkan kita akan menggunakan package lodash maka tambahkan kode berikut pada berkas index.js:

```
const _ = require('lodash');
```

penamaan menggunakan underscore(\_) sepertin diatas merupakan standar dari lodash yang perlu kita ikuti.

## Uninstall Package

Jika package berada pada object dependencies :

```
npm uninstall <package-name>
```

Jika package terdapat pada devDependencies:

```
npm uninstall <package-name> --save-dex
```

contoh :

```
npm uninstall lodash
```
