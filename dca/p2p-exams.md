<h4 class="text-center m-8">

[**Source**](https://www.p2pexams.com)

</h4>

<div id="questions-show-answers" class="container hide-until-load">

1. Does this command create a swarm service that only listens on port 53 using the UDP protocol? Solution. `docker service create -name dns-cache -p 53:53 -constraint networking.protocol.udp=true dns-cache`

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/engine/swarm/ingress/
* https://docs.docker.com/engine/swarm/networking/
* https://stackoverflow.com/questions/54298815/is-it-necessary-to-open-ports-2377-7946-4789-to-create-a-docker-swarm

The command `docker service create -name dns-cache -p 53:53 -constraint
networking.protocol.udp=true dns-cache` will not create a swarm service that only listens on port
53 using the UDP protocol. This command has several syntax errors and invalid options. The
correct syntax for creating a swarm service is `docker service create [OPTIONS] IMAGE [COMMAND] [ARG...]`

The correct options for specifying the service name, port mapping, and
network mode are `--name`, `--publish`, and `--network` respectively. The option-constraintis not a valid option for the `docker service create` command.To create a swarm service that only listens on port 53 using the UDP protocol, you need to use the `--publish` option with
the `protocol=udp` and `mode=host` parameters, and the `--network` option with the host value.For
example, the following command creates a global service using host mode and bypassing the
routing mesh:

```bash
docker service create --name dns-cache \
--publish published=53,target=53,protocol=udp,mode=host \
--mode global \
--network host \
dns-cache
```

</article>
</details>


2. Your organization has a centralized logging solution, such as Splunk. Will this configure a Docker container to export container logs to the logging solution? Solution. `docker run -- log-driver=splunk` for every container at run time

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/engine/logging/drivers/splunk/
* https://www.splunk.com/en_us/blog/tips-and-tricks/collecting-docker-logs-and-stats-with-splunk.html
* https://www.splunk.com/en_us/blog/tips-and-tricks/splunk-logging-driver-for-docker.html


The command `docker run --log-driver=splunk` for every container at run time will configure a
Docker container to export container logs to the logging solution. The reason is that the `--log-driver` option specifies the logging driver for the container, which determines how the container
logs are handled. The splunk logging driver is a plugin that sends container logs to HTTP Event
Collector in Splunk Enterprise and Splunk Cloud.To use the splunk logging driver, you also need
to provide some additional options with the `--log-opt` flag, such as the Splunk token, URL, source,
sourcetype, index, etc.

For example, to run a container with the splunk logging driver and send
the logs to a Splunk instance with the URL `https://splunk.example.com:8088` and the
token `176fabb6-7811-4b3a-8ba0-4d49302e50f2`, you can use:

`docker run --log-driver=splunk --log-opt splunk-token=176fabb6-7811-4b3a-8ba0-4d49302e50f2 --log-opt splunk-url=https://splunk.example.com:8088`

This way, you can configure a Docker container to export container logs to Splunk, which is a
centralized logging solution. Alternatively, you can also configure the splunk logging driver as the
default logging driver for the Docker daemon by setting the `log-driver` and `log-opts` keys in
`thedaemon.json` file and restarting Docker. This will apply the splunk logging driver to all
containers unless overridden by the `--log-driver` option.

</article>
</details>



3. You want to mount external storage to a particular filesystem path in a container in a Kubernetes pod. What is the correct set of objects to use for this?

A- a persistentVolume in the pod specification, populated with a persistentVolumeClaim which is bound to a volume defined by a storageClass

B- a storageClass in the pod's specification, populated with a volume which is bound to a provisioner defined by a persistentVolume

C- a volume in the pod specification, populated with a storageClass which is bound to a provisioner defined by a persistentVolume

D- a volume in the pod specification, populated with a persistentVolumeClaim bound to a persistentVolume defined by a storageClass
<!-- class="correct" -->



4. In the context of a swarm mode cluster, does this describe a node? Solution. an instance of the Docker CLI connected to the swarm

A- Yes

B- No
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/engine/swarm/

The statement does not describe a node in the context of a swarm mode cluster. A node is a
physical or virtual machine running Docker Engine 1.12 or later in swarm mode. An instance of
the Docker CLI connected to the swarm is not a node, but a client that can interact with the
swarm through the Docker API. The Docker CLI can be used to create a swarm, join nodes to a
swarm, deploy services to a swarm, and manage swarm behavior.

</article>
</details>


5. Is this the purpose of Docker Content Trust? Solution. Indicate an image on Docker Hub is an official image.

A- Yes

B- No
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/engine/security/trust/
* https://www.trendmicro.com/vinfo/us/security/news/virtualization-and-cloud/docker-content-trust-what-it-is-and-how-it-secures-container-images
* https://docs.docker.com/engine/security/trust/trust_automation/

The purpose of Docker Content Trust is not to indicate an image on Docker Hub is an official
image. Docker Content Trust is a feature that allows users to verify the integrity and publisher of
container images they pull or deploy from a registry server, signed on a Notary server. Docker
Content Trust uses digital signatures to ensure that the images are authentic and have not been
tampered with. Official images are a curated set of Docker repositories that are designed to be
the best starting point for most users. They are not necessarily signed by Docker Content Trust,
although some of them are. To indicate an image on Docker Hub is an official image, you can look
for the blue 'official image' badge on the image page.

</article>
</details>


6. Is this statement correct? Solution: A Dockerfile stores the Docker daemon's configuration options.

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">


The statement is not correct. A Dockerfile does not store the Docker daemon's configuration
options. A Dockerfile is a text document that contains all the commands a user could call on the
command line to assemble an image. A Dockerfile is used to build images, not to configure the
Docker daemon. The Docker daemon's configuration options are stored in a JSON file, which is
usually located at `/etc/docker/daemon.json` on Linux systems, or
`C:\ProgramData\docker\config\daemon.json` on Windows. The JSON file allows you to customize
the Docker daemon's behavior, such as enabling debug mode, setting TLS certificates, or
changing the data directory.

</article>
</details>


7. Is this a supported user authentication method for Universal Control Plane? Solution. LDAP


A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://dockerlabs.collabnix.com/advanced/Docker-UCP-overview.html

LDAP is a supported user authentication method for Universal Control Plane (UCP). UCP has its
own built-in authentication mechanism and integrates with LDAP and Active Directory. It also
supports Role Based Access Control (RBAC) and Docker Content Trust. UCP allows you to
configure LDAP as an authentication method and connect it to your LDAP server. You need to
provide the LDAP URL, the base DN, the bind DN and password, and the user and group search
settings.


</article>
</details>


8. You are pulling images from a Docker Trusted Registry installation configured to use self-signed certificates, and this error appears: `x509: certificate signed by unknown authority`. You already downloaded the Docker Trusted Registry certificate authority certificate from `https://dtr.example.com/ca`. How do you trust it? (Select two.)

A) Place the certificate in '/etc/docker/dtr/dtr.example.com.crt' and restart the Docker daemon on all cluster nodes.

