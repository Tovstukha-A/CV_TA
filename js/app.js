// contact ==================

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">${data.email}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="callto:${data.skype}">${data.skype}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.github}">Github</a></li>`
document.querySelector('.address').innerHTML = `<p>${data.address}</p>`;
document.getElementById('my-photo').src = data.photo;

// skills ====================

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

// education ==================

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

// Achievements ====================

let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item},</li>`;
});
document.querySelector('.achievements-list').innerHTML = achievementsData;

// Profile ===================

document.getElementById('my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.getElementById('job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;

// Expirience_1 ================

let expdescr1 = '';
experience1.description.forEach(item => {
    expdescr1 += `<li>${item},</li>`;
});

document.querySelector('.experience-list-1').innerHTML += ` <h4 class="company-name mb-2">${experience1.company} - ${experience1.city}, <i>${experience1.from} - ${experience1.to}</i></h4>`;
document.querySelector('.experience-list-1').innerHTML += `<h5>${experience1.position}</h5>`;
document.querySelector('.experience-list-1').innerHTML += `<li>${expdescr1}</li>`;

// Expirience_2 ================

let expdescr2 = '';
experience2.description.forEach(item => {
    expdescr2 += `<li>${item},</li>`;
});

document.querySelector('.experience-list-2').innerHTML += ` <h4 class="company-name mb-2">${experience2.company} - ${experience2.city}, <i>${experience2.from} - ${experience2.to}</i></h4>`;
document.querySelector('.experience-list-2').innerHTML += `<h5>${experience2.position}</h5>`;
document.querySelector('.experience-list-2').innerHTML += `<li>${expdescr2}</li>`;

// Expirience_3 ================

let expdescr3 = '';
experience3.description.forEach(item => {
    expdescr3 += `<li>${item},</li>`;
});

document.querySelector('.experience-list-3').innerHTML += ` <h4 class="company-name mb-2">${experience3.company} - ${experience3.city}, <i>${experience3.from} - ${experience3.to}</i></h4>`;
document.querySelector('.experience-list-3').innerHTML += `<h5>${experience3.position}</h5>`;
document.querySelector('.experience-list-3').innerHTML += `<li>${expdescr3}</li>`;

// Expirience_4 ================

let expdescr4 = '';
experience4.description.forEach(item => {
    expdescr4 += `<li>${item},</li>`;
});

document.querySelector('.experience-list-4').innerHTML += ` <h4 class="company-name mb-2">${experience4.company} - ${experience4.city}, <i>${experience4.from} - ${experience4.to}</i></h4>`;
document.querySelector('.experience-list-4').innerHTML += `<h5>${experience4.position}</h5>`;
document.querySelector('.experience-list-4').innerHTML += `<li>${expdescr4}</li>`;

$("ul li:empty").remove();