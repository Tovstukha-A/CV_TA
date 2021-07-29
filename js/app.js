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

// courses ==================

document.querySelector('.courses-list').innerHTML += `<li><a href="${data.courses_1}">HTML для JavaScript разработчиков</a></li>`
document.querySelector('.courses-list').innerHTML += `<li><a href="${data.courses_2}">JavaScript v.2.0</a></li>`
document.querySelector('.courses-list').innerHTML += `<li><a href="${data.courses_3}">Методы массивов JavaScript</a></li>`
document.querySelector('.courses-list').innerHTML += `<li><a href="${data.courses_4}">React JS</a></li>`

// education ==================

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

// Achievements ====================

document.querySelector('.achievements-list').innerHTML = data.achievements;

// Profile ===================

document.getElementById('my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.getElementById('job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;
document.querySelector('.web_dev-data').textContent = data.web_dev;

// Expirience ================

let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += ` <h4 class="company-name mb-2">${item.company} - ${item.city}, <i>${item.from} - ${item.to}</i></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;

$("ul li:empty").remove();