B) Place the certificate in your OS certificate path, trust the certificate system-wide, and restart the Docker daemon across all cluster nodes.

C) Pass '-trust-certificate ca.crt' to the Docker client.

D) Pass --insecure-registry to the Docker client.
<!-- class="correct" -->

E) Place the certificate in '/etc/docker/certs.d/dtr.example com/ca.crt' on all cluster nodes.
<!-- class="correct" -->


9. A container named 'analytics' that stores results in a volume called 'data' was created. `docker run -d --name=analytics -v data:/data app1` How are the results accessed in 'data' with another container called 'app2'?

A) docker run -d --name=reports --volume=data app2

B) docker run -d --name=reports --volumes-from=analytics app2
<!-- class="correct" -->

C) docker run -d --name=reports --volume=app1 app2

D) docker run -d --name=reports --mount=app1 app2


10. The following health check exists in a Dockerfile: `HEALTCHECK CMD curl --fail http://localhost/health || exit 1`. Which of the following describes its purpose?

A) Defines the action taken when container health fails, which in this case will kill the container with exit status 1
<!-- class="correct" -->

B) Defines the health check endpoint on the localhost interface for external monitoring tools to monitor the health of the docker engine.

C) Defines the health check endpoint on the local host interface for containers to monitor the health of the docker engine.

D) Defines the health check for the containerized application so that the application health can be monitored by the Docker engine


11. Can this set of commands identify the published port(s) for a container? Solution. `docker container inspect`, `docker port`

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/reference/cli/docker/container/inspect/
* https://docs.docker.com/reference/cli/docker/inspect/
* https://stackoverflow.com/questions/29782529/how-to-inspect-a-running-docker-container

The set of commands `docker container inspect` and `docker port` cannot identify the published port(s)
for a container.

The `docker container inspect` command returns low-level information on a
container, such as its ID, name, state, network settings, mounts, etc. However, it does not show
the port mappings between the container and the host.

The `docker port` command lists the port mappings or a specific mapping for a container, but it requires the container name or ID as an argument. Therefore, to identify the published port(s) for a container, you need to use both commands together, such as

`docker port $(docker container inspect -f '{{.Name}}'CONTAINER)`

</article>
</details>


12. A company's security policy specifies that development and production containers must run on separate nodes in a given Swarm cluster. Can this be used to schedule containers to meet the security policy requirements? Solution: node affinities

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://pushkar-sre.medium.com/assigning-pods-to-nodes-using-affinity-and-anti-affinity-df18377244b9

They provide granular control over where pods (or in this case, containers) are scheduled, based
on the labels of the nodes. In the context of Docker Swarm, this means that you could use node
affinities to ensure that development and production containers are scheduled on separate
nodes, thus meeting the company's security policy requirements.

</article>
</details>



13. Will this sequence of steps completely delete an image from disk in the Docker Trusted Registry? Solution. Delete the image and remove permissions to the repository in the Docker Trusted Registry.

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://stackoverflow.com/questions/29802202/docker-registry-2-0-how-to-delete-unused-images
* https://stackoverflow.com/questions/25436742/how-to-delete-images-from-a-private-docker-registry
* https://yandex.cloud/en/docs/container-registry/operations/docker-image/docker-image-delete
* https://teplyheng.medium.com/how-to-completely-remove-docker-images-from-a-docker-registry-v2-76d8a26847ff


The sequence of steps will not completely delete an image from disk in the Docker Trusted
Registry. Deleting the image and removing permissions to the repository will only remove the
image from the registry's user interface and prevent unauthorized access to it. However, the
image data will still remain on the registry's storage backend until garbage collection is
performed. Garbage collection is a process that removes unused blobs (layers) from the
registry's storage. To run garbage collection, the registry must be stopped and the
command bin/registry garbage-collect `/etc/docker/registry/config.yml` must be
executed. Alternatively, the registry can be configured to run garbage collection automatically at
regular intervals.

</article>
</details>


14. A company's security policy specifies that development and production containers must run on separate nodes in a given Swarm cluster. Can this be used to schedule containers to meet the security policy requirements? Solution. environment variables

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://stackoverflow.com/questions/54637033/docker-swarm-how-to-set-environment-variables-for-tasks-on-various-nodes
* https://docs.docker.com/engine/swarm/manage-nodes/
* https://stackoverflow.com/questions/42992397/how-to-setup-node-environment-variable-in-dockerfile-for-running-node-js-applica
* https://docs.docker.com/engine/swarm/services/

Environment variables cannot be used to schedule containers to meet the security policy
requirements. Environment variables are used to pass configuration data to the containers, not to
control where they run. To schedule containers to run on separate nodes in a Swarm cluster, you
need to use node labels and service constraints. Node labels are key-value pairs that you can
assign to nodes to organize them into groups.

Service constraints are expressions that you can
use to limit the nodes where a service can run based on the node labels. For example, you can
label some nodes as `env=dev` and others as `env=prod`, and then use the constraint `--constraint node.labels.env==dev` or `--constraint node.labels.env==prod` when creating a service to ensure
that it runs only on the nodes with the matching label.
</article>
</details>


15. A company's security policy specifies that development and production containers must run on separate nodes in a given Swarm cluster. Can this be used to schedule containers to meet the security policy requirements? Solution. label constraints

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://www.sweharris.org/post/2017-07-30-docker-placement/
* https://stackoverflow.com/questions/51298645/multiple-label-placement-constraints-in-docker-swarm
* https://forums.docker.com/t/machine-constraints-in-docker-swarm/30484
* https://forums.docker.com/t/how-can-set-service-constraint-to-multiple-value/26865

Label constraints can be used to schedule containers to meet the security policy requirements.
Label constraints are a way to specify which nodes a service can run on based on the labels
assigned to the nodes. Labels are key-value pairs that can be attached to any node in the swarm.

For example, you can label nodes as development or production depending on their intended use.
Then, you can use the `--constraint` option when creating or updating a service to filter the nodes
based on their labels.

For example, to run a service only on development nodes, you can use:
`docker service create --constraint 'node.labels.environment == development' ...`

To run a service only on production nodes, you can use:
`docker service create --constraint 'node.labels.environment == production' ...`

This way, you can ensure that development and production containers run on separate nodes in
the swarm, as required by the security policy
</article>
</details>



