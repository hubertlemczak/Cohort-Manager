class CohortManagerRender {
  constructor() {}
  renderCohorts() {
    const cohorts = document.querySelector('.my-cohorts__inner');
    cohorts.innerHTML = '';
    cohortManager.getAllCohortNames().forEach((cohort) => {
      cohorts.innerHTML += `
      <div class="my-cohorts__cohort center">
        <div class="my-cohorts__cohort-text">
          <h3>${cohort}</h3>
          <p>Students: 13</p>
        </div>
        <button class="my-cohorts__cohort-view-btn" onclick="cohortManagerRender.renderStudents('${cohort}')">View</button>
      </div>
      `;
    });
  }
  renderStudents(cohortName) {
    const students = document.querySelector('.students__inner');
    const cohort = cohortManager.getCohort(cohortName);
    students.innerHTML = '';
    console.log(cohort.students);
    cohort.students.forEach((student) => {
      console.log(student);
      students.innerHTML += `
      
      <div class="students__student flex-c-c">
        <p>${student.studentId}</p>
        <p>${student.firstName}</p>
        <p>${student.lastName}</p>
        <p>${student.github}</p>
        <p>${student.email}</p>
        <button class="students__student-remove-btn">Remove</button>
      </div>
      `;
    });
  }
}

const cohortManagerRender = new CohortManagerRender();
