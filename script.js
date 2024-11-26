var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        console.log(name_1);
        console.log(email);
        console.log(phone);
        console.log(experience);
        console.log(skills);
        // create resume output
        var resumeOutput = " \n<h2>Resume</h2>\n<p><strong>Name:</strong> ".concat(name_1, "</p>\n<p><strong>Email:</strong> ").concat(email, "</p>\n<p><strong>Phone number:</strong> ").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "\n\n<h3></h3>\n<p>").concat(education, "\n\n<h3>Education</h3>\n<p>").concat(education);
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            console.log(resumeOutputElement);
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('the resume output elements are missing');
    }
});
