build:
	docker build -t greenfrontend/test-env:v1 .

push:
	docker push greenfrontend/test-env:v1
