<h4 class="text-center m-8">

[**Source**](https://www.pass4success.com/docker/exam/dca)

</h4>



<div id="questions-show-answers" class="container hide-until-load">

1. The Kubernetes yaml shown below describes a networkPolicy. Will the networkPolicy BLOCK this trafftc? Solution. a request issued from a pod bearing the tier: api label, to a pod bearing the tier: backend label

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

B. No
<!-- class="correct" -->

<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

* https://kubernetes.io/docs/concepts/services-networking/network-policies/

The provided Kubernetes NetworkPolicy YAML configuration indicates that the policy applies to pods with the label tier: backend in the default namespace1. The ingress rule allows traffic from pods with the label tier: api1. Therefore, a request issued from a pod bearing the tier: api label to a pod bearing the tier: backend label will not be blocked by this networkPolicy1. This is because the networkPolicy explicitly allows ingress from pods with the tier: api label1. For more information on Kubernetes Network

</article>
</details>




2. In Docker Trusted Registry, is this how a user can prevent an image, such as 'nginx:latest', from being overwritten by another user with push access to the repository? Solution: Keep a backup copy of the image on another repository.

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

* https://stackoverflow.com/questions/62539266/is-there-a-way-to-prevent-overwriting-existing-tags-images-in-azure-container-re

Keeping a backup copy of the image on another repository is not how a user can prevent an image, such as 'nginx:latest', from being overwritten by another user with push access to the repository. This approach does not prevent the original image from being overwritten, it only provides a way to restore it from another source. However, this may not be reliable or efficient, as the backup repository may not be in sync with the original one, or may not be accessible at all times.To prevent an image from being overwritten by another user, the user can use the DTR web UI to make the tag immutable1. This feature allows the user to lock a specific tag, so that no one can push a new image with the same tag to the repository.This ensures that the image is always consistent and secure1.

</article>
</details>



3. In Docker Trusted Registry, is this how a user can prevent an image, such as 'nginx:latest', from being overwritten by another user with push access to the repository? Solution: Tag the image with 'nginx:immutable'.

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

* https://stackoverflow.com/questions/66864753/redirecting-to-docker-registry-with-nginx

Tagging the image with 'nginx:immutable' isnothow a user can prevent an image, such as 'nginx:latest', from being overwritten by another user with push access to the repository. Tagging the image with 'nginx:immutable' will only create a new tag for the image, but it will not prevent the original tag from being overwritten.To prevent an image tag from being overwritten in Docker Trusted Registry, the user can use the DTR web UI to make the tag immutable1.This will prevent anyone from pushing a new image with the same tag, even if they have push access to the repository1.Alternatively, the user can also use the DTR API to make the tag immutable2.Reference:Prevent tags from being overwritten), DTR API reference)

</article>
</details>


4. Is this a way to configure the Docker engine to use a registry without a trusted TLS certificate? Solution: Set IGNORE_TLS in the 'daemon.json' configuration file.

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

* https://stackoverflow.com/questions/50768317/docker-pull-certificate-signed-by-unknown-authority

* https://docs.docker.com/engine/security/certificates/

* https://stackoverflow.com/questions/58476218/unable-to-push-to-private-docker-registry-via-tls

* https://forums.docker.com/t/how-to-build-docker-registry-without-ssl/119052

This is not a way to configure the Docker engine to use a registry without a trusted TLS certificate. There is no such option as IGNORE_TLS in the daemon.json configuration file.The daemon.json file is used to configure various aspects of the Docker engine, such as logging, storage, networking, and security1.To use a registry without a trusted TLS certificate, you need to either add the certificate to the trusted root certificates of the system, or configure the Docker engine to allow insecure registries2.To add the certificate to the trusted root certificates, you need to copy the certificate file to the /etc/docker/certs.d/<registry-hostname>/ directory on every Docker host2.To configure the Docker engine to allow insecure registries, you need to add the registry hostname or IP address to the ''insecure-registries'' array in the daemon.json file3. For example:

```json
{ "insecure-registries" : ["myregistry.example.com:5000"] }
```

Note that using insecure registries is not recommended, as it exposes you to potential man-in-the-middle attacks and data corruption3.You should always use a registry with a trusted TLS certificate, or use Docker Content Trust to sign and verify your images4.


</article>
</details>




5. You are pulling images from a Docker Trusted Registry installation configured to use self-signed certificates, and this error appears: `x509: certificate signed by unknown authority.` You already downloaded the Docker Trusted Registry certificate authority certificate from https://dtr.example.com/ca. How do you trust it? (Select two.)


A. Pass '-trust-certificate ca.crt to the Docker client.

B. Place the certificate in '/etc/docker/dtr/dtr.example.com.crt' and restart the Docker daemon on all cluster nodes.

C. Place the certificate in /etc/docker/certs.d/dtr.example.com/ca.crt' on all cluster nodes.
<!-- class="correct" -->

D. Pass -- insecure-registry to the Docker client.

E. Place the certificate in your OS certificate path, trust the certificate systemwide, and restart the Docker daemon across all cluster nodes.
<!-- class="correct" -->


<details>
<summary>
    <article class="bg-purple-900">
        Information
    </article>
</summary>
<article class="bg-purple-900">

To trust a self-signed certificate from a Docker Trusted Registry (DTR), you need to place the certificate in the appropriate location on all cluster nodes and restart the Docker daemon. There are two possible locations for the certificate, depending on your OS and Docker version1:

* /etc/docker/certs.d/dtr.example.com/ca.crt: This is the preferred location for Linux systems and Docker versions 1.13 and higher. This directory is scanned by Docker for certificates and keys for each registry domain2.

* Your OS certificate path: This is the fallback location for other OSes and Docker versions. You need to find the certificate store for your OS and copy the certificate there. You also need to trust the certificate system-wide, which may require additional steps depending on your OS3.

The other options are not correct because:

* Passing '-trust-certificate ca.crt to the Docker client is not a valid option. There is no such flag for the Docker client4.

* Placing the certificate in '/etc/docker/dtr/dtr.example.com.crt' is not a valid location. The certificate should be in the /etc/docker/certs.d directory, not the /etc/docker/dtr directory1.

* Passing -- insecure-registry to the Docker client is not a recommended option. This flag disables the TLS verification for the registry, which makes the communication insecure and vulnerable to attacks.


* Use self-signed certificates | Docker Docs

* Test an insecure registry | Docker Docs

* Add TLS certificates as a trusted root authority to the host OS | Docker Docs

* docker | Docker Docs

* [Deploy a registry server | Docker Docs]

</article>
</details>

</div>