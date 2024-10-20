var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    // getting element by id 
    var pictureElement = document.getElementById('profilePicture');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var experienceElement = document.getElementById("experience");
    var addressElement = document.getElementById("address");
    var achivementsElement = document.getElementById("achivements");
    var hobiesElement = document.getElementById("hobies");
    if (pictureElement &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        skillsElement &&
        experienceElement &&
        addressElement &&
        achivementsElement &&
        hobiesElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var address = addressElement.value;
        var achivements = achivementsElement.value;
        var hobies = hobiesElement.value;
        // picture file
        var pictureFile = (_a = pictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var pictureFileURL = pictureFile ? URL.createObjectURL(pictureFile) : " ";
        // resume output
        var resumeOutput = "\n<h2>Resume</h2> \n".concat(pictureFileURL ? "<img src=\"".concat(pictureFileURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : ' ', "\n<p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">  ").concat(name_1, " </span></p>\n<p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n<p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n<p><strong>Address:</strong><span id=\"edit-address\" class=\"editable\"> ").concat(address, " </span></p>\n\n<h3>Education</h3>\n<p  id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n<h3>Skills</h3>\n<p  id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n<h3>Experience</h3>\n<p  id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n<h3>Achiements</h3>\n<p  id=\"edit-achivements\" class=\"editable\">").concat(achivements, "</p>\n\n<h3>Hobies</h3>\n<p  id=\"edit-hobies\" class=\"editable\">").concat(hobies, "</p>\n\n");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        editData();
    }
    else {
        console.error("Its looks like any field is empty .Please fill out all fields");
    }
});
function editData() {
    var editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var vurrValue = currentElement.textContent || " ";
            // replacing content
            if (currentElement.tagName === 'P' || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = vurrValue;
                input_1.classList.add('edit-inputs');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
