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
