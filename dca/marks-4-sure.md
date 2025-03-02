<h4 class="text-center m-8">

[**Source**](https://www.marks4sure.com/dca-docker-certified-associate-dca-exam-questions.html)

</h4>



<div id="questions-show-answers" class="container hide-until-load">

</article>
</details>


4. Is this a Linux kernel namespace that is disabled by default and must be enabled at Docker engine runtime to be used? Solution: mnt

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 The mnt namespace is not disabled by default and does not need to be enabled at Docker engine runtime to be used. The mnt namespace is one of the six Linux kernel namespaces that Docker uses to isolate containers from the host system1. The mnt namespace allows a container to have its own set of mounted filesystems and root directories, which are different from the host’s2. This means that a container can access only the files and directories that are mounted inside its namespace, and not the ones that are mounted on the host or other containers. The mnt namespace is created automatically when a container is started, and it is destroyed when the container stops3.

References:

Isolate containers with a user namespace | Docker Docs
The mnt namespace - Docker Cookbook - Second Edition
Container security fundamentals part 2: Isolation & namespaces
mnt is not a Linux kernel namespace that is disabled by default and must be enabled at Docker engine runtime to be used. According to the official documentation, mnt is one of the namespaces that are enabled by default when using namespaces for isolation.

References: https://docs.docker.com/engine/security/userns-remap/#user-namespace-known-limitations


</article>
</details>


5. The Kubernetes yaml shown below describes a networkPolicy. Will the networkPolicy BLOCK this trafftc? Solution. a request issued from a pod bearing the tier: backend label, to a pod bearing the tier: frontend label

```yaml
apiVersion: network.k8s.io/v1
kind: NetworkPolicy
metadata:
    name: dca
    namespace: default
spec:
    podSelector:
        matchLabels:
            tier: backend
    ingress:
    -from:
        -podSelector:
            matchLabels:
                tier: api
```

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
The networkPolicy will block the traffic from a pod bearing the tier: backend label, to a pod bearing the tier: frontend label. The networkPolicy specifies that only pods with the tier: frontend label can access the pods with the app: guestbook-api and tier: backend labels on port 801. Any other traffic to the backend pods will be denied by default2. Therefore, a request issued from a pod bearing the tier: backend label, to a pod bearing the tier: frontend label will be blocked by the networkPolicy. References: Connect a Frontend to a Backend Using Services), Network Policies)


</article>
</details>


6. Is this a supported user authentication method for Universal Control Plane? Solution. x.500

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 x.500 is not a supported user authentication method for Universal Control Plane (UCP). UCP supports two types of user authentication methods: built-in and external1. Built-in authentication uses the UCP’s own database to store and verify user credentials. External authentication uses an external LDAP or Active Directory service to manage user accounts and passwords1. x.500 is a standard for directory services, which can be used by LDAP or Active Directory, but it is not a user authentication method by itself2. References:

User authentication | Docker Docs
X.500 - Wikipedia

</article>
</details>


7. Is this the purpose of Docker Content Trust? Solution: Enable mutual TLS between the Docker client and server.

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= Docker Content Trust (DCT) is a feature that allows users to verify the integrity and publisher of container images they pull or deploy from a registry server, signed on a Notary server12. DCT does not enable mutual TLS between the Docker client and server, which is a different security mechanism that ensures encrypted and authenticated communication between the client and the server3. DCT is based on digital signatures and The Update Framework (TUF) to provide trust over arbitrary collections of data1. References:

Content trust in Docker | Docker Docs
Docker Content Trust: What It Is and How It Secures Container Images
Protect the Docker daemon socket | Docker Docs

</article>
</details>


8. Are these conditions sufficient for Kubernetes to dynamically provision a persistentVolume, assuming there are no limitations on the amount and type of available external storage? Solution: A default provisioner is specified, and subsequently a persistentVolumeClaim is created.

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= The conditions are not sufficient for Kubernetes to dynamically provision a persistentVolume, because they are missing a StorageClass object. A StorageClass object defines which provisioner should be used and what parameters should be passed to that provisioner when dynamic provisioning is invoked. A persistentVolumeClaim must specify the name of a StorageClass in its storageClassName field to request a dynamically provisioned persistentVolume. Without a StorageClass, Kubernetes cannot determine how to provision the storage for the claim. References:

Dynamic Volume Provisioning | Kubernetes
Persistent volumes and dynamic provisioning | Google Kubernetes Engine …
Dynamic Provisioning and Storage Classes in Kubernetes or Dynamic Provisioning and Storage Classes in Kubernetes

</article>
</details>


