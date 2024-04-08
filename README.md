## Установка

Поднимаем контейнеры

```sh
docker compose up -d
```

Для работы с phpMyAdmin на локалке пропишем дополнительный параметр в config.inc.php

```sh
docker ps
docker exec -it <id-контейнера> /bin/bash

apt-get update
apt-get install -y nano
cp config.sample.inc.php config.inc.php
nano config.inc.php
```

В конец файла добавляем

> $cfg['PmaNoRelation_DisableWarning'] = true;

Выходим из контейнера и перезапускаем

```sh
exit

docker compose down -v
docker compose up -d
```
