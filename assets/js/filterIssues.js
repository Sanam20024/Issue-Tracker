// Get the form element with the id 'filter-issue-form'
let filterIssueForm = document.getElementById('filter-issue-form');

// Get the JSON data containing details of issues for the project
let issuesJson = document.getElementById('issue-data').getAttribute('data');

// Parse the JSON data into an array of issues
let issues = JSON.parse(issuesJson);

// Get the element where filtered issues will be displayed
let issueList = document.getElementById('issues-list');

// Add a submit event listener to the form
filterIssueForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Create an empty array to store the filtered issues
  let filteredIssues = [];

  // Get the selected labels from the form
  let labelsList = filterIssueForm.querySelectorAll('input[type=checkbox]');
  let labelsElements = [...labelsList].filter((Element) => Element.checked);

  // Get the selected author value from the form
  let authorVal = filterIssueForm.querySelector(
    'input[type=radio][name=author]:checked'
  ).value;

  // Create an array to store the selected labels
  let [...labelsArr] = labelsElements.map((Element) => Element.value);

  // Filter and add issues to the filteredIssues array based on selected criteria
  issues.map((el) => {
    if (el.author == authorVal) {
      if (!filteredIssues.includes(el)) {
        filteredIssues.push(el);
      }
    }
    labelsArr.map((label) => {
      if (el.labels.includes(label)) {
        if (!filteredIssues.includes(el)) {
          filteredIssues.push(el);
        }
      }
    });
  });

  // Clear the issueList element
  issueList.innerHTML = '';

  // Create HTML elements for the filtered issues and display them
  for (let issue of filteredIssues) {
    let Div = document.createElement('div');
    Div.style = 'none';
    Div.innerHTML = `
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title">Title: ${issue.title}</h4>
          <h5 class="card-title">Author: ${issue.author}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Description: ${issue.description}
          </h6>
        </div>
      </div>
    `;
    issueList.appendChild(Div);
  }
});
