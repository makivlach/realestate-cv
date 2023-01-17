build: export COMPOSE_DOCKER_CLI_BUILD=1
build: export DOCKER_BUILDKIT=1
build: export NPMRC=${HOME}/.npmrc
build:
	docker build -t cv --progress=plain --file .docker/frontend/Dockerfile .
