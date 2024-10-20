document.getElementById("resumeForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  // getting element by id 

  const pictureElement=document.getElementById('profilePicture') as HTMLInputElement;
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const phoneElement = document.getElementById("phone") as HTMLInputElement;
  const educationElement = document.getElementById(
    "education"
  ) as HTMLInputElement;
  const skillsElement = document.getElementById("skills") as HTMLInputElement;
  const experienceElement = document.getElementById(
    "experience"
  ) as HTMLInputElement;
  const addressElement = document.getElementById("address") as HTMLInputElement;
  const achivementsElement = document.getElementById(
    "achivements"
  ) as HTMLInputElement;
  const hobiesElement = document.getElementById(
    "hobies"
  ) as HTMLInputElement;


  if ( 
    pictureElement&&
    nameElement &&
    emailElement &&
    phoneElement &&
    educationElement &&
    skillsElement &&
    experienceElement &&
    addressElement &&
    achivementsElement &&
    hobiesElement
  ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const skills = skillsElement.value;
    const experience = experienceElement.value;
    const address = addressElement.value;
    const achivements = achivementsElement.value;
    const hobies=hobiesElement.value;
    // picture file

    const pictureFile=pictureElement.files?.[0];
    const pictureFileURL=pictureFile ?URL.createObjectURL(pictureFile) : " ";

    // resume output

    const resumeOutput = `
<h2>Resume</h2> 
${pictureFileURL ? `<img src="${pictureFileURL}" alt="Profile Picture" class="profilePicture">`: ' ' }
<p><strong>Name:</strong> <span id="edit-name" class="editable">  ${name} </span></p>
<p><strong>Email:</strong><span id="edit-email" class="editable"> ${email} </span></p>
<p><strong>Phone:</strong><span id="edit-phone" class="editable"> ${phone} </span></p>
<p><strong>Address:</strong><span id="edit-address" class="editable"> ${address} </span></p>

<h3>Education</h3>
<p  id="edit-education" class="editable">${education}</p>

<h3>Skills</h3>
<p  id="edit-skills" class="editable">${skills}</p>

<h3>Experience</h3>
<p  id="edit-experience" class="editable">${experience}</p>

<h3>Achiements</h3>
<p  id="edit-achivements" class="editable">${achivements}</p>

<h3>Hobies</h3>
<p  id="edit-hobies" class="editable">${hobies}</p>

`;

    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    }  
    editData();
  } else {
    console.error(
      "Its looks like any field is empty .Please fill out all fields"
    );
  }
});

function editData(){
  const editableElement=document.querySelectorAll('.editable');

  editableElement.forEach(element=>{
    element.addEventListener('click',()=>{
       const currentElement=element as HTMLElement;
       const vurrValue=currentElement.textContent || " ";

// replacing content
if(currentElement.tagName ==='P' || currentElement.tagName==="SPAN" ){

 const input=document.createElement("input")
 input.type="text"
 input.value=vurrValue
 input.classList.add('edit-inputs')

input.addEventListener('blur',()=>{
  currentElement.textContent=input.value;
  currentElement.style.display='inline';
  input.remove();
})

currentElement.style.display='none' 
currentElement.parentNode?.insertBefore(input,currentElement);
input.focus();

}

    })
  })


}