9. In Docker Trusted Registry, is this how a user can prevent an image, such as 'nginx:latest’, from being overwritten by another user with push access to the repository? Solution: Use the DTR web Ul to make all tags in the repository immutable.

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
n: = Using the DTR web UI to make all tags in the repository immutable is not a good way to prevent an image, such as ‘nginx:latest’, from being overwritten by another user with push access to the repository. This is because making all tags immutable would prevent any updates to the images in the repository, which may not be desirable for some use cases. For example, if a user wants to push a new version of ‘nginx:latest’ with a security patch, they would not be able to do so if the tag is immutable. A better way to prevent an image from being overwritten by another user is to use the DTR web UI to create a promotion policy that restricts who can push to a specific tag or repository1. Alternatively, the user can also use the DTR API to create a webhook that triggers a custom action when an image is pushed to a repository2. References:

Prevent tags from being overwritten | Docker Docs
Create webhooks | Docker Docs

</article>
</details>


10. You created a new service named 'http* and discover it is not registering as healthy. Will this command enable you to view the list of historical tasks for this service? Solution. ‘docker inspect http"

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 The command docker inspect http will not enable you to view the list of historical tasks for the service. The docker inspect command returns low-level information on Docker objects, such as containers, images, networks, or volumes1. It does not work on services, which are higher-level objects that define the desired state of a set of tasks2. To view the list of historical tasks for a service, you need to use the docker service ps command, which shows the current and previous states of each task, as well as the node, error, and ports3. References:

docker inspect | Docker Docs
Services | Docker Docs
docker service ps | Docker Docs

</article>
</details>


11. A company's security policy specifies that development and production containers must run on separate nodes in a given Swarm cluster. Can this be used to schedule containers to meet the security policy requirements? Solution. label constraints

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 Label constraints can be used to schedule containers to meet the security policy requirements. Label constraints are a way to specify which nodes a service can run on based on the labels assigned to the nodes. Labels are key-value pairs that can be attached to any node in the swarm. For example, you can label nodes as development or production depending on their intended use. Then, you can use the --constraint option when creating or updating a service to filter the nodes based on their labels. For example, to run a service only on development nodes, you can use:

docker service create --constraint 'node.labels.environment == development' ...

To run a service only on production nodes, you can use:

docker service create --constraint 'node.labels.environment == production' ...

This way, you can ensure that development and production containers run on separate nodes in the swarm, as required by the security policy. References:

Using placement constraints with Docker Swarm
Multiple label placement constraints in docker swarm
Machine constraints in Docker swarm
How can set service constraint to multiple value

</article>
</details>


12. Is this a Linux kernel namespace that is disabled by default and must be enabled at Docker engine runtime to be used? Solution: user

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
The user namespace is a Linux kernel namespace that is disabled by default and must be enabled at Docker engine runtime to be used. The user namespace allows the host system to map its own uid and gid to some different uid and gid for containers’ processes. This improves the security of Docker by isolating the user and group ID number spaces, so that a process’s user and group ID can be different inside and outside of a user namespace1. To enable the user namespace, the daemon must start with --userns-remap flag with a parameter that specifies base uid/gid2. All containers are run with the same mapping range according to /etc/subuid and /etc/subgid3. References:

Isolate containers with a user namespace
Using User Namespaces on Docker
Docker 1.10 Security Features, Part 3: User Namespace

</article>
</details>


13. You configure a local Docker engine to enforce content trust by setting the environment variable DOCKER_CONTENT_TRUST=1. If myorg/myimage: 1.0 is unsigned, does Docker block this command? Solution: docker service create myorg/myimage:1.0

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
When content trust is enabled, Docker blocks any command that operates on unsigned images, such as docker service create. This is because Docker Content Trust (DCT) allows users to verify the integrity and publisher of specific image tags, using digital signatures stored on a Notary server. If an image tag is not signed, or the signature cannot be verified, Docker will refuse to pull, run, or build with that image. Therefore, if myorg/myimage:1.0 is unsigned, Docker will block the command docker service create myorg/myimage:1.0 and display an error message. References:

Content trust in Docker
Docker Content Trust: What It Is and How It Secures Container Images
Automation with content trust

</article>
</details>


14. Which docker run` flag lifts cgroup limitations?


A. `docker run -privileged
<!-- class="correct" -->

B. `docker run -cpu-period

C. `docker run -isolation