16. Will a DTR security scan detect this? Solution. private keys copied to the image

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://github.com/deepfence/SecretScanner
* https://docs.docker.com/engine/security/trust/trust_delegation/
* https://dockerlabs.collabnix.com/beginners/dockertrustedregistry.html

A DTR security scan will detect private keys copied to the image. DTR security scan is a
feature of Docker Trusted Registry (DTR) that scans images to detect any security
vulnerability. DTR security scan uses the open source tool SecretScanner2to find unprotected
secrets in container images or file systems. SecretScanner can match the contents of images
against a database of approximately 140 secret types, including private keys. Therefore, if an
image contains private keys, DTR security scan will report them as potential secrets and alert the
user to remove them from the image.
</article>
</details>


17. You created a new service named 'http* and discover it is not registering as healthy. Will this command enable you to view the list of historical tasks for this service? Solution. `docker inspect http`

A- Yes

B- No
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://stackoverflow.com/questions/30441035/how-to-find-the-cmd-command-of-a-docker-image
* https://docs.docker.com/reference/cli/docker/inspect/

The command `docker inspect http` will not enable you to view the list of historical tasks for the
service. The `docker inspect` command returns low-level information on Docker objects, such as
containers, images, networks, or volumes. It does not work on services, which are higher-level
objects that define the desired state of a set of tasks. To view the list of historical tasks for a
service, you need to use the `docker service ps` command, which shows the current and previous
states of each task, as well as the node, error, and ports.

</article>
</details>



18. In Kubernetes, to mount external storage to a filesystem path in a container within a pod, you would use a volume in the pod specification. This volume is populated with a persistentVolumeClaim that is bound to an existing persistentVolume. The persistentVolume is defined and managed by the storageClass which provides dynamic or static provisioning of the volume and determines what type of storage will be provided. Is this a supported user authentication method for Universal Control Plane? Solution: Docker ID

A- Yes

B- No
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

Docker Universal Control Plane (UCP) has its own built-in authentication mechanism and
integrates with LDAP services. It also has role-based access control (RBAC), so that you can
control who can access and make changes to your cluster and applications. However, there is
no mention of Docker ID being a supported user authentication method for UCP in the resources
provided

</article>
</details>


19. Are these conditions sufficient for Kubernetes to dynamically provision a persistentVolume, assuming there are no limitations on the amount and type of available external storage? Solution: A persistentVolumeClaim is created that specifies a pre-defined storageClass

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/
* https://cloud.google.com/kubernetes-engine/docs/concepts/persistent-volumes
* https://kubernetes.io/blog/2017/03/dynamic-provisioning-and-storage-classes-kubernetes/

The conditions are sufficient for Kubernetes to dynamically provision a persistentVolume,
because a storageClass defines the provisioner and parameters for creating a volume ondemand. A persistentVolumeClaim that specifies a storageClass triggers the dynamic
provisioning process, and Kubernetes will automatically create and bind a persistentVolume that
matches the request. This eliminates the need for manual intervention by cluster administrators
to provision storage volumes

</article>
</details>


20. Will this Linux kernel facility limit a Docker container's access to host resources, such as CPU or memory? Solution. capabilities

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://dockerlabs.collabnix.com/advanced/security/capabilities/
* https://docs.docker.com/engine/containers/run/
* https://raesene.github.io/blog/2019/06/01/docker-capabilities-and-no-new-privs/
* https://www.docker.com/resources/what-container/

Capabilities are a Linux kernel feature that allows processes to perform some privileged
operations without having the full power of the root user. Docker uses capabilities to limit the
access of containers to host resources, such as CPU or memory. By default, Docker drops all
capabilities except those needed for the container to function properly, using a whitelist
approach. This reduces the risk of a container compromising the host system or other
containers. You can also add or remove capabilities to or from a container at runtime, using the `--cap-add` or `--cap-drop` options of the `docker run` command. This gives you more control over the
security and functionality of your containers

</article>
</details>



21. Will this command list all nodes in a swarm cluster from the command line? Solution. `docker inspect nodes`


A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/engine/swarm/manage-nodes/
* https://stackoverflow.com/questions/56665081/how-to-list-swarm-mode-nodes

The command `docker inspect nodes` will not list all nodes in a swarm cluster from the command
line. This command is invalid, as `docker inspect` requires one or more object names or IDs as
arguments. To list all nodes in a swarm cluster, you need to use the `docker node ls` command
from a manager node. This command will display the ID, hostname, status, availability, manager
status, and engine version of each node in the swarm. You can also use the `-for--filter` flag to filter the nodes by various criteria, such as role, label, or name

</article>
</details>


22. In Docker Trusted Registry, is this how a user can prevent an image, such as `nginx:latest`, from being overwritten by another user with push access to the repository? Solution: Tag the image with `nginx:immutable`

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://stackoverflow.com/questions/66864753/redirecting-to-docker-registry-with-nginx

Tagging the image with `nginx:immutable` isnothow a user can prevent an image, such as
`nginx:latest`, from being overwritten by another user with push access to the repository. Tagging
the image with `nginx:immutable` will only create a new tag for the image, but it will not prevent
the original tag from being overwritten.To prevent an image tag from being overwritten in Docker
Trusted Registry, the user can use the DTR web UI to make the tag immutable. This will prevent
anyone from pushing a new image with the same tag, even if they have push access to the
repository. Alternatively, the user can also use the DTR API to make the tag
immutable.

</article>
</details>


23. Which one of the following commands will show a list of volumes for a specific container?

A) docker container logs nginx --volumes

B) docker container inspect nginx
<!-- class="correct" -->

C) docker volume inspect nginx

D) docker volume logs nginx --containers



24. Which of the following commands wifi automatically create a volume when a container is started?

A) docker container run --name nginxtest --volumes=/app nginx
<!-- class="correct" -->

B) docker container run --name nginxtest -v /app:mount nginx

C) docker container run --name nginxtest --volumes myvol:/app:new nginx

D) docker container run --name nginxtest -v myvol:/app nginx


25. Which of the following constitutes a production-ready device mapper configuration for the Docker engine?

A) Create a volume group in devicemapper and utilize the '--dm.thinpooldev' Docker daemon option, specifying the volume group

B) Format a partition with xfs and mount it at '/var/lib/docker'

C) Utilize the '--storage-opt dm.directlvm_device' Docker daemon option, specifying a block device
<!-- class="correct" -->

D) Nothing, devicemapper comes ready for production usage out of the box


26. Which one of the following commands will result in the volume being removed automatically once the container has exited?

A) 'docker run --del -v /foo busybox'

