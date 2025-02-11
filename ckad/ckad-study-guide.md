- [**Book**: Certified Kubernetes Application Developer (CKAD) Study Guide](#book-certified-kubernetes-application-developer-ckad-study-guide)
  - [**Chapter 4, Containers**](#chapter-4-containers)
  - [**Chapter 5, Pods and Namespaces**](#chapter-5-pods-and-namespaces)
  - [**Chapter 6, Jobs and CronJobs**](#chapter-6-jobs-and-cronjobs)


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

* Create a new Pod named nginx running the image nginx:1.17.10. Expose the container port 80. The Pod should live in the namespace named ckad.

```go
kubectl create ns ckad
kubectl run nginx --image=nginx:1.17.10 --port=80 --namespace=ckad
```

* Get the details of the Pod including its IP address.

```go
kubectl get pod nginx -o wide -n ckad
kubectl describe pod nginx -n ckad | grep IP
```

* Create a temporary Pod that uses the busybox:1.36.1 image to execute a wget command inside of the container. The wget command should access the endpoint exposed by the nginx container. You should see the HTML response body rendered in the terminal.

```go
kubectl run tmp --image=busybox:1.36.1 --restart=Never --rm -it -n ckad -- wget 10.244.0.135
```

* Get the logs of the nginx container.

```go
kubectl logs nginx -n ckad
```

* Add the environment variables DB_URL=postgresql://mydb:5432 and DB_USERNAME=admin to the container of the nginx Pod.

```go
kubectl delete pod nginx -n ckad
kubectl run nginx --image=nginx:1.17.10 --port=80 --namespace=ckad  \
--env="DB_URL=postgresql://mydb:5432" --env="DB_USERNAME=admin"
```

* Open a shell for the nginx container and inspect the contents of the current directory ls -l. Exit out of the container.

```go
kubectl exec -it nginx -n ckad -- /bin/sh
// ls -l
```


* Create a YAML manifest for a Pod named loop that runs the busybox:1.36.1 image in a container. The container should run the following command: for i in {1..10}; do echo "Welcome $i times"; done.

```go
kubectl run loop --image=busybox:1.36.1 --restart=Never --dry-run=client -o yaml > loop.yaml -- /bin/sh -c 'for i in 1 2 3 4 5 6 7 8 9 10; do echo "Welcome $i times"; done'
```

* Create the Pod from the YAML manifest. What’s the status of the Pod?

```go
kubectl apply -f loop.yaml
```

* Edit the Pod named loop. Change the command to run in an endless loop. Each iteration should echo the current date.

```go
kubectl delete pod loop
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    run: loop
  name: loop
spec:
  containers:
    - args:
        - /bin/sh
        - -c
        - while true; do date; sleep 10; done
      image: busybox:1.36.1
      name: loop
      resources: {}
  dnsPolicy: ClusterFirst
  restartPolicy: Never
status: {}
```


* Inspect the events and the status of the Pod loop.

```go
kubectl describe pod loop | grep -C 10 Events
kubectl delete pod loop
kubectl delete ns ckad
```


## **Chapter 6, Jobs and CronJobs**


</div>