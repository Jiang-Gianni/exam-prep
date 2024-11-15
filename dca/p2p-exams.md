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

The statement doesnotdescribe a node in the context of a swarm mode cluster. A node is a
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
`C:\ProgramData\docker\config\daemon.json` on Windows2.The JSON file allows you to customize
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


</div>