B) 'docker run --read-only -v /foo busybox'

C) 'docker run --rm -v /foo busybox'
<!-- class="correct" -->

D) 'docker run --remove -v /foo busybox'


27. A server is running low on disk space. What command can be used to check the disk usage of images, containers, and volumes for Docker engine?

A) 'docker system df'
<!-- class="correct" -->

B) 'docker system prune'

C) 'docker system free'

D) 'docker system ps'


28. Which of the following statements is true about secrets?

A) Secrets can be created from any node in the cluster.

B) Secrets can be modified after they are created.

C) Secret are stored unencrypted on manager nodes.

D) Secrets can be created using standard input (STDIN) and a file.
<!-- class="correct" -->



29. Which of the following namespaces is disabled by default and must be enabled at Docker engine runtime in order to be used?

A) user
<!-- class="correct" -->

B) pid

C) net

D) mnt


30. Which of the following are types of namespaces used by Docker to provide isolation? (Choose 2.)

A) Host

B) Network
<!-- class="correct" -->

C) Process ID
<!-- class="correct" -->

D) Authentication

E) Storage



31. Will a DTR security scan detect this? Solution. image configuration poor practices, such as exposed ports or inclusion of compilers in production images

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://faun.pub/container-security-101-scanning-images-for-vulnerabilities-28391ee7170e

A DTR security scan willnotdetect image configuration poor practices, such as exposed ports or
inclusion of compilers in production images.A DTR security scan is designed to discover
vulnerabilities in the images based on the MITRE CVE or NIST NVD databases. It does not check
the image configuration or best practices. To check the image configuration and best practices,
you can use other tools, such as Dockerfile Linter or Docker Bench for Security.

</article>
</details>


32. In Docker Trusted Registry, is this how a user can prevent an image, such as `nginx:latest`, from being overwritten by another user with push access to the repository? Solution: Remove push access from all other users.

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

While removing push access from all other users can prevent an image from being overwritten,
it's not the only way and might not be the most efficient or practical solution, especially in a
collaborative environment. Docker Trusted Registry (DTR) provides a feature called 'Immutable
Tags' which can be used to prevent an image, such as 'nginx:latest', from being overwritten.
Once a tag is marked as immutable, DTR will prevent any user from pushing the same tag to the
repository, thus preserving the image. This allows for better version control and prevents
accidental overwrites. Therefore, the solution to prevent an image from being overwritten is not
just to remove push access from all other users, but to use the features provided by DTR like
'Immutable Tags'.

</article>
</details>


33. Does this describe the role of Control Groups (cgroups) when used with a Docker container? Solution: isolation between resources used by containers

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://dockerlabs.collabnix.com/advanced/security/cgroups/
* https://stackoverflow.com/questions/34820558/difference-between-cgroups-and-namespaces

Control Groups (cgroups) are a Linux kernel feature that allow you to limit, modify, or allocate
resources as needed. Docker uses cgroups to isolate the resources used by containers, such as
CPU, memory, disk I/O, network, etc. This means that each container can have its own set of
resource limits and constraints, and that the containers cannot interfere with each other or with
the host system. This improves the security, performance, and reliability of the containers and
the system as a whole.

</article>
</details>


34. The Kubernetes yaml shown below describes a networkPolicy. Will the networkPolicy BLOCK this trafftc? Solution. a request issued from a pod bearing the tier: api label, to a pod bearing the tier: backend label

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
    name: dca
    namespace: default
spec:
    podSelector:
        matcheLabels:
            tier: backend
    ingress:
    -   from:
        -   podSelector:
                matchLabels:
                    tier: api
