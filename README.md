
# STORE_API_01



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->



## Endpoints

* [Auth](#auth)
    1. [Register User](#1-register-user)
    1. [Login](#2-login)
    1. [Logout](#3-logout)
* [Products](#products)
    1. [Add Product](#1-add-product)
    1. [Get ALL Products](#2-get-all-products)
    1. [Get Product](#3-get-product)
    1. [Update Product](#4-update-product)
    1. [upload image](#5-upload-image)
    1. [Delete Product](#6-delete-product)
    1. [Get Single Products Review](#7-get-single-products-review)
* [Reviews](#reviews)
    1. [Create Review](#1-create-review)
    1. [Get All Review](#2-get-all-review)
    1. [Get SIngle Review](#3-get-single-review)
    1. [Update Review](#4-update-review)
    1. [Delete Review](#5-delete-review)
* [User](#user)
    1. [Get all user](#1-get-all-user)
    1. [get single user](#2-get-single-user)
    1. [Show current User](#3-show-current-user)
    1. [Update Password](#4-update-password)
    1. [Update User](#5-update-user)
* [Order](#order)
    1. [Create Order](#1-create-order)
    1. [Get All Order](#2-get-all-order)
    1. [Get Single Order](#3-get-single-order)
    1. [Update Order](#4-update-order)
    1. [ShowAllMyOrders](#5-showallmyorders)

--------



## Auth



### 1. Register User



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-m5x1.onrender.com/api/v1/auth/register
```



***Body:***

```js        
{
    "name":"Naruto",
    "email":"naruto@gmail.com",
    "password":"senpai"
}



```



### 2. Login



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-m5x1.onrender.com/api/v1/auth/login
```



***Body:***

```js        
{
    "email":"akuma@gmail.com",
    "password":"senpai"
}



```



### 3. Logout



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/auth/logout
```



## Products



### 1. Add Product



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-m5x1.onrender.com/api/v1/products
```



***Body:***

```js        
 {
           
            "name": "a first wooden table",
            "price": 23,
            "featured": true,
            "rating": 4.5,
            "company":"ikea"           
 }

```



### 2. Get ALL Products



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/products
```



### 3. Get Product



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/products/63a3434be97c4b6ee26a7202
```



### 4. Update Product



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-m5x1.onrender.com/api/v1/products/637dc82456f5dc394b037f8b
```



***Body:***

```js        
{
           "name": "a first wooden table",
            "price": 5000,
            "featured": true,
            "rating": 4.5,
            "company": "caressa"
}
```



### 5. upload image



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: https://e-commerce-m5x1.onrender.com/api/v1/products/upload
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| image |  |  |



### 6. Delete Product



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/products/637f1e07968a4b92456726ca
```



### 7. Get Single Products Review



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/products/63a3434be97c4b6ee26a7202/reviews
```



## Reviews



### 1. Create Review



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-m5x1.onrender.com/api/v1/review
```



***Body:***

```js        
{   
    "product":"63a3434be97c4b6ee26a7203",
    "rating":"3",
    "title":"good",
    "comment":"very good"

}
```



### 2. Get All Review



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/review
```



### 3. Get SIngle Review



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/review/639ebc857e2aed1b86bc4181
```



### 4. Update Review



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-m5x1.onrender.com/api/v1/review/63a32ebf711e42be046a6f96
```



***Body:***

```js        
{
    "rating":"2",
    "title":"Good",
    "comment":"very Good"
}
```



### 5. Delete Review



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/review/63a328b705a31585d43b05f1
```



## User



### 1. Get all user



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: https://e-commerce-m5x1.onrender.com/api/v1/user
```



***Body:***

```js        
{
    "email":"akuma1@gmail.com",
    "password":"senpai"
}




```



### 2. get single user



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/user/63960decf25d610bbd022c82
```



### 3. Show current User



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/user/showme
```



### 4. Update Password



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-m5x1.onrender.com/api/v1/user/updateUserPassword
```



***Body:***

```js        
{
    "oldpassword":"senpai",
    "newpassword":"akumasenpai"
}
```



### 5. Update User



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-m5x1.onrender.com/api/v1/user/updateuser
```



***Body:***

```js        
{
    "name":"Senpai",
    "email":"akuma@gmail.com"
}
```



## Order



### 1. Create Order



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-m5x1.onrender.com/api/v1/order
```



***Body:***

```js        
{
    "tax": 499,
    "shippingFee": 799,
    "items": [
        {
            "product": "63a5bf40c57687c2dc844763",
            "amount": 2
        },
        {
            "product": "63a5bf40c57687c2dc844766",
            "amount": 2
        }
    ] 
}
```



### 2. Get All Order



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/order
```



### 3. Get Single Order



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/order/63a72e9587306c2602b5d7f6
```



### 4. Update Order



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-m5x1.onrender.com/api/v1/order/63a5bf40c57687c2dc844766
```



***Body:***

```js        
{
    "amount":"6",
    "product":"63a72e9587306c2602b5d7f8"
}
```



### 5. ShowAllMyOrders



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-m5x1.onrender.com/api/v1/order/ShowAllMyOrders
```



---
[Back to top](#store_api_01)

>Generated at 2023-01-08 23:39:41 by [docgen](https://github.com/thedevsaddam/docgen)
