<h4 class="text-center m-8">

[**Source**](https://www.examtopics.com/exams/mirantis/dca/view/)

</h4>


<div id="questions-show-answers" class="container hide-until-load">

1. What is the difference between the ADD and COPY Dockerfile instructions? (Choose two.)

A. ADD supports regular expression handling while COPY does not.

B. COPY supports compression format handling while ADD does not.

C. ADD supports compression format handling while COPY does not.
<!-- class="correct" -->

D. COPY supports regular expression handling while ADD does not.

E. ADD supports remote URL handling while COPY does not.
<!-- class="correct" -->



2. When an application being managed by UCP fails, you would like a summary of all requests made to the UCP API in the hours leading up to the failure. What must be configured correctly beforehand for this to be possible?

A. UCP audit logs must be set to the ‘metadata’ or ‘request’ level.
<!-- class="correct" -->

B. All engines in the cluster must have their log driver set to the ‘metadata’ or ‘request’ level.

C. UCP logging levels must be set to the ‘info’ or ‘debug’ level.

D. Set the logging level in the config object for the ucp-kube-api-server container to warning or higher.



3. A user’s attempts to set the system time from inside a Docker container are unsuccessful.\ Could this be blocking this operation. SELinux

A. Yes
<!-- class="correct" -->

B. No



4. One of several containers in a pod is marked as unhealthy after failing its livenessProbe many times. Is this the action taken by the orchestrator to fix the unhealthy container?
The unhealthy container is restarted.

A. Yes
<!-- class="correct" -->

B. No



5. Is this a way to configure the Docker engine to use a registry without a trusted TLS certificate?
Set INSECURE_REGISTRY in the ‘/etc/docker/default’ configuration file.

A. Yes

B. No
<!-- class="correct" -->



6. Is this a way to configure the Docker engine to use a registry without a trusted TLS certificate? Set and export the IGNORE_TLS environment variable on the command line.

A. Yes

B. No
<!-- class="correct" -->



7. Is this a way to configure the Docker engine to use a registry without a trusted TLS certificate? Pass the ‘--insecure registry’ flag to the daemon at run time.

A. Yes
<!-- class="correct" -->

B. No



8. Is this an advantage of multi-stage builds? better logical separation of Dockerfile instructions for increased readability

A. Yes
<!-- class="correct" -->

B. No



9. Is this an advantage of multi-stage builds? better caching when building Docker images

A. Yes

B. No
<!-- class="correct" -->



10. You add a new user to the engineering organization in DTR. Will this action grant them read/write access to the engineering/api repository? Add the user directly to the list of users with read/write access under the repository’s Permissions tab.

A. Yes
<!-- class="correct" -->

B. No



11. You add a new user to the engineering organization in DTR. Will this action grant them read/write access to the engineering/api repository? Mirror the engineering/api repository to one of the user’s own private repositories.

A. Yes

B. No
<!-- class="correct" -->



12. You add a new user to the engineering organization in DTR. Will this action grant them read/write access to the engineering/api repository? Add them to a team in the engineering organization that has read/write access to the engineering/api repository.

A. Yes
<!-- class="correct" -->

B. No



13. Seven managers are in a swarm cluster. Is this how should they be distributed across three datacenters or availability zones? 3-2-2

A. Yes
<!-- class="correct" -->

B. No



14. Seven managers are in a swarm cluster. Is this how should they be distributed across three datacenters or availability zones? 5-1-1

A. Yes

B. No
<!-- class="correct" -->



15. Is this a function of UCP? image role-based access control

A. Yes
<!-- class="correct" -->

B. No



16. Is this a function of UCP? enforces the deployment of signed images to the cluster

A. Yes
<!-- class="correct" -->

B. No



17. Is this the purpose of Docker Content Trust? Enable mutual TLS between the Docker client and server.

A. Yes

B. No
<!-- class="correct" -->



18. Is this the purpose of Docker Content Trust? Sign and verify image tags.

A. Yes
<!-- class="correct" -->

B. No



19. Is this the purpose of Docker Content Trust? Indicate an image on Docker Hub is an official image.

A. Yes

B. No
<!-- class="correct" -->



20. In the context of a swarm mode cluster, does this describe a node? an instance of the Docker CLI connected to the swarm

A. Yes

B. No
<!-- class="correct" -->



21. In the context of a swarm mode cluster, does this describe a node? a virtual machine participating in the swarm

A. Yes
<!-- class="correct" -->

B. No



22. Is this a supported user authentication method for Universal Control Plane? SAML

A. Yes
<!-- class="correct" -->

B. No



23. Is this a supported user authentication method for Universal Control Plane? X.500

A. Yes

B. No
<!-- class="correct" -->



24. Is this statement correct? A Dockerfile provides instructions for building a Docker image.

A. Yes
<!-- class="correct" -->

B. No



25. Is this statement correct? A Dockerfile stores persistent data between deployments of a container.

A. Yes

B. No
<!-- class="correct" -->



26. Will this command ensure that overlay traffic between service tasks is encrypted? docker network create -d overlay --secure <network-name>

A. Yes
<!-- class="correct" -->

B. No



27. An application image runs in multiple environments, with each environment using different certificates and ports. Is this a way to provision configuration to containers at runtime? Create a Dockerfile for each environment, specifying ports and Docker secrets for certificates.

A. Yes

B. No
<!-- class="correct" -->



28. Will this sequence of steps completely delete an image from disk in the Docker Trusted Registry? Delete the image and delete the image repository from Docker Trusted Registry

A. Yes

B. No
<!-- class="correct" -->



29. Will this sequence of steps completely delete an image from disk in the Docker Trusted Registry? Delete the image and run garbage collection on the Docker Trusted Registry.

A. Yes
<!-- class="correct" -->

B. No



30. Does this describe the role of Control Groups (cgroups) when used with a Docker container? user authorization to the Docker API

A. Yes

B. No
<!-- class="correct" -->



31. Does this describe the role of Control Groups (cgroups) when used with a Docker container? role-based access control to clustered resources

A. Yes

B. No
<!-- class="correct" -->



32. Does this describe the role of Control Groups (cgroups) when used with a Docker container? accounting and limiting of resources

A. Yes
<!-- class="correct" -->

B. No

</div>