```

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://kubernetes.io/docs/concepts/services-networking/network-policies/

The provided Kubernetes NetworkPolicy YAML configuration indicates that the policy applies to
pods with the label tier: backend in the default namespace. The ingress rule allows traffic from
pods with the label tier: api. Therefore, a request issued from a pod bearing the tier: api label to
a pod bearing the tier: backend label will not be blocked by this networkPolicy. This is because
the networkPolicy explicitly allows ingress from pods with the tier: api label

</article>
</details>


35. Are these conditions sufficient for Kubernetes to dynamically provision a persistentVolume, assuming there are no limitations on the amount and type of available external storage? Solution: A persistentVolumeClaim is created that specifies a pre-defined provisioner

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

The creation of a persistentVolumeClaim with a specified pre-defined provisioner is not sufficient
for Kubernetes to dynamically provision a persistentVolume. There are other factors and
configurations that need to be considered and set up, such as storage classes and the
appropriate storage provisioner configurations. A persistentVolumeClaim is a request for storage
by a user, which can be automatically bound to a suitable persistentVolume if one exists or
dynamically provisioned if one does not exist. A provisioner is a plugin that creates volumes on
demand. A pre-defined provisioner is a provisioner that is built-in or registered with Kubernetes,
such as aws-ebs, gce-pd, azure-disk, etc. However, simply specifying a pre-defined provisioner
in a persistentVolumeClaim is not enough to trigger dynamic provisioning.You also need to have
a storage class that defines the type of storage and the provisioner to use. A storage class is a
way of describing different classes or tiers of storage that are available in the cluster. You can
create a storage class with a pre-defined provisioner, or use a default storage class that is
automatically created by the cluster. You can also specify parameters for the provisioner, such
as the type, size, zone, etc.of the volume to be created. To use a storage class for dynamic
provisioning, you need to reference it in the persistentVolumeClaim by name, or use the special
value '''' to use the default storage class. Therefore, to enable dynamic provisioning, you need to
have both a persistentVolumeClaim that requests a storage class and a storage class that defines
a provisioner

</article>
</details>


36. Is this a way to configure the Docker engine to use a registry without a trusted TLS certificate? Solution. Set and export the IGNORE_TLS environment variable on the command line.

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://stackoverflow.com/questions/50768317/docker-pull-certificate-signed-by-unknown-authority
* https://docs.docker.com/engine/security/certificates/
* https://forums.docker.com/t/how-to-build-docker-registry-without-ssl/119052

Setting and exporting the IGNORE_TLS environment variable on the command line is not a way
to configure the Docker engine to use a registry without a trusted TLS certificate. This
environment variable is not recognized by Docker and has no effect on the TLS verification
process. To use a registry without a trusted TLS certificate, you need to either add the certificate
to the system or Docker-specific trust store, or configure the Docker daemon to allow insecure
registries

</article>
</details>


37. You are troubleshooting a Kubernetes deployment called api, and want to see the events table for this object. Does this command display it? Solution: `kubectl get deployment api`

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://kubernetes.io/docs/reference/kubectl/quick-reference/
* https://stackoverflow.com/questions/51931113/kubectl-get-events-only-for-a-pod
* https://stackoverflow.com/questions/51558156/where-does-kubectl-events-originate-from-how-do-i-export-these
* https://www.shellhacks.com/kubectl-get-deployments-kubernetes/

The command `kubectl get deployment api` will only show the status of the deployment object, such
as the number of replicas, available pods, and updated pods. It will not display the events table
for the deployment, which contains information about the creation, scaling, and updating of the
deployment and its pods. To see the events table for the deployment, you need to use
the `kubectl describe deployment api` command, which will show the details of the deployment
object, including the events. Alternatively, you can use the `kubectl get events --field-selector involvedObject.name=api` command, which will filter the events by the name of the involved object.

</article>
</details>


38. In the context of a swarm mode cluster, does this describe a node? Solution: an instance of the Docker engine participating in the swarm

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/engine/swarm/
* https://docs.docker.com/engine/swarm/manage-nodes/

In the context of a swarm mode cluster, an instance of the Docker engine participating in the
swarm is indeed a node. A node can be either a manager or a worker, depending on the role
assigned by the swarm manager. A manager node handles the orchestration and management
of the swarm, while a worker node executes the tasks assigned by the manager. A node can join
or leave a swarm at any time, and the swarm manager will reconcile the desired state of the
cluster accordingly

</article>
</details>


39. An application image runs in multiple environments, with each environment using different certificates and ports. Is this a way to provision configuration to containers at runtime? Solution. Create a Dockerfile for each environment, specifying ports and Docker secrets for certificates.

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://kubernetes.io/docs/setup/production-environment/container-runtimes/
* https://kubernetes.io/blog/2016/04/configuration-management-with-containers/
* https://www.marks4sure.com/dca-docker-certified-associate-dca-exam-questions.html
* https://devops.com/provisioning-vs-configuration/

Creating a Dockerfile for each environment, specifying ports and Docker secrets for certificates is
not a way to provision configuration to containers at runtime.A Dockerfile is a text document that
contains all the commands a user could call on the command line to assemble an image. A
Dockerfile is used to build an image, not to run a container. Once an image is built, the
configuration specified in the Dockerfile cannot be changed at runtime.To provision configuration
to containers at runtime, you need to use a different mechanism, such as environment variables,
command-line arguments, or config maps

</article>
</details>


40. During development of an application meant to be orchestrated by Kubemetes, you want to mount the /data directory on your laptop into a container. Will this strategy successfully accomplish this? Solution. Create a Persistent VolumeClaim requesting storageClass:'''' (which defaults to local storage) and hostPath: /data, and use this to populate a volume in a pod.

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://kubernetes.io/docs/concepts/storage/volumes/
* https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/
* https://stackoverflow.com/questions/63548272/how-to-see-the-files-in-hostpath
* https://kubernetes.io/docs/concepts/storage/persistent-volumes/

This strategy will not successfully accomplish this. A PersistentVolumeClaim (PVC) is a request
for storage by a user that is automatically bound to a suitable PersistentVolume (PV) by
Kubernetes. A PV is a piece of storage in the cluster that has been provisioned by an
administrator or dynamically provisioned using StorageClasses. A hostPath is a type of volume
that mounts a file or directory from the host node's filesystem into a pod. It is mainly used for
development and testing on a single-node cluster, and not recommended for production use.
The problem with this strategy is that it assumes that the hostPath /data on the node is the same
as the /data directory on your laptop. This is not necessarily true, as the node may be a different
machine than your laptop, or it may have a different filesystem layout. Also, the hostPath volume
is not portable across nodes, so if your pod is scheduled on a different node, it will not have
access to the same /data directory. Furthermore, the storageClass parameter is not applicable
for hostPath volumes, as they are not dynamically provisioned.
To mount the /data directory on your laptop into a container, you need to use a different type of
volume that supports remote access, such as NFS, Ceph, or GlusterFS. You also need to make
sure that your laptop is accessible from the cluster network and that it has the appropriate
permissions to share the /data directory.Alternatively, you can use a tool like Skaffold or
Telepresence to sync your local files with your cluster

</article>
</details>


41. Will this command display a list of volumes for a specific container? Solution. `docker container inspect nginx`

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/reference/cli/docker/container/inspect/
* https://docs.docker.com/reference/cli/docker/inspect/

This command will not display a list of volumes for a specific container, as it will show detailed
information on the container itself, such as its configuration, network settings, state, and log
path. To display a list of volumes for a specific container, you need to use the--formatoption with
a custom template that filters the output by theMountsfield. For example, the following
command will show the source and destination of the volumes mounted in the nginx container:

`docker container inspect --format=' { {range .Mounts}} { {.Source}} -> { {.Destination}} {{end}}' nginx`

</article>
</details>


42. Is this the purpose of Docker Content Trust? Solution. Sign and verify image tags

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/engine/security/trust/
* https://www.trendmicro.com/vinfo/us/security/news/virtualization-and-cloud/docker-content-trust-what-it-is-and-how-it-secures-container-images
* https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/containers/content-trust?view=azure-devops

The purpose of Docker Content Trust is to sign and verify image tags using digital signatures
for data sent to and received from remote Docker registries. This allows client-side or runtime
verification of the integrity and publisher of specific image tags, ensuring the provenance and
security of container images

</article>
</details>


43. You want to create a container that is reachable from its host's network. Does this action accomplish this? Solution. Use either EXPOSE or -publish to access the container on the bridge network

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://www.baeldung.com/ops/docker-expose-vs-publish
* https://betterstack.com/community/questions/what-is-the-difference-between-expose-and-publish-in-docker/
* https://www.devopsschool.com/blog/understanding-expose-in-dockerfile-with-example/
* https://stackoverflow.com/questions/40801772/what-is-the-difference-between-ports-and-expose-in-docker-compose

Using either EXPOSE or -publish to access the container on the bridge network will not
accomplish the goal of creating a container that is reachable from its host's network. EXPOSE is a
way of documenting which ports a container listens on, but it does not open any ports to the
host. `-publish` (or `-p`) is a way of mapping a host port to a container port, but it does not change
the network mode of the container. By default, Docker containers use the bridge network, which
isolates them from the host network. To create a container that is reachable from its host's
network, you need to use the `--network` host option when running the container. This will make
the container share the host's network stack and have the same IP address as the host

</article>
</details>


44. Will this command mount the host's '/data* directory to the ubuntu container in read-only mode? Solution. `docker run -add-volume /data /mydata -read-only ubuntu`

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

The command `docker run -add-volume /data /mydata -read-only ubuntu` will not mount the
host's/datadirectory to the ubuntu container in read-only mode. The reason is that the command
has several syntax errors and invalid options.The correct command to mount a host directory to a
container in read-only mode is `docker run --mount type=bind,source=/data,target=/mydata,readonly ubuntu`. The command `docker run -add-volume /data /mydata -read-only ubuntu` has the following problems:

The option `-add-volume` is not a valid option for `docker run`. The valid options for mounting a volume
or a bind mount are--mountor-v12.

The option `-read-only` is not a valid option for `docker run`. The valid option for making the
container's root filesystem read-only is `--read-only`. However, this option will not affect the
mounted volumes or bind mounts, which have their own readonlyoption.

The argument `/data /mydata` is not a valid argument for `docker run`. The argument for `dockerrun` should be the command to run inside the container, such as bash or ping. The source and
target of the volume or bind mount should be specified in the `--mount` or `-v` option, separated by a
colon.

Therefore, the command `docker run -add-volume /data /mydata -read-only ubuntu` will not work as
intended, and will likely produce an error message or an unexpected result

</article>
</details>


45. Is this a function of UCP? Solution: scans images to detect any security vulnerability

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://dockerlabs.collabnix.com/advanced/Docker-UCP-overview.html

Scanning images to detect any security vulnerability is a function of UCP. UCP integrates with
Docker Trusted Registry (DTR), which is a secure and scalable image storage solution. DTR has a
built-in image scanning feature that checks every layer of every image for known vulnerabilities
and displays the results in the UCP web UI. This helps users to identify and fix any security
issues before deploying their applications. UCP also allows users to enforce security policies and
only allow running applications that use images that are scanned and free of
vulnerabilities.

</article>
</details>


46. A user's attempts to set the system time from inside a Docker container are unsuccessful. Could this be blocking this operation? Solution. SELinux

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://stackoverflow.com/questions/28973728/change-system-date-time-in-docker-containers-without-impacting-host
* https://www.baeldung.com/ops/docker-change-date
* https://www.howtogeek.com/devops/how-to-handle-timezones-in-docker-containers/
* https://bobcares.com/blog/change-time-in-docker-container/
* https://serverfault.com/questions/824631/how-to-set-system-time-dynamically-in-a-docker-container

SELinux could be blocking the operation of setting the system time from inside a Docker
container. SELinux is a security mechanism that enforces mandatory access control (MAC)
policies on Linux systems. It restricts the actions that processes can perform based on their
security contexts, such as user, role, type, and level. By default, SELinux prevents Docker
containers from accessing or modifying the host's system time, as this could pose a security risk
or cause inconsistency. To allow Docker containers to set the system time, SELinux needs to be
configured with the appropriate permissions or labels, or disabled altogether. However, this is not
recommended, as it could compromise the security and stability of the system

</article>
</details>


47. Is this a function of UCP? Solution: enforces the deployment of signed images to the cluster

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://dockerlabs.collabnix.com/advanced/Docker-UCP-overview.html
* https://www.howtogeek.com/devops/how-to-sign-your-docker-images-to-increase-trust/

This is a function of UCP, as it integrates with Docker Trusted Registry (DTR) to provide built-in
security and access control for your images. DTR allows you to enforce security policies and only
allow running applications that use Docker images you know and trust. You can sign your images
with Docker Content Trust (DCT) to prove their authenticity and integrity. UCP will verify the
signatures of the images before deploying them to the cluster

</article>
</details>


48. You add a new user to the engineering organization in DTR. Will this action grant them read/write access to the engineering/api repository? Solution. Mirror the engineering/api repository to one of the user's own private repositories.

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://stackoverflow.com/questions/32660206/docker-registry-vs-docker-trusted-registry
* https://dockerlabs.collabnix.com/beginners/dockertrustedregistry.html
* https://www.cloudbees.com/blog/docker-trusted-registry

Mirroring the engineering/api repository to one of the user's own private repositories will not
grant them read/write access to the original repository. Mirroring is a feature that allows users to
automatically sync images from one repository to another, either within the same DTR or across
different DTRs. Mirroring does not affect the permissions or roles of the users or teams associated
with the source or destination repositories. To grant a user read/write access to the
engineering/api repository, the user needs to be added to a team that has the appropriate role
for that repository, or the repository needs to be configured with the appropriate visibility and
access settings

</article>
</details>


49. Is this an advantage of multi-stage builds? Solution: better caching when building Docker images

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/build/building/multi-stage/
* https://www.howtogeek.com/devops/what-are-multi-stage-docker-builds/

Better caching when building Docker images is an advantage of multi-stage builds. Multi-stage
builds allow you to use multiple FROM statements in your Dockerfile, each starting a new stage of
the build. This can help you improve the caching efficiency of your Docker images, as each stage
can use its own cache layer. For example, if you have a stage that installs dependencies and
another stage that compiles your code, you can reuse the cached layer of the dependencies
stage if they don't change, and only rebuild the code stage if it changes. This can save you time
and bandwidth when building and pushing your images

</article>
</details>



50. Will this command display a list of volumes for a specific container? Solution: `docker container logs nginx --volumes`

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://stackoverflow.com/questions/54912615/storing-docker-nginx-access-logs-inside-a-docker-volume

The command `docker container logs nginx --volumes` will not display a list of volumes for a specific
container. The `docker container logs` command shows the logs of a container, which are usually the
standard output and standard error of the main process running in the container. The `--volumes` flag is not a valid option for this command, and will result in an error message. To
display a list of volumes for a specific container, you can use the `docker inspect` command with a
filter option, such as `docker inspect -f '{{ .Mounts }}' nginx`. This will show the source,
destination, mode, type, and propagation of each volume mounted in the
container.

</article>
</details>



1.  In the context of a swarm mode cluster, does this describe a node? Solution: a virtual machine participating in the swarm

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/

A virtual machine participating in the swarm is a node in the context of a swarm mode cluster. A node is an instance of the Docker engine participating in the swarm. A node can be either a physical machine or a virtual machine. Nodes are either managers or workers. Managers maintain cluster state and manage cluster tasks. Workers execute tasks assigned by managers.

</article>
</details>


51. Following the principle of least privilege, which of the following methods can be used to securely grnt access to the specific user to communicate to a Docker engine? (Choose two.)

A) Utilize the '--host 0.0.0.0:2375' option to the Docker daemon to listen on port 2375 over TCP on all interfaces

B) Utilize openssl to create TLS client and server certificates, configuring the Docker engine to use with mutual TLS over TCP.
<!-- class="correct" -->

C) Utilize the '--host 127.0.0.1:2375' option to the Docker daemon to listen on port 2375 over TCP on localhost

D) Give the user root access to the server to allow them to run Docker commands as root.

E) Add the user to the 'docker' group on the server or specify the grou with the '--group' Docker daemon option.
<!-- class="correct" -->


52. What is the purpose of Docker Content Trust?

A) Signing and verification of image tags
<!-- class="correct" -->

B) Enabling mutual TLS between the Docker client and server

C) Docker registry TLS verification and encryption

D) Indicating an image on Docker Hub is an official image


53. What is the purpose of a client bundle in the Universal Control Plane?

A) Authenticate a user using client certificates to the Universal Control Plane
<!-- class="correct" -->

B) Provide a new user instructions for how to login to the Universal Control Plane

C) Provide a user with a Docker client binary compatible with the Universal Control Plane

D) Group multiple users in a team in the Universal Control Plane


54. Which of the following is supported by control groups?

A) Manage certificates

B) Collect net

C) Limit CPU usage within a container
<!-- class="correct" -->

D) Isolate processes in a container


55. When using the Docker client to push an image to a registry, what environment variable is used to instruct the client to perform signing of the image?

A) DOCKER_CONTENT_TRUST=1
<!-- class="correct" -->

B) DOCKER_IMAGE_SIGN=1

C) DOCKER_PUSH_SIGN=1

D) NOTARY_ENABLE=1


56. You have created a Docker bridge network on a host with three containers attached, how do you make this containers accessible outside of the host?

A) Use network attach to access the containers on the bridge network

B) Use either EXPOSE or --publish to access the containers on the bridge network
<!-- class="correct" -->

C) Use network connect to access the containers on the bridge network

D) Use --link to access the containers on the bridge network


57. Which of the following commands will ensure that overlay traffic between service tasks is encrypted?

A) docker service create --network `<network-name>` --secure `<service-name>`

B) docker network create -d overlay --secure `<network-name>`

C) docker network create -d overlay -o encrypted=true `<network-name>`
<!-- class="correct" -->

D) docker service create --network `<network-name>` --encrypted `<service-name>`


58. Is this a way to configure the Docker engine to use a registry without a trusted TLS certificate? Solution: List insecure registries in the 'daemon.json configuration file under the \insecureregistries' key.

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

Docker allows the use of insecure registries through a specific configuration in the Docker
daemon. By listing the insecure registries in the `daemon.json` configuration file under the
`insecure-registries` key, Docker can interact with these registries even without a trusted TLS
certificate. This is particularly useful when setting up a private Docker registry. However, it's
important to note that this configuration bypasses the security provided by TLS, and should be
used with caution.

</article>
</details>


59. The Kubernetes yaml shown below describes a networkPolicy. Will the networkPolicy BLOCK this trafftc? Solution.  a request issued from a pod bearing the tier: backend label, to a pod bearing the tier: frontend label

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
    name: dca
    namespace: default
spec:
    podSelector:
        matcheLabels:
            tier: backend
    ingress:
    -   from:
        -   podSelector:
                matchLabels:
                    tier: api
```

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://kubernetes.io/docs/concepts/services-networking/network-policies/

