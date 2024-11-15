const invisible = "invisible"

var questionsHideAnswers = document.getElementById("questions-hide-answers");

if (questionsHideAnswers != null) {
    for (let index = 0; index < questionsHideAnswers.children.length; index++) {
        const child = questionsHideAnswers.children[index];
        if (child.tagName == "OL") {
            child.nextElementSibling.classList.add(invisible);
            child.role = "button"
            child.tagName = "p"
            child.addEventListener("click", function (e) {
                var cl = this.nextElementSibling.classList
                cl.add("text-center")
                if (cl.contains(invisible)) {
                    cl.remove(invisible)
                } else {
                    cl.add(invisible)
                }
            })
        }
    }
    questionsHideAnswers.style.visibility = "visible"
}