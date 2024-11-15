const invisible = "invisible"

function copyToClipboard(htmlElement) {
    htmlElement.innerText
    navigator.clipboard.writeText(htmlElement.innerText)
}

function toggleClass(classList, classToToggle) {
    if (classList.contains(classToToggle)) {
        classList.remove(classToToggle)
    } else {
        classList.add(classToToggle)
    }
}

var questionsHideAnswers = document.getElementById("questions-hide-answers")

if (questionsHideAnswers != null) {
    for (let index = 0; index < questionsHideAnswers.children.length; index++) {
        const child = questionsHideAnswers.children[index]
        if (child.tagName == "OL") {
            child.nextElementSibling.classList.add(invisible)
            child.role = "button"
            child.addEventListener("click", function (e) {
                copyToClipboard(this)
                var cl = this.nextElementSibling.classList
                cl.add("text-center")
                toggleClass(cl, invisible)
            })
        }
    }
    questionsHideAnswers.style.visibility = "visible"
}


var questionsShowAnswers = document.getElementById("questions-show-answers")
if (questionsShowAnswers != null) {

    for (let index = 0; index < questionsShowAnswers.children.length; index++) {
        const child = questionsShowAnswers.children[index]
        if (child.tagName == "OL") {
            child.role = "button"
            child.addEventListener("click", function (e) {
                copyToClipboard(this)
                var next = this.nextElementSibling
                while (next != null && next.tagName != "OL") {
                    if (next.tagName == "P") {
                        var cl = next.classList
                        toggleClass(cl, "show-result")
                    }
                    next = next.nextElementSibling
                }
            })
        } else if (child.tagName == "P") {
            child.classList.add("text-center")
        }
    }
    questionsShowAnswers.style.visibility = "visible"
}
