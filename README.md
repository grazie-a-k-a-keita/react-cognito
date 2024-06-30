## React × Cognito

`AWS Amplify` を使用せずに `React` × `Cognito` で認証機能の作成

- Username と Password による認証

### 経緯

Amplify の `ログイン UI` を使用せずに、ログイン画面を作成する

### 開発

```bash
# サーバー起動
$ bun dev
```

### Cognito の設定

1. ユーザープールの作成

![image](https://github.com/grazie-a-k-a-keita/react-cognito/assets/106722155/ff3d6d2d-8b3e-4260-8827-b6ea357726b3)

![image](https://github.com/grazie-a-k-a-keita/react-cognito/assets/106722155/17e3ee80-9554-48e7-b9ba-fb050e62db7c)

![image](https://github.com/grazie-a-k-a-keita/react-cognito/assets/106722155/2ba69024-849a-430f-b316-d4cd18d763db)

![image](https://github.com/grazie-a-k-a-keita/react-cognito/assets/106722155/19491345-f518-4698-b5ca-85e3b2d1aa2a)

![image](https://github.com/grazie-a-k-a-keita/react-cognito/assets/106722155/572fa6be-7899-4f53-b1ad-85b98562d1ba)

![image](https://github.com/grazie-a-k-a-keita/react-cognito/assets/106722155/e6577258-4a3f-4e7d-9ed3-47135161c984)

![image](https://github.com/grazie-a-k-a-keita/react-cognito/assets/106722155/705bd74c-8e98-4cee-82d3-0313a5eb33af)

![image](https://github.com/grazie-a-k-a-keita/react-cognito/assets/106722155/5f241d09-34c1-4cd1-a153-39ec430582c4)

![image](https://github.com/grazie-a-k-a-keita/react-cognito/assets/106722155/8f0ab409-ff12-4cf4-9351-07f3cf752a8d)

![image](https://github.com/grazie-a-k-a-keita/react-cognito/assets/106722155/ae71c1fc-583a-444b-9a1f-e30d3831ca79)

2. ユーザーを作成

```bash
# Cognito ユーザー作成
$ aws cognito-idp admin-create-user \
--profile xxxxxxxxxx \
--user-pool-id xxxxxxxxxx\
--username test \
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
$ aws cognito-idp admin-set-user-password \
--profile xxxxxxxxxx \
--user-pool-id xxxxxxxxxx \
--username test \
--password 123456 \
--permanent
```

### 参考サイト

[Amplify を使わず React で AWS Cognito 認証を使う](https://mseeeen.msen.jp/react-auth-with-ready-made-cognito/)

[Amplify SDK の Auth ライブラリ解説](https://zenn.dev/dove/articles/bb062581280b8d)

[AWS Cli で Cognito に CONFIRMED ユーザーを作成し、email を設定する](https://zenn.dev/longbridge/articles/56678cbb919d61)
