# 目的
- Next.jsとTypescriptの練習用プロジェクト

# ツールのゴール
- 各案件の情報管理
- メンバー管理

# ローカル環境構築手順
1. clone
    ```
    git clone https://github.com/codershisho/oga-milestone.git
    ```
1. docker build
    ```
    docker-compose build
    ```
1. docker up
    ```
    docker-compose up -d
    ```
1. docker exec
    ```
    docker-compose exec -u root frontend bash
    ```
1. cd
    ```
    cd oga-milestone
    ```
1. Next up
    ```
    yarn dev
    ```
1. 確認
    ```
    http://localhost:3000/
    ```

# makefile
```sh
sudo apt install make
sudo apt install make-guile
```
