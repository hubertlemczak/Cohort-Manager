cohortManagerRender.renderCohorts();
const createCohortBtn = document.querySelector('.create-cohort-btn');
const createCohortSection = document.querySelector('.create-cohort');
createCohortBtn.addEventListener('click', () => {
  createCohortSection.classList.remove('hidden');
});

const createCohortForm = document.querySelector('#createCohort');
createCohortForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const cohortName = document.querySelector('#cohortName').value;
  console.log(cohortManager.createCohort(cohortName));
  cohortManagerRender.renderCohorts();
});

const addStudentForm = document.querySelector('#createStudentForm');
addStudentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const cohortName = document.querySelector('#createStudentCohort').value;
  const firstName = document.querySelector('#createStudentFirstName').value;
  const lastName = document.querySelector('#createStudentLastName').value;
  const github = document.querySelector('#createStudentGitHub').value;
  const email = document.querySelector('#createStudentEmail').value;
  cohortManager.addStudentToCohort(cohortName, firstName, lastName, github, email);
  cohortManagerRender.renderStudents(cohortName);
});