D. `docker run -cap-drop

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
The --privileged flag lifts all the cgroup limitations for a container, as well as other security restrictions imposed by the Docker daemon1. This gives the container full access to the host’s devices, resources, and capabilities, as if it was running directly on the host2. This can be useful for certain use cases that require elevated privileges, such as running Docker-in-Docker or debugging system issues3. However, using the --privileged flag also poses a security risk, as it exposes the host to potential attacks or damages from the container4. Therefore, it is not recommended to use the --privileged flag unless absolutely necessary, and only with trusted images and containers.

The other options are not correct because they do not lift all the cgroup limitations for a container, but only affect specific aspects of the container’s resource allocation or isolation:

•The --cpu-period flag sets the CPU CFS (Completely Fair Scheduler) period for a container, which is the length of a CPU cycle in microseconds. This flag can be used in conjunction with the --cpu-quota flag to limit the CPU time allocated to a container. However, this flag does not affect other cgroup limitations, such as memory, disk, or network.

•The --isolation flag sets the isolation technology for a container, which is the mechanism that separates the container from the host or other containers. This flag is only available on Windows containers, and can be used to choose between process, hyperv, or process-isolated modes. However, this flag does not affect the cgroup limitations for a container, but only the level of isolation from the host or other containers.

•The --cap-drop flag drops one or more Linux capabilities for a container, which are the privileges that a process can use to perform certain actions on the system. This flag can be used to reduce the attack surface of a container by removing unnecessary or dangerous capabilities. However, this flag does not affect the cgroup limitations for a container, but only the capabilities granted to the container by the Docker daemon.

References:

•Runtime privilege and Linux capabilities

•Docker Security: Using Containers Safely in Production

•Docker run reference

•Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare

•[Secure Engine]

•[Configure a Pod to Use a Limited Amount of CPU]

•[Limit a container’s resources]

•[Managing Container Resources]

•[Isolation modes]

•[Windows Container Isolation Modes]

•[Windows Container Version Compatibility]

•[Docker and Linux Containers]

•[Docker Security Cheat Sheet]

•[Docker Security: Using Containers Safely in Production]


</article>
</details>


15. Can this set of commands identify the published port(s) for a container? Solution: `docker network inspect', `docker port'

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
Yes, the docker port command can be used to identify the published ports for a running container. It shows the mapping between the host ports and the container’s exposed ports. The docker network inspect command can also provide information about the network settings of the container, including port mappings. However, it’s important to note that docker network inspect requires the network’s name or ID as an argument, not the container’s. Therefore, to get the network details of a specific container, you would first need to identify the network the container is connected to. These commands, when used appropriately, can help you identify the published ports for a container.


</article>
</details>


16. Does this command display all the pods in the cluster that are labeled as 'env: development'? Solution: 'kubectl get pods --all-namespaces -label env=development'

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 = The command kubectl get pods --all-namespaces -label env=development is not valid because it has a syntax error. The correct syntax for listing pods with a specific label is kubectl get pods --all-namespaces --selector label=value or kubectl get pods --all-namespaces -l label=value. The error in the command is:

The option flag for specifying the label selector is --selector or -l, not -label. For example, -label env=development should be --selector env=development or -l env=development.
The correct command for listing all the pods in the cluster that are labeled as env: development is:

kubectl get pods --all-namespaces --selector env=development

This command will display the name, status, restarts, and age of the pods that have the label env: development in all namespaces.

References: : Labels | Kube by Example : kubectl Cheat Sheet | Kubernetes


</article>
</details>


17. Can this set of commands identify the published port(s) for a container? Solution. ‘docker port inspect", docker container inspect"

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 The set of commands docker port inspect and docker container inspect will not identify the published port(s) for a container. The reason is that there is no such command as docker port inspect. The correct command to inspect the port mappings of a container is docker port1. The command docker container inspect can also show the port mappings of a container, but it will display a lot of other information as well, so it is not as concise as docker port2. To identify the published port(s) for a container, you can use either of these commands:

docker port CONTAINER will list all the port mappings of the container1.
docker port CONTAINER PRIVATE_PORT will list only the port mapping of the specified private port of the container1.
docker container inspect --format=' { {.NetworkSettings.Ports}}' CONTAINER will list only the port mappings of the container in a JSON format23.
For example, if you have a container named web that publishes port 80 to port 8080 on the host, you can use any of these commands to identify the published port:

$ docker port web

80/tcp -> 0.0.0.0:8080

$ docker port web 80

0.0.0.0:8080

$ docker container inspect --format=' { {.NetworkSettings.Ports}}' web

map[80/tcp:[map[HostIp:0.0.0.0 HostPort:8080]]]

References:

docker port
docker container inspect
How can I grab exposed port from inspecting docker container?

</article>
</details>


18. A user's attempts to set the system time from inside a Docker container are unsuccessful. Could this be blocking this operation? Solution. SELinux

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 SELinux could be blocking the operation of setting the system time from inside a Docker container. SELinux is a security mechanism that enforces mandatory access control (MAC) policies on Linux systems. It restricts the actions that processes can perform based on their security contexts, such as user, role, type, and level. By default, SELinux prevents Docker containers from accessing or modifying the host’s system time, as this could pose a security risk or cause inconsistency. To allow Docker containers to set the system time, SELinux needs to be configured with the appropriate permissions or labels, or disabled altogether. However, this is not recommended, as it could compromise the security and stability of the system. References:

Change system date time in Docker containers without impacting host
Change Date Inside a Docker Container
How to Handle Timezones in Docker Containers
5 ways to change time in Docker container
How to set system time dynamically in a Docker container

</article>
</details>


