- [**Book**: Certified Kubernetes Application Developer (CKAD) Study Guide](#book-certified-kubernetes-application-developer-ckad-study-guide)
  - [**Chapter 4, Containers**](#chapter-4-containers)
  - [**Chapter 5, Pods and Namespaces**](#chapter-5-pods-and-namespaces)
  - [**Chapter 6, Jobs and CronJobs**](#chapter-6-jobs-and-cronjobs)
  - [**Chapter 7, Volumes**](#chapter-7-volumes)
  - [**Chapter 8, Multi-Container Pods**](#chapter-8-multi-container-pods)


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

<div>

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

</div>

* Inspect the events and the status of the Pod loop.

```go
kubectl describe pod loop | grep -C 10 Events
kubectl delete pod loop
kubectl delete ns ckad
```


## **Chapter 6, Jobs and CronJobs**

* Create a Job named random-hash using the container image alpine:3.17.3 that executes the shell command `echo $RANDOM | base64 | head -c 20`. Configure the Job to execute with two Pods in parallel. The number of completions should be set to 5.

<div>

```bash
kubectl create job random-hash --image=alpine:3.17.3 --dry-run=client -o yaml > job.yaml -- echo $RANDOM
```

To read documentations regarding the fields:

```bash
k explain Job.spec | grep -C 10 parallelism
k explain Job.spec | grep -C 10 completion
k explain Job.spec | grep -C 10 backoffLimit
```


```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: random-hash
spec:
  parallelism: 2 # to be added
  completions: 5 # to be added
  backoffLimit: 4 # to be added
  template:
    spec:
      containers:
      - command: ["/bin/sh", "-c", "echo $RANDOM | base64 | head -c 20"] # to be updated
        image: alpine:3.17.3
        name: random-hash
        resources: {}
      restartPolicy: Never
status: {}
```

```bash
kubectl apply -f job.yaml
```

</div>

* Identify the Pods that executed the shell command. How many Pods do you expect to exist?

```bash
# 5 completed pods
kubectl get pods | grep "random-hash-"
```

* Retrieve the generated hash from one of the Pods.

```bash
k logs random-hash-4vnh6
```

* Delete the Job. Will the corresponding Pods continue to exist?

```bash
k delete job random-hash
k get pods
# pods are also deleted
```



* Create a new CronJob named google-ping. When executed, the Job should run a curl command for google.com. Pick an appropriate image. The execution should occur every two minutes.

<div>

[**Cron Expression**](https://en.wikipedia.org/wiki/Cron)

```bash
k create cronjob google-ping --schedule="*/2 * * * *" --image=nginx:1.25.1 --dry-run=client -o yaml -- /bin/sh -c 'curl google.com'

k create cronjob google-ping --schedule="*/2 * * * *" --image=nginx:1.25.1 -- /bin/sh -c 'curl google.com'
```

</div>

* Watch the creation of the underlying Jobs managed by the CronJob. Check the command-line options of the relevant command or consult the Kubernetes documentation.

```bash
k get cj -w
```

* Reconfigure the CronJob to retain a history of seven executions.

```bash
k explain CronJob --recursive | grep -C 10 -i history
k explain CronJob.spec.successfulJobsHistoryLimit
KUBE_EDITOR="nano" k edit cj google-ping

# set successfulJobsHistoryLimit: 7 in manifest

k get cj google-ping -o yaml | grep -i history
```

* Reconfigure the CronJob to disallow a new execution if the current execution is still running. Consult the Kubernetes documentation for more information.

```bash
k explain CronJob --recursive | grep -C 10 -i concurrency
k explain CronJob.spec.concurrencyPolicy --recursive

KUBE_EDITOR="nano" k edit cj google-ping

# set CronJob.spec.concurrencyPolicy to "Forbid" in manifest

k get cj google-ping -o yaml | grep -i concurrency
```


## **Chapter 7, Volumes**

* Create a Pod YAML manifest with two containers that use the image alpine:3.12.0. Provide a command for both containers that keep them running forever.

<div>

```bash
k run alpine --image=alpine:3.12.0 --dry-run=client -o yaml --restart=Never > alpine.yaml -- /bin/sh -c "while true; do sleep 60; done;"

nano alpine.yaml
# Ctrl + K to cut/copy
# Ctrl + U to paste
```

```yaml
# alpine.yaml
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    run: alpine
  name: alpine
spec:
  containers:
  - args:
    - /bin/sh
    - -c
    - while true; do sleep 60; done;
    image: alpine:3.12.0
    name: container1
    resources: {}
  - args:
    - /bin/sh
    - -c
    - while true; do sleep 60; done;
    image: alpine:3.12.0
    name: container2
    resources: {}
  dnsPolicy: ClusterFirst
  restartPolicy: Never
status: {}
```

</div>

* Define a Volume of type emptyDir for the Pod. Container 1 should mount the Volume to path /etc/a, and container 2 should mount the Volume to path /etc/b.

```yaml
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    run: alpine
  name: alpine
spec:
  volumes:
    - name: shared-vol
      emptyDir: {}
  containers:
  - args:
    - /bin/sh
    - -c
    - while true; do sleep 60; done;
    image: alpine:3.12.0
    name: container1
    volumeMounts:
      - name: shared-vol
        mountPath: /etc/a
    resources: {}
  - args:
    - /bin/sh
    - -c
    - while true; do sleep 60; done;
    image: alpine:3.12.0
    name: container2
    volumeMounts:
      - name: shared-vol
        mountPath: /etc/b
    resources: {}
  dnsPolicy: ClusterFirst
  restartPolicy: Never
status: {}
```

* Open an interactive shell for container 1 and create the directory data in the mount path. Navigate to the directory and create the file hello.txt with the contents “Hello World.” Exit out of the container.

```bash
k get pods
k exec alpine -c container1 -it -- /bin/sh
cd etc/a
mkdir data
cd data
echo "Hello World." > hello.txt
exit
```

* Open an interactive shell for container 2 and navigate to the directory /etc/b/data. Inspect the contents of file hello.txt. Exit out of the container.

```bash
k exec alpine -c container2 -it -- /bin/sh
cd etc/b/data
cat hello.txt
exit
```



* Create a PersistentVolume named logs-pv that maps to the hostPath /var/logs. The access mode should be ReadWriteOnce and ReadOnlyMany. Provision a storage capacity of 5Gi. Ensure that the status of the PersistentVolume shows Available.

<div>

```bash
k explain PersistentVolume
# no "kubectl create pv" command :(
nano pv.yaml
```

```yaml
# pv.yaml
kind: PersistentVolume
apiVersion: v1
metadata:
  name: logs-pv
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
    - ReadOnlyMany
  hostPath:
    path: /var/logs
```

```bash
k apply -f pv.yaml
k get pv logs-pv
```

</div>


* Create a PersistentVolumeClaim named logs-pvc. It uses ReadWriteOnce access. Request a capacity of 2Gi. Ensure that the status of the PersistentVolume shows Bound.

<div>

```bash
k explain PersistentVolumeClaim.spec
ke PersistentVolumeClaim.spec --recursive | grep -i -C 2 resources

nano pvc.yaml
```

```yaml
# pvc.yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: log-pvc
spec:
  resources:
    requests:
      storage: 2Gi
  accessModes:
    - ReadWriteOnce
  storageClassName: ""
```

```bash
k apply -f pvc.yaml
k get pvc
```

</div>


* Mount the PersistentVolumeClaim in a Pod running the image nginx at the mount path /var/log/nginx.

<div>

```bash
k run nginx --image=nginx:latest --dry-run=client -o yaml > pod.yaml
k explain Pod.spec.volumes | grep -i persistent
k explain Pod.spec.volumes.persistentVolumeClaim

nano pod.yaml
```

```yaml
# pod.yaml
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    run: nginx
  name: nginx
spec:
  volumes:
    - name: logs-volume
      persistentVolumeClaim:
        claimName: logs-pvc
  containers:
  - image: nginx:1.25.1
    name: nginx
    resources: {}
    volumeMounts:
      - name: logs-volume
        mountPath: "var/log/nginx"
  dnsPolicy: ClusterFirst
  restartPolicy: Always
status: {}
```

```bash
k -f apply pod.yaml
```

</div>


* Open an interactive shell to the container and create a new file named mynginx.log in /var/log/nginx. Exit out of the Pod.

```bash
k get pods
k exec -it nginx -- /bin/sh
cd /var/log/nginx
touch my-nginx.log
exit
```

* Delete the Pod and re-create it with the same YAML manifest. Open an interactive shell to the Pod, navigate to the directory /var/log/nginx, and find the file you created before.

```bash
k delete pod nginx
k apply -f pod.yaml
k exec nginx -it -- /bin/sh
cd /var/log/nginx
ls
exit
```


## **Chapter 8, Multi-Container Pods**


</div>