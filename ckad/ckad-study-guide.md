- [**Book**: Certified Kubernetes Application Developer (CKAD) Study Guide](#book-certified-kubernetes-application-developer-ckad-study-guide)
  - [**Chapter 4, Containers**](#chapter-4-containers)
  - [**Chapter 5, Pods and Namespaces**](#chapter-5-pods-and-namespaces)


<div id="questions-hide-answers" class="container hide-until-load">


# **Book**: [Certified Kubernetes Application Developer (CKAD) Study Guide](https://www.oreilly.com/library/view/certified-kubernetes-application/9781492083726/)

```go
git clone git@github.com:bmuschko/ckad-study-guide.git
```

## **Chapter 4, Containers**

* Navigate to the directory `app-a/ch04/containerized-java-app` of the checked-out GitHub repository `bmuschko/ckad-study-guide`. Inspect the Dockerfile.

```go
cd app-a/ch04/container/
cat Dockerfile
// EXPOSE 3000 in the Dockerfile
```

* Build the container image from the Dockerfile with the tag `nodejs-hello-world:1.0.0`.

```go
docker build . -t nodejs-hello-world:1.0.0
```

* Run a container with the container image. Make the application available on port 80.

```go
docker run --detach -p 80:3000 nodejs-hello-world:1.0.0
```

* Execute a curl or wget command against the application’s endpoint.

```go
curl localhost
curl localhost:80
```

* Retrieve the container logs.

```go
docker container ls
docker logs 1cb5802a231b
```


* Modify the Dockerfile from the previous exercise. Change the base image to the tag 20.4-alpine and the working directory to /node.

```Dockerfile
FROM node:20.4-alpine
WORKDIR /node
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
```

* Build the container image from the Dockerfile with the tag nodejs-hello-world:1.1.0. Ensure that container image has been created by listing it.

```go
docker build . -t nodejs-hello-world:1.1.0
// 0.996 npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/node/package.json'
// DOES NOT WORK :)
docker images
```

* Pull the container image alpine:3.18.2 available on Docker Hub.

```go
docker pull alpine:3.18.2
```

* Save the container image to the file alpine-3.18.2.tar.

```go
docker save -o alpine-3.18.2.tar alpine:3.18.2
```

* Delete the container image. Verify the container image is not listable anymore.

```go
docker image rm alpine:3.18.2
```

* Reinstate the container image from the file alpine-3.18.2.tar.

```go
docker load -i alpine-3.18.2.tar
```

* Verify that the container image can be listed.

```go
docker images alpine
```




## **Chapter 5, Pods and Namespaces**




</div>