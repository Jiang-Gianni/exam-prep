* https://kubernetes.io/docs/tasks/tools/

```bash
minikube start
minikube dashboard
minikube pause
minikube unpause
minikube stop
minikube config set memory 9001
minikube addons list
minikube delete --all
```

* https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands

* https://docs.linuxfoundation.org/tc-docs/certification/tips-cka-and-ckad#cka-and-ckad-environment

* **Remember to switch to the context and namespace of the question**

```bash
kubectl config set-context <context-of-question> --namespace=<namespace-of-question>
kubectl config use-context <context-of-question>
kubectl config set-context --current --namespace=<namespace>
```

* `kubectl` comes with `k` alias and auto completitions:

```bash
 # add to your bash shell.
echo "alias k=kubectl" >> ~/.bashrc
echo "complete -o default -F __start_kubectl k" >> ~/.bashrc
```

https://kubernetes.io/docs/reference/kubectl/quick-reference/#kubectl-autocomplete


* get a list of default cli short-names:

```bash
kubectl api-resources # returns list

kubectl describe pvc my-claim # example for  persistentVolumeClaim
```

* https://killer.sh/

* learn the text editor: vim (default) or nano

```bash
KUBE_EDITOR="nano" kubectl edit svc/registry
```

* create some alias for the exam:
```bash
alias k='kubectl'
alias kgp='kubectl get pods'
alias kgs='kubectl get svc'
alias kgn='kubectl get nodes'
alias kdp='kubectl describe pod'
alias kds='kubectl describe svc'
alias kdn='kubectl describe node'
alias kl='kubectl logs'
alias kgpns='kubectl get pods --namespace'

alias ke='kubectl explain'
alias kg='kubectl get'
alias kd='kubectl describe'
```

* avoide graceful delete by forcing and using `--now`:
```bash
kubectl delete pod frontend --now
```

* generate the manifest using `--dry-run=client` (without contacting the server) or `--dry-run=server` (contacting the API server), edit it and apply (using imperative commands is the most efficient and quick way to manage objects):

```bash
kubectl run frontend --image=nginx:1.25.1 --port=80 -o yaml --dry-run=client > pod.yaml
vim pod.yaml
kubectl apply -f pod.yaml
# also valid for other types of resources `kubectl create ns my-namespace --dry-run=client -o yaml`
```

* `--dry-run=server` shows explicitly the applied default values by the API server. I think it can be useful if you have to edit a field but don't remember exactly where it is located or the exact name. It is slower to execute than `--dry-run=client`

* check syntax of yaml manifest using `--dry-run=client`:

```bash
kubectl apply -f pod.yaml --dry-run=client
```


* Use `kubectl explain` if you want to see al the available fields
```bash
kubectl explain pod.spec.containers.readinessProbe --recursive
kubectl explain LimitRange --recursive
```

![Kubernetes](./kubernetes.png)
