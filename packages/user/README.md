# Пример пакета Next.js

## Начало работы

Запуск dev сервера
```bash
npm run dev
```
Адресс dev сервера [http://localhost:3000](http://localhost:3000)

## Env variables
- .env.development - конфиги для локального dev сервера
- .env.production  - конфиги для production сервера

### Важно
Базовые env переменные не доступны в браузере по умолчанию в угоду безопастности, для этого в названия переменой необходимо добавить NEXT_PUBLIC_ пример:
```
NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
```
Такая переменная будет подхватываться браузе и видна в бандле.

## ESlint
Для проверки Eslint пакета next воодим команду 
```bash
npm run lint
```
Команду запускаем из директории user