19. Will this action upgrade Docker Engine CE to Docker Engine EE? Solution: Uninstall 'docker-ce' package before installing 'docker-ee' package.

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 = Uninstalling the ‘docker-ce’ package before installing the ‘docker-ee’ package will not upgrade Docker Engine CE to Docker Engine EE. It will only remove the existing Docker Engine CE installation and install a new Docker Engine EE installation. This means that any existing containers, images, volumes, networks, and other Docker resources will be lost. To upgrade Docker Engine CE to Docker Engine EE without losing any data, you need to use the migration tool provided by Docker1 or follow the steps described in the Docker documentation2 or other online guides34. References:

A: Migrate to Engine 1.10 | Docker Docs
B: Install Docker Engine | Docker Docs
C: Switching Docker 18.09 Community Edition to Enterprise Engine with no …
D: How to upgrade Docker 18.09 Community Edition to Docker Enterprise 18.09

</article>
</details>


20. Will this command mount the host's '/data1 directory to the ubuntu container in read-only mode? Solution. ‘docker run -v /data:/mydata -mode readonly ubuntu'

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
The command docker run -v /data:/mydata -mode readonly ubuntu will not mount the host’s /data1 directory to the ubuntu container in read-only mode. The command has several errors that prevent it from working correctly. First, the host directory should be /data1 instead of /data, as specified in the question. Second, the option flag should be --mode instead of -mode, and it should be placed before the image name. Third, the mode value should be ro instead of readonly, as per the Docker documentation1. The correct command should be docker run -v /data1:/mydata --mode ro ubuntu, which will mount the host’s /data1 directory as a read-only volume at /mydata inside the container1. References:

docker run | Docker Docs

</article>
</details>


21. Will this command display a list of volumes for a specific container? Solution: 'docker container inspect nginx'

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 = The command docker container inspect nginx will display a list of volumes for the specific container named nginx. The output of the command will include a section called “Mounts” that shows the source, destination, mode, type, and propagation of each volume mounted in the container1. For example, the following output shows that the container nginx has two volumes: one is a bind mount from the host’s /var/log/nginx directory to the container’s /var/log/nginx directory, and the other is an anonymous volume created by Docker at /var/lib/docker/volumes/… and mounted to the container’s /etc/nginx/conf.d directory2.

"Mounts": [

{

"Type": "bind",

"Source": "/var/log/nginx",

"Destination": "/var/log/nginx",

"Mode": "rw",

"RW": true,

"Propagation": "rprivate"

},

{

"Type": "volume",

"Name": "f6eb3dfdd57b7e632f6329a6d9bce75a1e8ffdf94498e5309c6c81a87832c28d",

"Source": "/var/lib/docker/volumes/f6eb3dfdd57b7e632f6329a6d9bce75a1e8ffdf94498e5309c6c81a87832c28d/_data",

"Destination": "/etc/nginx/conf.d",

"Driver": "local",

"Mode": "",

"RW": true,

"Propagation": ""

}

]

References:

docker container inspect
List volumes of Docker container

</article>
</details>


22. In Docker Trusted Registry, is this how a user can prevent an image, such as 'nginx:latest’, from being overwritten by another user with push access to the repository? Solution: Keep a backup copy of the image on another repository.

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= Keeping a backup copy of the image on another repository is not how a user can prevent an image, such as ‘nginx:latest’, from being overwritten by another user with push access to the repository. This approach does not prevent the original image from being overwritten, it only provides a way to restore it from another source. However, this may not be reliable or efficient, as the backup repository may not be in sync with the original one, or may not be accessible at all times. To prevent an image from being overwritten by another user, the user can use the DTR web UI to make the tag immutable1. This feature allows the user to lock a specific tag, so that no one can push a new image with the same tag to the repository. This ensures that the image is always consistent and secure1. References:

Make a tag immutable | Docker Docs

</article>
</details>


23. Does this command display all the pods in the cluster that are labeled as 'env: development'? Solution: 'kubectl get pods --all-namespaces -I env=development'

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 The command ‘kubectl get pods --all-namespaces -I env=development’ does not display all the pods in the cluster that are labeled as ‘env: development’. The reason is that the flag -I is not a valid option for kubectl get pods. The correct flag to use is --selector or -l, which allows you to filter pods by labels1. Labels are key-value pairs that can be attached to Kubernetes objects to identify, group, or select them2. For example, to label a pod with env=development, one can run:

kubectl label pods my-pod env=development

To display all the pods that have the label env=development, one can run:

kubectl get pods --selector env=development

or

kubectl get pods -l env=development

The --all-namespaces flag can be used to list pods across all namespaces3. Therefore, the correct command to display all the pods in the cluster that are labeled as ‘env: development’ is:

kubectl get pods --all-namespaces --selector env=development

or

kubectl get pods --all-namespaces -l env=development References:

kubectl Cheat Sheet | Kubernetes
Labels and Selectors | Kubernetes
kubectl get | Kubernetes

</article>
</details>


