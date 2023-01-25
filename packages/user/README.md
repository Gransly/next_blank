# Пример пакета Next.js

## Начало работы

Запуск dev сервера
```bash
npm run dev
```
Адресс dev сервера [http://localhost:3000](http://localhost:3000)

## Документация

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Build and Deploy
1. Перед билдом необходимо скачать все зависимости из главного корня проекта
```bash
npm run bootstrap
```
Команду запускаем из директории ws-ssr-cloud-blank-fe
2. Далее необходимо сбилдить next в папку .next (Папка билда настраиваеться в next.config.js)
```bash
npm run build
```
Команду запускаем из директории user
3. Запускаем наш билд и вы вилеколепны
```bash
npm run start
```
Команду запускаем из директории user

## ESlint
Для проверки Eslint пакета next воодим команду 
```bash
npm run lint
```
Команду запускаем из директории user