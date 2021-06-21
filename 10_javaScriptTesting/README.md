# JavaScript Testing

Sebelum sebuah program dipublikasikan, seharusnya sebuah program harus melalui tahap pengujian terlebih dahulu. Proses pengujian tersebut digunakan untuk melakukan kontrol kualitas kode yang kita tulis, memastikan bahwa software yang akan dipublikasikan ke pengguna minim adanya kecatatan atau bugs.

Sebuah proses pengujian perangkat lunak dapat dilakukan secara:

- Manual  
  Proses pengujian secara manual oleh seorang yang ditunjuk sebagai teset, atau sebagian pengguna yang memang mendapatkan akses untuk pengujian pra-release. Proses ini biasanya berkaitan dengan usability, accessibility dari sebuah aplikasi.
- Otomatis  
  Proses pengujian secara otomatis dilakukan oleh komputer dengna menuliskan script khusus, biasanya dilakukan oleh software engineer langsung ataupun oleh seorang QA Engineer. Proses ini biasanya berkaitan dengan fungsionalitas dari sebuah aplikasi.

## Jenis-jenis pengujian :

- Static Test  
  Memastikan tidak adanya typo (naming convention yang standar) dan memastikan tidak ada error types.
- Unit Test  
  Dilakukan untuk memastikan bahwa setiap unit kode yang kita tulis sudah bisa berkerja sesuai harapan. Unit adalah komponen terkecil yang dapat diuji secara terisolasi dalam menggunakan perangkat lunak.
- Integration Test  
  Memastikan beberapa serangkaian fungsi yang saling ketergantungan satu sama lain berjalan semestinya.
- End-to-End Test  
  Proses pengujian sebuah aplikasi untuk menguji flow dari awal hingga akhir, Layaknya seorang user saat menggunakan aplikasi.

## Proses pengujian :

1. Apa yang ingin diuji ? -> misalkan uji pada fungsi **menghitung rata-rata nilai siswa** atau pengujian pada proses **proses registrasi akun**.
2. Ekspetasi apa yang diharapkan?
   - Kasus **menghitung rata-rata nilai siswa** :
     - menghasilkan output perhitungan yang sesuai berdasarkan input yang diberikan.
     - input harus berupa angka
   - Kasus **proses registrasi akun** :
     - Pengguna dapat melakukan registrasi secara normal.
     - Pengguna dengna email sama tidak dapat melakukan registrasi.

# Jest

[jest cheat sheet](https://devhints.io/jest)
Jest merupakan salah satu framework testing paling populer untuk menuliskan kode pengujian pada bahasa pemrograman JS. Jest dapat digunaskan untuk menuliskan script testing pada aplikasi backend maupun frontend.

## Practice a test

```
test(‘deskripsi dari testcase kamu’, () => {
    expect(perintah).matcher(nilai yang diekspektasikan);
});

// contoh
test(‘dua tambah dua adalah empat’, () => {
    expect(2+2).toBe(4);
});
```

**expect(2+2)** merupakan segmen yang berisi perintah yang menghasilkan nilai balikan, perintah tersebtu dapat berupa fungsi ataupun perintah langsung.

**toBe(4)** disebuh matcher, berisi nilai yang diharapkan dari sebuah perintah yang dilakukan sebelumnya.

- **toBe(x)** : bahwa nilai ekspetasi yang diharapkan adalah x.
- **toEqual(x)** : bahwa nilai ekspetasi yang diharapkan sama adalah x.
- **toBeNull()** : bahwa nilai ekspetasi yang diharapkan sama adalah null.
- **toBeTruthy()** : bahwa nilai ekspetasi yang diharapkan sama adalah turth.
- **toBeFalsy()** : bahwa nilai ekspetasi yang diharapkan sama adalah false.

```
describe(‘pengujian olah aritmatika’, () => {
   test(‘#1 dua tambah dua adalah empat’, () => {
        expect(2+2).toBe(4);
   });

   test(‘#2 dua kali tiga adalah enam, () => {
        expect(2*3).toBe(6);
   });
});
```

Simpan file eksekusi test pada filer `__test__`.  
Kemudian buat file test dengan nama file `<file-name>.test.js`.
