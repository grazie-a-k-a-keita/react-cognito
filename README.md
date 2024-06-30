## React × Cognito

`AWS Amplify` を使用せずに `React` × `Cognito` で認証機能の作成

- Username と Password による認証

### 経緯

Amplify の `ログイン UI` を使用せずに、ログイン画面を作成する

### Cognito の設定

1. ユーザープールの作成

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-4.png)

![alt text](image-5.png)

![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-8.png)

![alt text](image-9.png)

2. ユーザーを作成

```bash
# Cognito ユーザー作成
aws cognito-idp admin-create-user `
--profile xxxxxxxxxx `
--user-pool-id xxxxxxxxxx`
--username test `
--message-action SUPPRESS

# {
#   "User": {
#     "Username": "test",
#     "Attributes": [
#       {
#         "Name": "sub",
#         "Value": "b7147a08-20f1-704f-8784-87a67bf9c414"
#       }
#     ],
#     "UserCreateDate": "2024-06-30T12:26:22.396000+09:00",
#     "UserLastModifiedDate": "2024-06-30T12:26:22.396000+09:00",
#     "Enabled": true,
#     "UserStatus": "FORCE_CHANGE_PASSWORD"
#   }
# }


# Cognito ユーザーのステータスを「CONFIRMED」にする
aws cognito-idp admin-set-user-password `
--profile xxxxxxxxxx `
--user-pool-id xxxxxxxxxx `
--username test `
--password 123456 `
--permanent
```

### 参考サイト

[Amplify を使わず React で AWS Cognito 認証を使う](https://mseeeen.msen.jp/react-auth-with-ready-made-cognito/)

[Amplify SDK の Auth ライブラリ解説](https://zenn.dev/dove/articles/bb062581280b8d)

[AWS Cli で Cognito に CONFIRMED ユーザーを作成し、email を設定する](https://zenn.dev/longbridge/articles/56678cbb919d61)