The networkPolicy will block the traffic from a pod bearing the tier: backend label, to a pod
bearing the tier: frontend label. The networkPolicy specifies that only pods with the tier: frontend
label can access the pods with the app: guestbook-api and tier: backend labels on port 801. Any
other traffic to the backend pods will be denied by default. Therefore, a request issued from a
pod bearing the tier: backend label, to a pod bearing the tier: frontend label will be blocked by
the networkPolicy

</article>
</details>


60. Is this a supported user authentication method for Universal Control Plane? Solution. x.500

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

x.500 is not a supported user authentication method for Universal Control Plane (UCP). UCP
supports two types of user authentication methods: built-in and external. Built-in authentication
uses the UCP's own database to store and verify user credentials. External authentication uses an
external LDAP or Active Directory service to manage user accounts and passwords. x.500 is a
standard for directory services, which can be used by LDAP or Active Directory, but it is not a
user authentication method by itself

</article>
</details>


61. In Docker Trusted Registry, is this how a user can prevent an image, such as `nginx:latest`, from being overwritten by another user with push access to the repository? Solution: Keep a backup copy of the image on another repository.

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://stackoverflow.com/questions/62539266/is-there-a-way-to-prevent-overwriting-existing-tags-images-in-azure-container-re

Keeping a backup copy of the image on another repository is not how a user can prevent an
image, such as `nginx:latest`, from being overwritten by another user with push access to the
repository. This approach does not prevent the original image from being overwritten, it only
provides a way to restore it from another source. However, this may not be reliable or efficient,
as the backup repository may not be in sync with the original one, or may not be accessible at all
times. To prevent an image from being overwritten by another user, the user can use the DTR
web UI to make the tag immutable. This feature allows the user to lock a specific tag, so that no
one can push a new image with the same tag to the repository. This ensures that the image is
always consistent and secure.