24. Does this command create a swarm service that only listens on port 53 using the UDP protocol? Solution. ‘docker service create -name dns-cache -p 53:53/udp dns-cache"

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= The command ‘docker service create -name dns-cache -p 53:53/udp dns-cache’ is not correct and will not create a swarm service that only listens on port 53 using the UDP protocol. There are two errors in the command:

The option -name should be --name with two dashes, otherwise it will be interpreted as a short option -n followed by an argument ame1.
The option -p or --publish will publish the service port to the host port, which means the service will be reachable from outside the swarm2. To create a service that only listens on the internal network, you need to use the --publish-add option with the mode=ingress flag3.
The correct command should be:

docker service create --name dns-cache --publish-add mode=ingress,target=53,published=53,protocol=udp dns-cache

References:

docker service create | Docker Docs
Publish ports on the host | Docker Docs
Publish a port for a service | Docker Docs

</article>
</details>


25. Will this action upgrade Docker Engine CE to Docker Engine EE? Solution: Manually download the 'docker-ee' package

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= Manually downloading the ‘docker-ee’ package will not upgrade Docker Engine CE to Docker Engine EE. Docker Engine CE and Docker Engine EE are two different products with different installation methods and features. Docker Engine CE is a free and open source containerization platform, while Docker Engine EE is a subscription-based enterprise-grade platform that offers additional features such as security scanning, certified plugins, and support12. To upgrade from Docker Engine CE to Docker Engine EE, you need to uninstall Docker Engine CE and install Docker Engine EE following the official documentation3. References:

What is the exact difference between Docker EE (Enterprise Edition), Docker CE (Community Edition) and Docker (Custom Support) - Stack Overflow
Difference between Docker Community Edition (CE) vs Docker Enterprise Edition (EE) in 2020
Install Docker Engine | Docker Docs

</article>
</details>


26. Will This command list all nodes in a swarm cluster from the command line? Solution. ‘docker swarm nodes'

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= The command ‘docker swarm nodes’ is not a valid command to list all nodes in a swarm cluster from the command line. The correct command is docker node ls, which can be run on a manager node to view the details of all the nodes in the swarm1. The docker swarm command is used to manage the swarm itself, not the nodes. For example, you can use docker swarm init to create a new swarm, or docker swarm join to add a node to an existing swarm2. References:

Manage nodes in a swarm | Docker Docs
docker swarm | Docker Docs

</article>
</details>


27. The Kubernetes yaml shown below describes a clusterIP service. Is this a correct statement about how this service routes requests? Solution: Traffic sent to the IP of this service on port 80 will be routed to port 8080 in a random pod with the label app: nginx.

```yaml
apiVersion: v1
kind: Service
metadata:
    name: dca
spec:
    type: clusterIP
    selector:
        app: nginx
    ports:
        -port: 8080
        targetPort: 80
        -port: 4443
        targetPort: 443
```

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
The statement is not entirely correct. In Kubernetes, a service of type ClusterIP routes traffic sent to its IP address to the pods selected by its label selector1. However, the port to which the traffic is routed in the pod is determined by the targetPort specified in the service definition1. If targetPort is not specified, it defaults to being the same as the port field1. In the provided YAML snippet, there is no targetPort specified for port 80, so we cannot confirm that the traffic will be routed to port 8080 in the pod. Therefore, without additional information about the pod configuration, we cannot verify the provided solution statement1.


</article>
</details>


28. Is this a type of Linux kernel namespace that provides container isolation? Solution: Authentication

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= Authentication is not a type of Linux kernel namespace that provides container isolation. Namespaces are a feature of the Linux kernel that partitions kernel resources such that one set of processes sees one set of resources and another set of processes sees a different set of resources. Docker uses six different namespaces to isolate containers from the host and from each other: PID, USER, UTS, IPC, MNT, and NET12. Authentication is not one of them. Authentication is a process of verifying the identity of a user or a system, which is usually done by using credentials such as passwords, tokens, or certificates. Authentication does not directly affect the isolation of containers, although it can be used to control access to them. References:

Docker security | Docker Docs
Securing Docker Containers with Linux Kernel Features | Infosec

</article>
</details>


29. Your organization has a centralized logging solution, such as Splunk. Will this configure a Docker container to export container logs to the logging solution? Solution: docker logs

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= The command docker logs  will not configure a Docker container to export container logs to the logging solution, such as Splunk. This command only displays the logs of a specific container in the standard output or a file, but does not send them to any external system1. To export container logs to Splunk, you need to use the Docker Logger Drivers, which are plugins that provide logging capabilities for Docker containers2. The Splunk logging driver sends container logs to HTTP Event Collector in Splunk Enterprise and Splunk Cloud3. To use the Splunk logging driver for a specific container, you need to use the command-line flags --log-driver and --log-opt with docker run, and provide the Splunk token and URL as options3. For example:

$ docker run --log-driver=splunk --log-opt splunk-token=VALUE --log-opt splunk-url=VALUE ...

