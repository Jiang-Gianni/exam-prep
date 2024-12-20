<h4 class="text-center m-8">

[**Source**](https://www.pass4success.com/docker/exam/dca)

</h4>


<div id="questions-show-answers" class="container hide-until-load">

1. How do you initialize a Docker swarm mode cluster as a manager node?

A. docker swarm init
<!-- class="correct" -->

B. docker swarm create

C. docker cluster init

D. docker manager start


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/swarm/

To initialize a Docker swarm mode cluster as a manager node, you use the 'docker swarm init' command. This command sets up the current node as a manager and provides a token that can be used to join worker nodes to the swarm.

</article>
</details>

1. How do you manage Swarm services in Docker?

A. docker swarm service

B. docker manage service

C. docker control service

D. docker service
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/service/

To manage Swarm services in Docker, you use the 'docker service' command. This command provides functionalities to manage services in a Docker Swarm mode cluster.

</article>
</details>

1. Why is quorum important in a Docker swarm cluster?

A. It ensures that there is enough storage space across nodes.

B. It ensures that all nodes have the same Docker version.

C. It prevents network partitions and ensures consistent operations.
<!-- class="correct" -->

D. It allows for faster network communication between nodes.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/swarm/

Quorum is crucial in a Docker swarm cluster to maintain consistency. It ensures that there are enough manager nodes in agreement to prevent network partitions and guarantee that operations are consistent across the cluster. If a swarm loses the majority of its manager nodes, the remaining nodes will go into a locked state to preserve data consistency.

</article>
</details>

1. What is the primary difference between running a container and running a service in Docker?

A. A container is for individual tasks, while a service is for long-running applications.

B. A service is a type of container with additional networking capabilities.

C. A container and a service are the same in Docker.

D. A service is a cluster management command, while a container is not.
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/service/

In Docker, a container is an isolated environment in which applications run, while a service is specifically related to Swarm mode and is used for managing services within a Swarm cluster. The 'docker service' command must be executed on a swarm manager node and is used for managing Swarm services.

</article>
</details>

1. Given the output of the 'docker inspect' command, which of the following options will display the total size of all the files in a container?

A. SizeTotal

B. SizeRootFs
<!-- class="correct" -->

C. ContainerSize

D. TotalFileSize


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/inspect/

The 'SizeRootFs' field in the output of the 'docker inspect' command represents the total size of all the files in the container, in bytes. This field provides insights into the storage footprint of the container's filesystem.

</article>
</details>

1. How can you convert an application deployment into a stack file using a YAML compose file with "docker stack deploy"?

A. docker stack deploy -c <compose-file> <stack-name>
<!-- class="correct" -->

B. docker stack create -f <compose-file> <stack-name>

C. docker stack init -c <compose-file> <stack-name>

D. docker stack setup --file <compose-file> <stack-name>


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/stack/

To convert an application deployment into a stack file using a YAML compose file, you use the 'docker stack deploy' command with the '-c' option followed by the path to the compose file and the name of the stack. This command deploys a new stack or updates an existing stack.

</article>
</details>

1. You are tasked with deploying a new service in an existing Docker Swarm stack. Which sequence of commands would you use to achieve this?

A. 1. docker stack deploy -c <compose-file> <stack-name> 2. docker service create <service-name>

B. 1. docker service create <service-name> 2. docker stack deploy -c <compose-file> <stack-name>

C. 1. docker stack create <stack-name> 2. docker service deploy <service-name>

D. 1. docker stack ls 2. docker stack deploy -c <compose-file> <stack-name> 3. docker service ls
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/stack/

To deploy a new service in an existing Docker Swarm stack, you would first list the existing stacks using 'docker stack ls'. Then, you would deploy the service using the 'docker stack deploy' command with the appropriate compose file and stack name. Finally, you can verify the service deployment with 'docker service ls'.

</article>
</details>

1. In the context of Docker Swarm, which of the following statements is true regarding the 'docker service' command?

A. The 'docker service' command can be executed on any node within the Swarm.

B. The 'docker service' command is used to manage individual containers within a service.

C. The 'docker service' command is only related to standalone Docker and not Swarm.

D. The 'docker service' command is a cluster management command and must be executed on a swarm manager node.
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/service/

The 'docker service' command is used to manage Swarm services. It is a cluster management command and must be executed on a swarm manager node. Swarm manager nodes are responsible for the orchestration and cluster management, and only they can execute commands that manage the cluster.

</article>
</details>

1. How can you increase the number of replicas for a service named 'web' to 5 in Docker Swarm?

A. docker service scale web=5

B. docker service replicas web=5

C. docker service update --replicas=5 web
<!-- class="correct" -->

D. docker swarm update web --replicas=5


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/service_update/

To increase the number of replicas for a service in Docker Swarm, you use the 'docker service update' command with the '--replicas' option. The correct syntax is 'docker service update --replicas=<number_of_replicas> <service_name>'.

</article>
</details>

1. When creating a new service in Docker, which option allows you to publish a port as a node port?

A. --expose-port

B. --open-port

C. --port-forward

D. --publish
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/service_create/

The '--publish' or '-p' option allows you to publish a port as a node port when creating a new service in Docker. This option makes the service accessible externally through the specified port.

</article>
</details>

1. Which command can be used to perform a rolling restart of a Docker service without making any changes to the service parameters?

A. docker service restart --force

B. docker service refresh

C. docker service update --force
<!-- class="correct" -->

D. docker service reset


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/service_update/

The 'docker service update --force' command can be used to perform a rolling restart of a service without making any changes to the service parameters. The '--force' flag causes the service's tasks to be shut down and replaced with new ones even if none of the other parameters would normally cause that to happen.

</article>
</details>

1. What is the primary purpose of a Dockerfile in Docker image creation?

A. To define the runtime environment variables for a container.

B. To specify the network settings for a Docker container.

C. To automate the deployment of applications inside a container.

D. To define a set of instructions for creating a Docker image.
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/builder/

A Dockerfile is a text file that contains a set of instructions used to create a Docker image. These instructions include setting up the operating system, installing applications, and configuring settings. It does not define runtime environment variables, specify network settings, or automate the deployment of applications inside a container.

</article>
</details>

1. In a Dockerfile, what is the primary difference between the 'ADD' and 'COPY' commands?

A. 'ADD' can only copy files, while 'COPY' can copy files and directories.

B. 'ADD' requires a URL as the source, while 'COPY' requires a local file or directory.

C. 'ADD' can fetch files from URLs and has the capability to auto-extract tarball archives, while 'COPY' only copies files or directories from the local context.
<!-- class="correct" -->

D. 'COPY' can fetch files from URLs, while 'ADD' can only copy from the local context.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/builder/#add

The 'ADD' command in a Dockerfile can handle URLs as a source and can also auto-extract tarball archives. On the other hand, 'COPY' is a more straightforward command that only copies files or directories from the local context to the container.

</article>
</details>

1. Which of the following is NOT a main component of a Dockerfile?

A. FROM

B. RUN

C. CMD

D. EXECUTE
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/builder/

The main components of a Dockerfile include 'FROM', 'RUN', and 'CMD'. 'EXECUTE' is not a valid Dockerfile instruction.

</article>
</details>

1. How can you ensure that a Docker image is efficient when created via a Dockerfile?

A. Always use the latest version of the base image, regardless of its size.

B. Include all development tools and packages in the final image.

C. Use multi-stage builds to separate build-time and runtime dependencies.
<!-- class="correct" -->

D. Always run the 'docker prune' command before building the image.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/develop/develop-images/multistage-build/

Multi-stage builds allow you to use multiple `FROM` statements in your Dockerfile. Each `FROM` instruction can use a different base image, and only the final stage will be kept. This allows you to separate build-time dependencies from runtime dependencies, thus reducing the size of the final image.

</article>
</details>

1. Which of the following CLI commands correctly demonstrates how to list all Docker images and then delete a specific image by its ID?

A. docker list-images && docker delete <IMAGE_ID>

B. docker images && docker rmi <IMAGE_ID>
<!-- class="correct" -->

C. docker show-images && docker remove-image <IMAGE_ID>

D. docker display-images && docker del <IMAGE_ID>


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/cli/

The 'docker images' command lists all Docker images on the host, and the 'docker rmi' command removes a specific image by its ID. The other options are not valid Docker CLI commands.

</article>
</details>

1. Which statement best describes the purpose and usage of the "prune" and "rmi" CLI commands in Docker?

A. "prune" is used to list all Docker images, while "rmi" is used to remove a specific image by its ID.

B. "prune" is used to remove all unused Docker images, while "rmi" is used to list all Docker images.

C. "prune" is used to remove all unused Docker images, while "rmi" is used to remove a specific image by its ID.
<!-- class="correct" -->

D. "prune" is used to remove a specific image by its ID, while "rmi" is used to list all Docker images.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/cli/

The 'docker image prune' command removes all unused images, while the 'docker rmi' command removes a specific image by its ID or name. The other options are not accurate descriptions of the commands' functionalities.

</article>
</details>

1. When inspecting a Docker image using the CLI, which command correctly demonstrates the use of the "filter" and "format" options to report specific attributes?

A. docker inspect --filter='{{.RepoTags}}' --format='{{.Id}}' IMAGE_NAME

B. docker inspect IMAGE_NAME --filter='{{.RepoTags}}' --format='{{.Id}}'

C. docker inspect IMAGE_NAME --format='{{.Id}}' --filter='{{.RepoTags}}'
<!-- class="correct" -->

D. docker inspect --format='{{.Id}}' IMAGE_NAME --filter='{{.RepoTags}}'


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/cli/

The 'docker inspect' command is used to view detailed information about Docker objects, including images. The '--format' option allows you to format the output using Go templating, while the '--filter' option is not directly applicable to 'docker inspect'. The correct usage in this context is to use the '--format' option to specify the desired attributes.

</article>
</details>

1. Which of the following best describes the process and significance of tagging a Docker image?

A. Tagging an image allows you to assign a version number to the image, but it doesn't affect the image's content.
<!-- class="correct" -->

B. Tagging an image changes the content of the image to match the specified version.

C. Tagging an image is a mandatory step before pushing it to a Docker registry.

D. Tagging an image compresses it for optimized storage in a Docker registry.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/cli/

Tagging a Docker image provides a way to version the image. It is a reference to a specific image and does not change the content of the image. Tags are useful for maintaining different versions of an image or for using meaningful names instead of just image IDs.

</article>
</details>

1. Which Docker CLI command allows you to apply a specific file to create a Docker image?

A. docker apply

B. docker file-apply

C. docker build
<!-- class="correct" -->

D. docker create-image


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/cli/

The 'docker build' command is used to build Docker images from a Dockerfile and a 'context'. A build's context is the set of files located in the specified PATH or URL. The build process can refer to any of the files in the context. The 'docker build' command processes this context and uses the Dockerfile to produce the image.

</article>
</details>

1. Which of the following is NOT considered a best practice when working with Docker registries?

A. Using Registry storage drivers to enable support for specific cloud providers.

B. Regularly authenticating with the Docker Registry using token authentication.

C. Storing sensitive information in plain text within the registry.
<!-- class="correct" -->

D. Facilitating the distribution of images to the Docker engine using the Registry API.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/reference/

Sensitive information should never be stored in plain text within the registry or any other platform. It poses a security risk and can lead to unauthorized access or data breaches. The other options are considered best practices when working with Docker registries.

</article>
</details>

1. When planning for a Docker installation in a production environment, which of the following factors is LEAST relevant for determining the sizing requirements?

A. The I/O patterns of applications that will run in containers.

B. The network latency between the Docker daemon and the Docker Registry.

C. The expected rate of image pulls and pushes to the Docker Registry.

D. The default logging level set for the Docker daemon.
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/reference/

While I/O patterns, network latency, and the rate of image operations can all impact the performance and sizing requirements of a Docker installation, the default logging level of the Docker daemon, though it can affect disk usage, is generally a less critical factor in determining overall sizing requirements for a production environment.

</article>
</details>

1. Which command is used to push all tags of a local Docker image to a registry?

A. docker push --all

B. docker image push --all-tags
<!-- class="correct" -->

C. docker commit --all-tags

D. docker save --all-tags


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/push/

The 'docker image push --all-tags' command is used to push all tags of a local Docker image to a registry. This allows you to push multiple versions or variations of an image at once.

</article>
</details>

1. How do you configure a Docker container to use the Splunk logging driver?

A. $ docker run -it --log-driver splunk alpine ash

B. $ docker run -it --log-driver=splunk alpine ash
<!-- class="correct" -->

C. $ docker run -it --logging-driver splunk alpine ash

D. $ docker run -it --logging-driver=splunk alpine ash


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/config/containers/logging/configure/

To configure a Docker container to use a specific logging driver, you can use the '--log-driver' flag followed by the name of the logging driver. In this case, the correct syntax is '--log-driver=splunk'.

</article>
</details>

1. When initializing a Docker Swarm, which command option is used to specify the address or interface to advertise the swarm manager to other nodes in the swarm?

A. --advertise-addr
<!-- class="correct" -->

B. --manager-addr

C. --swarm-addr

D. --init-addr


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/swarm/

The '--advertise-addr' option is used when initializing a Docker Swarm to specify the address or interface to advertise the swarm manager to other nodes in the swarm. This address must be reachable by other nodes in the swarm.

</article>
</details>

1. In a Docker Swarm, you have a manager node that has been compromised. What is the recommended first step to ensure the integrity of the swarm?

A. Immediately shut down the entire swarm.

B. Promote another worker node to be the manager.

C. Demote the compromised manager node.
<!-- class="correct" -->

D. Isolate the compromised manager node from the network and analyze it.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/node/

If a manager node is believed to be compromised, the first recommended step is to demote it. This ensures that it no longer has control over the swarm while preserving the integrity and functionality of the swarm. After demotion, further actions like isolating and analyzing the node can be taken.

</article>
</details>

1. When setting up a backup schedule for a Docker swarm, which of the following is the most recommended approach?

A. Use the `docker swarm backup` command.

B. Manually copy the contents of the swarm directory to a backup location.

C. Use a third-party backup tool integrated with Docker's API.
<!-- class="correct" -->

D. Rely on the automatic backups created by Docker every 24 hours.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/swarm/

Docker does not provide a built-in `docker swarm backup` command. Instead, it's recommended to use third-party backup tools that integrate with Docker's API to ensure consistent and reliable backups of the swarm's state and data.

</article>
</details>

1. In a Docker environment with multiple teams working on different projects, which of the following is the primary reason for implementing a granular role-based access control (RBAC) system for users and teams?

A. To ensure that each team can customize the Docker UI according to their preferences.

B. To facilitate easier collaboration between teams by allowing unrestricted access to all resources.

C. To ensure that resources, such as specific containers or images, are only accessible to those with the necessary permissions, thereby safeguarding sensitive data and operations.
<!-- class="correct" -->

D. To reduce the computational overhead by limiting the number of active users in the Docker environment.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/cli/

In a multi-team Docker environment, implementing a granular RBAC system is crucial for security. It ensures that specific resources are only accessible by authorized individuals or teams, preventing potential unauthorized access or misuse of sensitive data and operations.

</article>
</details>

1. Considering the various platforms and architectures supported by Docker Engine, which of the following combinations is NOT officially supported by Docker for installation?

A. Docker Desktop for Mac (macOS) on arm64 (Apple Silicon)

B. Docker on CentOS for ppc64le architecture

C. Docker on Raspberry Pi OS for x86_64 / amd64 architecture
<!-- class="correct" -->

D. Docker on Ubuntu for s390x architecture


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/install/

Raspberry Pi OS primarily supports the ARM architecture. Docker on Raspberry Pi OS for x86_64 / amd64 architecture is not an officially supported combination.

</article>
</details>

1. How do you ensure that a Docker daemon has the appropriate rights to access specific images on a registry?

A. Use the `docker access` command with the registry URL.

B. Set the `docker group` to root equivalent.

C. Specify the registry domain in the `credHelpers` section of the Docker configuration file.

D. Use the `docker login` command with the appropriate credentials.
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/login/

To ensure that a Docker daemon has the appropriate rights to access specific images on a registry, you need to use the `docker login` command with the appropriate credentials. When you log in, the command stores credentials in `$HOME/.docker/config.json` on Linux or `%USERPROFILE%/.docker/config.json` on Windows. The Docker Engine can also keep user credentials in an external credential store for added security.

</article>
</details>

1. In Docker Swarm mode, what happens when a service is set to run 10 replicas of a container, and a worker machine hosting two of those replicas crashes?

A. The crashed replicas are ignored, and the service continues with 8 replicas.

B. The service stops until the worker machine is restored.

C. The swarm manager creates two new replicas on another available worker.
<!-- class="correct" -->

D. The service is terminated and needs to be manually restarted.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/swarm/

In Docker Swarm mode, the swarm manager node constantly monitors the cluster state and reconciles any differences between the actual state and the expressed desired state. If a service is set to run a certain number of replicas and some of them crash, the swarm manager will create new replicas to replace the ones that crashed, ensuring the desired state is maintained.

</article>
</details>

1. Within Docker's Container Network Model (CNM), which component is responsible for ensuring that containers can communicate with each other and other network endpoints?

A. The IPAM driver, which allocates IP addresses.

B. The network driver, which provides the networking capabilities.
<!-- class="correct" -->

C. The storage driver, which manages data storage.

D. The logging driver, which handles logs.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/network/

In Docker's Container Network Model (CNM), the network driver is responsible for providing the necessary networking capabilities to ensure containers can communicate with each other and other network endpoints. The IPAM driver, on the other hand, is primarily concerned with IP address management.

</article>
</details>

1. Which of the following is NOT a built-in network driver in Docker?

A. bridge
<!-- class="correct" -->

B. overlay

C. macvlan

D. netlink
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/network/

Docker provides several built-in network drivers, such as 'bridge', 'overlay', and 'macvlan'. 'netlink' is not a built-in network driver in Docker.

</article>
</details>

1. Which of the following describes the type of traffic that flows between the Docker engine and a Docker registry when pushing an image?

A. Traffic related to container runtime statistics.

B. Traffic related to Docker CLI commands.

C. Traffic related to image distribution and storage.
<!-- class="correct" -->

D. Traffic related to Docker Swarm node management.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/cli/

When pushing an image, the traffic between the Docker engine and the Docker registry pertains to the distribution and storage of the image. This involves transferring the image layers and metadata to the registry for storage and subsequent retrieval.

</article>
</details>

1. Why is port publishing essential when deploying applications in Docker containers?

A. To increase the memory allocation for the container.

B. To ensure that the application inside the container can communicate with external services.

C. To make the application accessible from outside the container.
<!-- class="correct" -->

D. To encrypt the data traffic between containers.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/cli/

Port publishing in Docker allows the application inside the container to be accessible from outside the container. Without publishing the port, the application would only be accessible from within the container itself, limiting its usability.

</article>
</details>

1. Given a scenario where you need to isolate containers within their own network but still allow them to communicate with each other, which built-in Docker network driver would be most appropriate to use?

A. host

B. none

C. overlay

D. bridge


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/network/

The 'bridge' network driver is the default network driver for standalone containers. It provides a private internal IP to each container and allows them to communicate with each other and the host machine. This makes it suitable for scenarios where containers need to be isolated within their own network but still need to communicate with each other.

</article>
</details>

1. After publishing a port in Docker, how can you verify that an application is accessible externally?

A. Use the 'docker inspect' command to check the port bindings.

B. Check the application's logs for any external access entries.

C. Use the 'docker port' command followed by the container name and private port.
<!-- class="correct" -->

D. Access the application via a web browser using the published port.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/port/

The 'docker port' command allows you to list port mappings or a specific mapping for a container. By using this command followed by the container name and the private port, you can determine the external port to which the application is mapped.

</article>
</details>

1. What are the advantages of deploying a service on a Docker overlay network compared to other network types?

A. It allows for automatic IP address assignment.

B. It provides built-in load balancing for service discovery.

C. It restricts communication between containers to the same host.

D. It enhances the security by encrypting container data traffic.
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/network/overlay/

Docker overlay networks, when used with Swarm mode, encrypt the traffic between the services using IPSEC, which provides a secure method for containers on different nodes to communicate with each other.

</article>
</details>

1. How does the Kubernetes container network model differ from Docker's Container Network Model (CNM)?

A. Kubernetes uses the bridge network by default, while Docker uses the overlay network.

B. Kubernetes does not support network plugins, while Docker does.

C. Kubernetes requires all pods to be on the same subnet, while Docker containers can be on different subnets.

D. Kubernetes uses a flat network space where every Pod can communicate with every other Pod, while Docker uses segmented networks.
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/reference/

Kubernetes employs a flat network model, ensuring that all pods can communicate with each other without NAT. Docker's CNM, on the other hand, provides various networking modes, including bridge, overlay, and host, which can result in segmented networks.

</article>
</details>

1. What are the primary tasks associated with Docker security administration?

A. Configuring container runtime to use a custom DNS server.

B. Setting up automated build pipelines for Docker images.

C. Managing user access and roles in Docker Hub.

D. Implementing image signing and verifying the integrity of images.
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/security/trust/content_trust/

One of the primary tasks associated with Docker security administration is ensuring the integrity and authenticity of images. This can be achieved by implementing image signing and verifying the signatures before deploying them. While the other options are important tasks in Docker, they are not directly related to security administration.

</article>
</details>

1. Which of the following best describes the significance and process of signing a Docker image using Docker Content Trust (DCT)?

A. DCT allows image publishers to add metadata to images, enhancing searchability in Docker Hub.

B. DCT encrypts the image content, ensuring that it cannot be read without the appropriate decryption key.

C. DCT provides a mechanism for image publishers to sign their images, allowing consumers to verify both the integrity and the publisher of the image.
<!-- class="correct" -->

D. DCT compresses the image, reducing its size for faster downloads from Docker Hub.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/security/trust/content_trust/

Docker Content Trust (DCT) offers the ability to use digital signatures for data sent to and received from Docker registries. These signatures enable client-side or runtime verification of the integrity and publisher of specific image tags. Image publishers can sign their images, and consumers can ensure the images they pull are signed, ensuring trust in the content.

</article>
</details>

1. Which of the following best describes the default security measures in place for the Docker engine?

A. Docker containers run with full root privileges by default, granting them unrestricted access to the host system.

B. Docker uses TOMOYO, AppArmor, SELinux, and GRSEC simultaneously to provide layered security for containers.

C. Docker starts containers with a restricted set of capabilities, ensuring that "root" within a container has fewer privileges than the real "root".
<!-- class="correct" -->

D. Docker containers, by default, can freely communicate with each other and the Docker host without any network restrictions.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/security/

By default, Docker starts containers with a restricted set of capabilities, turning the binary "root/non-root" dichotomy into a fine-grained access control system. This means that "root" within a container has much less privileges than the real "root". This reduces the vectors of attack by malicious users considerably. Docker drops all capabilities except those needed, using an allowlist approach.

</article>
</details>

1. Which of the following best describes the default security configurations for Docker swarm?

A. Docker swarm uses plain text communication between nodes by default.

B. Docker swarm requires manual setup of TLS certificates for secure communication.

C. Docker swarm uses mutual TLS (mTLS) for node authentication and encrypted communication by default.
<!-- class="correct" -->

D. Docker swarm relies on external tools for node authentication and encrypted communication.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/swarm/

By default, Docker swarm uses mutual TLS (mTLS) to ensure both node authentication and encrypted communication between nodes in the swarm. This ensures that all communication between nodes in the swarm is secure and comes from a recognized member of the swarm.

</article>
</details>

1. What is the primary purpose of creating a UCP client bundle?

A. To backup the UCP configuration.

B. To authenticate a client to the UCP server using client certificates.
<!-- class="correct" -->

C. To deploy services directly from the UCP web UI.

D. To upgrade the UCP version.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/datacenter/ucp/2.2/guides/user/access-ucp/cli-based-access/

A UCP client bundle is primarily used to authenticate a client to the UCP server. It contains client certificates and configuration files that allow users to interact with the UCP server securely using the Docker CLI without needing to authenticate again.

</article>
</details>

1. Which of the following is NOT a recommended security best practice when working with Docker images?

A. Each container should have multiple responsibilities.
<!-- class="correct" -->

B. Containers should be immutable, lightweight, and fast.

C. Use a small base image (such as Linux Alpine).

D. Avoid installing unnecessary packages.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/develop/security-best-practices/

One of the best practices for Docker security is to ensure that each container has only one responsibility. This makes containers easier to manage, scale, and secure. Having multiple responsibilities in a single container goes against the principle of containerization and can introduce complexities and vulnerabilities.

</article>
</details>

1. After signing a Docker image, how can you verify its authenticity?

A. Use the 'docker trust verify' command.

B. Use the 'docker trust inspect' command.
<!-- class="correct" -->

C. Check the image's SHA256 digest in the Docker Hub.

D. Review the image's metadata in the Dockerfile.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/security/trust/

The 'docker trust inspect' command provides detailed information about the trust and signatures of an image, allowing users to verify the authenticity of the image. It displays the signatures for the image tags and the signers.

</article>
</details>

1. How does Docker manage access control for users and containers?

A. By using a built-in role-based access control (RBAC) system.

B. By relying solely on the host operating system's user permissions.

C. By using an external third-party access control system.

D. By using authorization plugins that approve or deny requests to the Docker daemon.
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/extend/plugins_authorization/

Docker uses authorization plugins to manage access control. These plugins approve or deny requests to the Docker daemon based on the current authentication context and the command context. This allows for granular access policies and greater control over access to the Docker daemon.

</article>
</details>

1. Which of the following is NOT a security layer in Docker?

A. Kernel namespaces to isolate processes.

B. Control Groups (cgroups) for resource accounting and limiting.

C. Docker Content Trust for image signature verification.

D. Docker Firewall to block external malicious traffic.
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/security/

Docker provides multiple layers of security such as Kernel namespaces for process isolation, Control Groups (cgroups) for resource management, and Docker Content Trust for image signature verification. However, there is no feature specifically named 'Docker Firewall' for blocking external malicious traffic in the context provided.

</article>
</details>

1. How does Docker determine which graph driver to use with different operating systems?

A. Docker uses a fixed graph driver for each operating system.

B. Docker allows users to specify any graph driver regardless of the operating system.

C. Docker automatically selects the most appropriate graph driver based on the host operating system.
<!-- class="correct" -->

D. Docker relies on third-party plugins to determine the graph driver.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/extend/plugins_graphdriver/

Docker is designed to automatically select the most suitable graph driver based on the host operating system. While users can specify a graph driver, Docker's default behavior is to choose the best match for the OS to ensure compatibility and performance.

</article>
</details>

1. In a Docker environment, which type of storage is described as being massively scalable, referenced by an object ID, and primarily designed for scalability, making it a popular choice for public cloud providers?

A. File System Storage

B. Block Storage

C. Object Storage
<!-- class="correct" -->

D. Union File System Storage


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*

Object storage is different from file system storage or block storage. Data in object storage is stored as an object and is referenced by an object ID. It is designed primarily for scalability, making it a popular choice for public cloud providers. Object storage is massively scalable and allows for a high degree of flexibility with regard to associating attributes with objects.

</article>
</details>

1. Which of the following is NOT a recommended best practice for managing storage in a Docker environment?

A. Using volumes to persist data in Docker containers and services.

B. Using bind mounts for sharing configuration files from the host machine to containers.

C. Storing sensitive information in a container's writable layer.
<!-- class="correct" -->

D. Using tmpfs mounts for data that should not persist on the host machine or within the container.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/storage/

Storing sensitive information in a container's writable layer is not recommended because it can increase the size of the container and is less efficient. Instead, it's better to use volumes or tmpfs mounts to manage such data. Volumes are the preferred way to persist data in Docker, and tmpfs mounts are best for data that shouldn't persist.

</article>
</details>

1. How can you backup data from a Docker container?

A. Use the 'docker container save' command to save container data.

B. Directly copy data from the container's filesystem using the host OS tools.

C. Commit the container to an image using 'docker container commit' and then push the image to Docker Hub or save it to a local tar file.
<!-- class="correct" -->

D. Use the 'docker container export' command to export container data to an external storage.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/desktop/backup-and-restore/

To backup data from a Docker container, you can commit the container to an image using the 'docker container commit' command. This stores the container filesystem changes and some of the container's configuration. Once committed, you can either push the image to Docker Hub using 'docker push' or save it to a local tar file using 'docker image save'. Note that changes in volumes attached to the container are not included in the image and must be backed up separately.

</article>
</details>

1. Which of the following best describes the lifecycle of a Docker volume?

A. Volumes are automatically deleted when the container using them is stopped.

B. Volumes can only be created when starting a container and are deleted when the container is removed.

C. Volumes are created using the Docker CLI or when starting a container with a not-yet-created volume, and they persist beyond the lifecycle of a container.
<!-- class="correct" -->

D. Volumes are temporary storage mechanisms and their data is cleared every time the Docker daemon restarts.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/storage/volumes/

Docker volumes are designed to persist data beyond the lifecycle of a container. They can be created using the Docker CLI with commands like 'docker volume create' or automatically when starting a container that specifies a volume that doesn't yet exist. Unlike the container's writable layer, data in the volume doesn't increase the size of the container and exists outside the lifecycle of the container.

</article>
</details>

1. Which of the following is the recommended method for storing write-intensive data in Docker to ensure optimal performance and scalability?

A. Store the data in the container's writable layer.

B. Use Docker storage drivers to handle the data.

C. Use Docker volumes.
<!-- class="correct" -->

D. Store the data in the image's read-only layers.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/storage/storagedriver/

For write-intensive applications, it's recommended not to store the data in the container. Instead, Docker volumes should be used. They are independent of the running container and are designed to be efficient for I/O. Volumes can also be shared among containers and do not increase the size of the container's writable layer.

</article>
</details>

1. When creating a service using the 'docker service create' command, how can you specify environment variables for all tasks in a service?

A. Using the --env-var flag followed by the environment variable.

B. Using the --set-env flag followed by the environment variable.

C. Using the --env flag followed by the environment variable.
<!-- class="correct" -->

D. Using the --environment flag followed by the environment variable.


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

*  https://docs.docker.com/engine/reference/commandline/service_create/

The 'docker service create' command allows you to set environment variables for all tasks in a service using the --env flag followed by the environment variable. For example: '--env MYVAR=foo'.

</article>
</details>

</div>