</article>
</details>


62. Which of the following commands will create a swarm service which only listens on port 53 using the UDP protocol?

A) docker service create --name dns-cache -p 53:53/udp dns-cache
<!-- class="correct" -->

B) docker service create --name dns-cache -p 53:53 --service udp dns-cache

C) docker service create --name dns-cache -p 53:53 ..constraint networking.protocol.udp=true dns-cache

D) docker service create --name dns-cache -p 53:53 --udp dns-cache


63. Which of the following is true about using the '-P' option when creating a new container?

A) Docker binds each exposed container port to a random port on all the host's interface
<!-- class="correct" -->

B) Docker gives extended privileges to the container.

C) Docker binds each exposed container port to a random port on a specified host interface

D) Docker binds each exposed container port with the same port on the host


64. Which set of commands can identify the publishd port(s) for a container? (Choose 1.)

A) 'docker port inspect', 'docker container inspect'

B) 'docker container inspect', docker port'
<!-- class="correct" -->

C) 'docker info','docker network inspect'

D) 'docker network inspect','docker port'


65. Which of the following is true about overlay networks?

A) Overlay networks are created only on the manager node that you created the overlay networking on

B) Overlay networks are created on all cluster nodes when you create the overlay network.
<!-- class="correct" -->

C) Overlay networks are first created on the manager nodes. Then they are created on the worker nodes once a task is scheduled on the specific worker node.

D) Overlay networks are only created on the manager nodes.



66. What behavior is expected when a service is created with the following command: `docker service create --publish 8000:80 nginx`

A) All nodes in the cluster will listen on port 8080 and forward to port 80 in the container.
<!-- class="correct" -->

B) Only a single node in the cluster will listen on port 8080 and forward to port 80 in the container.

C) All nodes in the cluster will listen on port 80 and forward to port 8080 in the container.