References:

docker logs | Docker Documentation
Logging drivers | Docker Documentation
Splunk logging driver | Docker Documentation

</article>
</details>


30. Will this command mount the host's '/data' directory to the ubuntu container in read-only mode? Solution: 'docker run -v /data:/mydata --mode readonly ubuntu'

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= The command docker run -v /data:/mydata --mode readonly ubuntu is not valid because it has some syntax errors. The correct syntax for running a container with a bind mount is docker run [OPTIONS] IMAGE [COMMAND] [ARG...]. The errors in the command are:

The option flag for specifying the volume is --volume or -v, not -v. For example, -v /data:/mydata should be --volume /data:/mydata.
The option flag for specifying the mode of the volume is --mount, not --mode. For example, --mode readonly should be --mount type=bind,source=/data,target=/mydata,readonly.
The option flag for specifying the mode of the container is --detach or -d, not --mode. For example, --mode readonly should be --detach.
The correct command for running a container with a bind mount in read-only mode is:

docker run --volume /data:/mydata --mount type=bind,source=/data,target=/mydata,readonly --detach ubuntu

This command will run a container using the ubuntu image and mount the host’s /data directory to the container’s /mydata directory in read-only mode. The container will run in the background (--detach).

References: : docker run reference | Docker Documentation : [Use bind mounts | Docker Documentation]


</article>
</details>


31. Will this Linux kernel facility limit a Docker container's access to host resources, such as CPU or memory? Solution. capabilities

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 Capabilities are a Linux kernel feature that allows processes to perform some privileged operations without having the full power of the root user1. Docker uses capabilities to limit the access of containers to host resources, such as CPU or memory2. By default, Docker drops all capabilities except those needed for the container to function properly, using a whitelist approach3. This reduces the risk of a container compromising the host system or other containers. You can also add or remove capabilities to or from a container at runtime, using the --cap-add or --cap-drop options of the docker run command4. This gives you more control over the security and functionality of your containers. References:

Capabilities | dockerlabs
Docker run reference | Docker Docs
Docker Capabilities and no-new-privileges
Runtime privilege and Linux capabilities | Docker Docs

</article>
</details>


32. An application image runs in multiple environments, with each environment using different certificates and ports. Is this a way to provision configuration to containers at runtime? Solution: Provision a Docker config object for each environment.

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= Provisioning a Docker config object for each environment is a way to provision configuration to containers at runtime. Docker configs allow services to adapt their behaviour without the need to rebuild a Docker image. Services can only access configs when explicitly granted by a configs attribute within the services top-level element. As with volumes, configs are mounted as files into a service’s container’s filesystem1. Docker configs are supported on both Linux and Windows services2. References: Docker Documentation, Configs top-level element


</article>
</details>


33. Are these conditions sufficient for Kubernetes to dynamically provision a persistentVolume, assuming there are no limitations on the amount and type of available external storage? Solution: A default storageClass is specified, and subsequently a persistentVolumeClaim is created.

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= The conditions are sufficient for Kubernetes to dynamically provision a persistentVolume, because they include a default storageClass and a persistentVolumeClaim. A storageClass defines which provisioner should be used and what parameters should be passed to that provisioner when dynamic provisioning is invoked. A persistentVolumeClaim requests a specific size, access mode, and storageClass for the persistentVolume. If a persistentVolume that satisfies the claim exists or can be provisioned, the persistentVolumeClaim is bound to that persistentVolume. A default storageClass means that any persistentVolumeClaim that does not specify a storageClass will use the default one. Therefore, the conditions in the question are enough to enable dynamic provisioning of storage volumes on-demand. References:

Dynamic Volume Provisioning | Kubernetes
Persistent volumes and dynamic provisioning | Google Kubernetes Engine …

</article>
</details>


34. Will this command list all nodes in a swarm cluster from the command line? Solution. ‘docker inspect nodes

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
The command docker inspect nodes will not list all nodes in a swarm cluster from the command line. This is because docker inspect requires one or more names or IDs of the objects to inspect1. To list all nodes in a swarm cluster, you need to use the command docker node ls2, which will display information such as node ID, hostname, status, availability, and role3. References:

docker inspect | Docker Docs
docker node ls | Docker Docs
How to list nodes in a Docker swarm cluster

</article>
</details>


35. Is this an advantage of multi-stage builds? Solution: faster image builds by allowing parallel execution of Docker builds

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= Simultaneously creating and tagging multiple images is not an advantage of multi-stage builds. Multi-stage builds are a feature that allows you to use multiple FROM statements in your Dockerfile, each starting a new stage of the build1. You can selectively copy artifacts from one stage to another, leaving behind everything you don’t want in the final image. This helps you to optimize the size and security of your images, as well as to simplify your build process12. However, multi-stage builds do not create or tag multiple images at once. Each Dockerfile produces one final image, which is the result of the last stage in the Dockerfile1. If you want to create and tag multiple images from a single Dockerfile, you need to use the --target option with the docker build command, and specify the name of the stage you want to build and tag3. References:

