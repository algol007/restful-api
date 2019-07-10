# Spesifikasi

## Bahasa Domain 

## Role (Peran)
### 1. Role Admin
Admin adalah role untuk pemegang sistem historia.

### 2. Role Customer
Customer adalah role untuk pencari jasa.

### 3. Role Vendor
Vendor adalah role untuk penyedia jasa.


## Endpoints

### otentikasi /auth

#### POST /auth/login
Untuk mengotentikasi user, apakah terdaftar di sistem atau tidak. Semua user dengan role apa saja bisa menggunakan endpoint ini.

Contoh request:
```
POST /auth/login
Headers:
Content-Type: application/json

Body:
{
  "email": "johndoe@gmail.com",
  "password": "password"
}
```

Contoh Response:
```
{
  "authToken": "abc.def.123",
  "user": {
    "id": 1,
    "name": "John Doe",
    "role": "Vendor",
    "vendors": [
      {
        "id": 2,
        "name": "Katering ABC"
      }
    ]
  }
}
```

#### POST /auth/signup
Untuk user mendaftar

contoh request
```
POST /auth/signup

{
  "email": "an@email.com",
  "name": "John Doe",
  "phoneNumber": "085225575999",
  "accountType": "vendor" // possible values: "vendor", "customer"
}
```

### Vendor

#### GET /vendors
Ambil list vendor

query strings
- price_start (harga)
- price_end (harga)
- category (kategori)
- name (nama)
- rating (rating)
- limit = 2
- page = 1 // paginasi


GET /vendors?price_start=5000&price_end=10000

#### GET /vendors/:id
Ambil vendor berdasarkan id

#### POST /vendors
Create vendor 

#### PUT /vendors/:id
Update vendor 

#### DELETE /vendors/:id