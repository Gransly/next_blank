# ws-ssr-cloud-blank-fe

## Что это
Болванка монорепы для серверного рендеринга

## Как начать разработку?
Lerna [скачает](https://github.com/lerna/lerna/tree/main/commands/bootstrap#readme) все зависимости и перенесет по пакетам
```bash
npm run bootstrap
```
## Build and Deploy
1. Скачиваем все зависимости
 ```bash 
 npm run bootstrap 
 ```
2. Билдим и диплоим проект
```bash 
lerna run --scope <имя пакета> deploy
 ```
#### Requirements
- Node 18 or newer 

## Redeploy
    TODO
При вызове lerna run --scope <имя пакета> deploy используемый порт будет занят, что вызовет ошибку


## Как добавить новый пакет в монорепозиторий?
[Создание](https://github.com/lerna/lerna/tree/main/commands/create#readme) нового пакета
```
lerna create <name>
```
[Импорт пакета](https://github.com/lerna/lerna/tree/main/commands/import#readme) из существующего репозитория
```
lerna import <path-to-external-repository>
```
#### Важно!
При добавлении нового пакета, необходимо добавить npm script deploy для билда и деплоя пакета.