Multi-stage builds | Docker Docs
What Are Multi-Stage Docker Builds? - How-To Geek
Stop at a specific build stage | Docker Docs

</article>
</details>


36. Is this a type of Linux kernel namespace that provides container isolation? Solution: Network

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 Network is a type of Linux kernel namespace that provides container isolation. Network namespaces isolate the system resources associated with networking, such as network interfaces, IP addresses, routing tables, firewall rules, etc. Each network namespace has its own virtual network stack, and processes in different network namespaces can communicate through virtual network devices or tunnels1. Network namespaces are used by Docker to create isolated networks for containers, and allow users to customize the network configuration and connectivity of each container2. References:

network_namespaces(7) - Linux manual page
Docker network overview | Docker Documentation

</article>
</details>


37. You created a new service named 'http' and discover it is not registering as healthy. Will this command enable you to view the list of historical tasks for this service? Solution: 'docker inspect http'

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= The ‘docker inspect’ command returns low-level information on Docker objects, such as containers, images, networks, etc1 It does not show the list of historical tasks for a service. To view the list of tasks for a service, you need to use the ‘docker service ps’ command 2. For example, to see the tasks for the ‘http’ service, you would run ‘docker service ps http’. This would show the ID, name, image, node, desired state, current state, and error of each task 2. References: Docker inspect | Docker Docs, Docker service ps | Docker Docs


</article>
</details>


38. Is this statement correct? Solution: A Dockerfile stores the Docker daemon's configuration options.

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
The statement is not correct. A Dockerfile does not store the Docker daemon’s configuration options. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image1. A Dockerfile is used to build images, not to configure the Docker daemon. The Docker daemon’s configuration options are stored in a JSON file, which is usually located at /etc/docker/daemon.json on Linux systems, or C:\ProgramData\docker\config\daemon.json on Windows2. The JSON file allows you to customize the Docker daemon’s behavior, such as enabling debug mode, setting TLS certificates, or changing the data directory2. References: Dockerfile reference), Docker daemon configuration overview)


</article>
</details>


39. You configure a local Docker engine to enforce content trust by setting the environment variable DOCKER_CONTENT_TRUST=1. If myorg/myimage: 1.0 is unsigned, does Docker block this command? Solution: docker container run myorg/myimage:1.0

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
Docker will block the command docker container run myorg/myimage:1.0 if the image tag myorg/myimage:1.0 is unsigned and the environment variable DOCKER_CONTENT_TRUST=1 is set. The reason is that setting DOCKER_CONTENT_TRUST=1 enables Docker Content Trust (DCT), which is a feature that allows users to verify the integrity and publisher of Docker images using digital signatures1. When DCT is enabled, Docker will only pull, run, or build images that have valid signatures. If an image tag is unsigned or has an invalid signature, Docker will reject the operation and display an error message2. Therefore, to run an unsigned image with DCT enabled, you need to either disable DCT by setting DOCKER_CONTENT_TRUST=0 or use the --disable-content-trust flag, or sign the image tag with a valid key3. References:

Content trust in Docker
Determine if Docker image is signed or unsigned
Signing Images and Enabling Docker Content Trust

</article>
</details>


40. During development of an application meant to be orchestrated by Kubernetes, you want to mount the /data directory on your laptop into a container. Will this strategy successfully accomplish this? Solution. Set containers. Mounts. hostBinding: /data in the container's specification.

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
The strategy will not successfully accomplish mounting the /data directory on your laptop into a container. The containers. Mounts. hostBinding: /data is not a valid syntax for specifying a bind mount in a Kubernetes container specification. According to the Kubernetes documentation), the correct way to mount a host directory into a container is to use a hostPath volume, which takes a path parameter that specifies the location on the host. For example, to mount the /data directory on your laptop into a container at /var/data, you can use the following YAML snippet:

spec:

containers:

- name: my-container

image: my-image

volumeMounts:

- name: data-volume

mountPath: /var/data

volumes:

- name: data-volume

hostPath:

path: /data

References: Volumes), Use bind mounts)


</article>
</details>


41. Does this command display all the pods in the cluster that are labeled as env; development'? Solution. ‘kubectl gel pods --all-namespaces -I 'env in (development)''

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 The command kubectl gel pods --all-namespaces -l 'env in (development)' does not display all the pods in the cluster that are labeled as env: development. The command has two typos that prevent it from working correctly. First, the verb should be get instead of gel. Second, the label selector flag should be -l instead of -I1. The correct command should be kubectl get pods --all-namespaces -l 'env in (development)', which will list all the pods across all namespaces that have a label env with a value development2. References:

kubectl Cheat Sheet | Kubernetes
Labels and Selectors | Kubernetes

</article>
</details>


