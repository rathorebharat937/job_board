const jobForm = document.getElementById('jobForm');
const jobList = document.getElementById('jobList');

jobForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const company = document.getElementById('company').value.trim();
  const description = document.getElementById('description').value.trim();

  if (!title || !company || !description) return;

  const jobCard = document.createElement('div');
  jobCard.classList.add('job-card');

  jobCard.innerHTML = `
    <h3>${title}</h3>
    <h4>${company}</h4>
    <p>${description}</p>
    <button class="delete-btn">Delete</button>
  `;

  jobCard.querySelector('.delete-btn').addEventListener('click', () => {
    jobCard.remove();
  });

  jobList.prepend(jobCard); // New jobs appear on top
  jobForm.reset();
});