D) Only a single node in the cluster will listen on port 80 and forward to port 8080 in the container.


67. A user is having problems running Docker. Which of the following will start Docker in debug mode?

A) Set the debug key to true in the 'daemon.json' file.
<!-- class="correct" -->

B) Start the 'dockerd' process manually with the '--logging' flag set to debug

C) Set the logging key to debug in the 'daemon.json' file.

D) Start the 'dockerd' process manually with the '--raw-logs' flag set to debug


68. Which command interactively monitors all container activity in the Docker engine?

A) docker system logs

B) docker system events
<!-- class="correct" -->

C) docker container events

D) docker container logs


69. Is this a way to configure the Docker engine to use a registry without a trusted TLS certificate? Solution: Set IGNORE_TLS in the `daemon.json` configuration file.

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://stackoverflow.com/questions/50768317/docker-pull-certificate-signed-by-unknown-authority
* https://docs.docker.com/engine/security/certificates/
* https://stackoverflow.com/questions/58476218/unable-to-push-to-private-docker-registry-via-tls
* https://forums.docker.com/t/how-to-build-docker-registry-without-ssl/119052

This is not a way to configure the Docker engine to use a registry without a trusted TLS
certificate. There is no such option as IGNORE_TLS in the `daemon.json` configuration file. The
`daemon.json` file is used to configure various aspects of the Docker engine, such as logging,
storage, networking, and security. To use a registry without a trusted TLS certificate, you need to
either add the certificate to the trusted root certificates of the system, or configure the Docker
engine to allow insecure registries. To add the certificate to the trusted root certificates, you
need to copy the certificate file to the `/etc/docker/certs.d/{registry-hostname}/` directory on
every Docker host. To configure the Docker engine to allow insecure registries, you need to add
the registry hostname or IP address to the `insecure-registries` array in the `daemon.json` file.
For example:

```json
{ "insecure-registries" : ["myregistry.example.com:5000"] }
```

Note that using insecure registries is not recommended, as it exposes you to potential man-inthe-middle attacks and data corruption. You should always use a registry with a trusted TLS
certificate, or use Docker Content Trust to sign and verify your images

</article>
</details>


70. Is this a way to configure the Docker engine to use a registry without a trusted TLS certificate? Solution. Set `INSECURE_REGISTRY` in the `/etc/docker/default` configuration file.

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://stackoverflow.com/questions/50768317/docker-pull-certificate-signed-by-unknown-authority
* https://docs.docker.com/engine/security/certificates/
* https://forums.docker.com/t/how-to-build-docker-registry-without-ssl/119052
* https://stackoverflow.com/questions/72981831/login-to-docker-registry-with-client-certificate-under-windows

Setting `INSECURE_REGISTRY` in the `/etc/docker/default` configuration file is one way to
configure the Docker engine to use a registry without a trusted TLS certificate. This option tells
the Docker daemon to accept insecure connections to the specified registry, bypassing the
certificate verification. However, this method is not recommended, as it exposes the registry and
the Docker engine to potential security risks. A better way to use a registry without a trusted TLS
certificate is to add the registry's CA certificate to the Docker daemon's trust store, as described
in the Docker documentation or other online guides

</article>
</details>



71. Is this an advantage of multi-stage builds? Solution. better logical separation of Dockerfile instructions for increased readability

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/build/building/multi-stage/
* https://www.howtogeek.com/devops/what-are-multi-stage-docker-builds/

Multi-stage builds allow you to use multiple FROM statements in your Dockerfile, each starting
a new stage of the build. This can help you achieve better logical separation of Dockerfile
instructions for increased readability, as well as other benefits such as smaller image size, faster
build time, and reduced security risks. By separating your Dockerfile into different stages, you
can organize your instructions by their purpose, such as building, testing, or deploying your
application. You can also copy only the artifacts you need from one stage to another, leaving
behind the unnecessary dependencies or tools. This can make your Dockerfile easier to read
and maintain, as well as improve the performance and security of your final image.

</article>
</details>


72. An application image runs in multiple environments, with each environment using different certificates and ports. Is this a way to provision configuration to containers at runtime? Solution: Create a Dockerfile for each environment, specifying ports and ENV variables for certificates.

A- Yes

B- No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

While creating a Dockerfile for each environment is a possible solution, it is not the most efficient
or scalable way to provision configuration to containers at runtime. Docker provides several
mechanisms to inject configuration into containers at runtime, such as environment variables,
command line arguments, Docker secrets for sensitive data, or even configuration files mounted
as volumes. These methods allow the same Docker image to be used across multiple
environments, promoting immutability and consistency across your deployments. Creating a
separate Dockerfile for each environment would mean maintaining multiple versions of the
Dockerfile, which could lead to inconsistencies and is generally not a recommended practice

</article>
</details>


73. You configure a local Docker engine to enforce content trust by setting the environment variable DOCKER_C0NTENT_TRUST=l. If `myorg/myimage: 1.0` is unsigned, does Docker block this command? Solution. `docker image build`, from a Dockeflle that begins `FROM myorg/myimage: l1.0`

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/engine/security/trust/
* https://www.trendmicro.com/vinfo/us/security/news/virtualization-and-cloud/docker-content-trust-what-it-is-and-how-it-secures-container-images
* https://docs.docker.com/engine/security/trust/trust_automation/

Docker will block this command if you configure the local Docker engine to enforce content
trust by setting the environment variable DOCKER_CONTENT_TRUST=1. This means that you can
only pull, run, or build with trusted images that have been signed using Docker Content Trust
(DCT). DCT is a feature that allows you to use digital signatures to verify the integrity and the
publisher of specific image tags. If `myorg/myimage:1.0` is unsigned, it means that it does not
have a valid signature from the image publisher or a trusted delegate. Therefore, Docker will not
allow you to build an image from a Dockerfile that begins with `FROM myorg/myimage:1.0`, as it
cannot verify the source or the content of the base image. You will get an error message like this:
```txt
No valid trust data for 1.0
```
To avoid this error, you need to either disable DCT by setting DOCKER_CONTENT_TRUST=0, or
use a signed image tag as the base image in your Dockerfile

</article>
</details>



74. In the context of a swarm mode cluster, does this describe a node? Solution: a physical machine participating in the swarm

A- Yes
<!-- class="correct" -->

B- No

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://docs.docker.com/engine/swarm/manage-nodes/
* https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/

A node is a physical or virtual machine running Docker Engine in swarm mode. A node can be
either a manager or a worker, depending on its role in the cluster. A physical machine
participating in the swarm is a node, regardless of its role or availability

</article>
</details>



</div>