42. Is this a way to configure the Docker engine to use a registry without a trusted TLS certificate? Solution: Set IGNORE_TLS in the 'daemon.json' configuration file.

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= This is not a way to configure the Docker engine to use a registry without a trusted TLS certificate. There is no such option as IGNORE_TLS in the daemon.json configuration file. The daemon.json file is used to configure various aspects of the Docker engine, such as logging, storage, networking, and security1. To use a registry without a trusted TLS certificate, you need to either add the certificate to the trusted root certificates of the system, or configure the Docker engine to allow insecure registries2. To add the certificate to the trusted root certificates, you need to copy the certificate file to the /etc/docker/certs.d// directory on every Docker host2. To configure the Docker engine to allow insecure registries, you need to add the registry hostname or IP address to the “insecure-registries” array in the daemon.json file3. For example:

{ “insecure-registries” : [“myregistry.example.com:5000”] }

Note that using insecure registries is not recommended, as it exposes you to potential man-in-the-middle attacks and data corruption3. You should always use a registry with a trusted TLS certificate, or use Docker Content Trust to sign and verify your images4. References:

Daemon configuration file | Docker Docs
Verify repository client with certificates | Docker Docs
Test an insecure registry | Docker Docs
Content trust in Docker | Docker Docs

</article>
</details>


43. A company's security policy specifies that development and production containers must run on separate nodes in a given Swarm cluster. Can this be used to schedule containers to meet the security policy requirements? Solution: node affinities

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
They provide granular control over where pods (or in this case, containers) are scheduled, based on the labels of the nodes1. In the context of Docker Swarm, this means that you could use node affinities to ensure that development and production containers are scheduled on separate nodes, thus meeting the company’s security policy requirements12345.


</article>
</details>


44. You created a new service named 'http' and discover it is not registering as healthy. Will this command enable you to view the list of historical tasks for this service? Solution: 'docker ps http'

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
The command ‘docker ps http’ is not the correct command to view the list of historical tasks for a service in Docker1. The ‘docker ps’ command is used to list containers1. If you want to view the list of historical tasks for a service, you should use the ‘docker service ps’ command2. This command lists the tasks that are running as part of the specified services and also shows the task history2. Therefore, to view the list of historical tasks for the ‘http’ service, you should use the command 'docker service ps http’2.


</article>
</details>


45. Does this command create a swarm service that only listens on port 53 using the UDP protocol? Solution. ‘docker service create -name dns-cache -p 53:53 -udp dns-cache’

A. Yes

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
= The command docker service create -name dns-cache -p 53:53 -udp dns-cache will not create a swarm service that only listens on port 53 using the UDP protocol. The reason is that the command has several syntax errors and invalid options. The correct command to create a swarm service that only listens on port 53 using the UDP protocol is docker service create --name dns-cache --publish published=53,target=53,protocol=udp dns-cache12. The command docker service create -name dns-cache -p 53:53 -udp dns-cache has the following problems:

The option -name is not a valid option for docker service create. The valid option for specifying the service name is --name3.
The option -p is not a valid option for docker service create. The valid option for publishing a port for a service is --publish1.
The option -udp is not a valid option for docker service create. The valid option for specifying the protocol for a published port is protocol within the --publish option1.
The argument 53:53 is not a valid argument for docker service create. The argument for docker service create should be the image name for the service, such as dns-cache3. The source and target of the published port should be specified in the --publish option, separated by a comma1.
Therefore, the command docker service create -name dns-cache -p 53:53 -udp dns-cache will not work as intended, and will likely produce an error message or an unexpected result. References:

Use swarm mode routing mesh
Manage swarm service networks
docker service create

</article>
</details>


46. One of several containers in a pod is marked as unhealthy after failing its livenessProbe many times. Is this the action taken by the orchestrator to fix the unhealthy container? Solution: The unhealthy container is restarted.

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 A liveness probe is a mechanism for indicating your application’s internal health to the Kubernetes control plane. Kubernetes uses liveness probes to detect issues within your pods. When a liveness check fails, Kubernetes restarts the container in an attempt to restore your service to an operational state1. Therefore, the action taken by the orchestrator to fix the unhealthy container is to restart it. References:

Content trust in Docker | Docker Docs
Docker Content Trust: What It Is and How It Secures Container Images
A Practical Guide to Kubernetes Liveness Probes | Airplane

</article>
</details>


47. You created a new service named 'http' and discover it is not registering as healthy. Will this command enable you to view the list of historical tasks for this service? Solution: 'docker service ps http'

A. Yes
<!-- class="correct" -->

B. No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">
 = The command ‘docker service ps http’ will list the tasks that are running as part of the ‘http’ service, as well as the task history1. The task history shows the previous states of the tasks, such as running, shutdown, rejected, etc. This can help you troubleshoot why the service is not registering as healthy, by looking at the current state, error, and ports of each task1. References:

docker service ps | Docker Docs
Docker Certified Associate Guide
DCA Prep Guide

</article>
</details>

</div>