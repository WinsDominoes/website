# Docker Installation / Build

## Run
```bash
docker container run -p 3000:3000 git.winscloud.net/winsdominoes/personal_website:latest
```

## Compose
### compose.yml
```yaml
version: '3'

services:
  personal-website:
    image: git.winscloud.net/winsdominoes/personal-website:latest
    container_name: personal-website
    hostname: personal-website
    restart: always
    ports:
      - "3000:3000"
```
### Running
```bash
docker-compose up -d
```

### Updating
```bash
docker-compose pull && docker-compose up -d
```

## Publishing to container registry
```bash
docker login git.example.com
docker build -t git.example.com/{owner}/personal-website:latest .
docker push git.example.com/{owner}/personal-website:latest
```

## Credits
[Forejo Documentation | Container Registry - https://forgejo.org/docs/latest/user/packages/container/](https://forgejo.org/docs/latest/user/packages/container/)