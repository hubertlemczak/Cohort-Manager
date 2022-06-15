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
        <button class="my-cohorts__cohort-view-btn" onclick="cohortManagerRender.renderStudents('${cohort}'),document.querySelector('.students-create').classList.remove('hidden')">View</button>
      </div>
      `;
    });
  }
  renderStudents(cohortName) {
    const students = document.querySelector('.students__inner');
    const cohort = cohortManager.getCohort(cohortName);
    const addStudent = document.querySelector('#createStudentForm');
    addStudent.innerHTML = `
        <input
          type="text"
          name="createStudentCohort"
          id="createStudentCohort"
          disabled
          value="${cohortName}"
        />
        <input
          type="text"
          name="createStudentFirstName"
          id="createStudentFirstName"
          placeholder="First name"
          required
        />
        <input
          type="text"
          name="createStudentLastName"
          id="createStudentLastName"
          placeholder="Lirst name"
          required
        />
        <input
          type="text"
          name="createStudentGitHub"
          id="createStudentGitHub"
          placeholder="GitHub"
          required
        />
        <input
          type="email"
          name="createStudentEmail"
          id="createStudentEmail"
          placeholder="Email"
          required
        />
        <button type="submit" class="students-create-btn">Add Student</button>
    `;

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
