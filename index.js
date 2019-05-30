function displayCommits() {
  $('#repositories')
}

function displayRepositories(req) {
  const repos = JSON.parse(req.responseText)
  $('#repositories').html()
}

function displayBranches() {

}

function getCommits(){

}

function getBranches(){

}

function getRepositories(){
  const req = new XMLHttpRequest();
  const name = document.getElementById('username').value
  req.open('GET', 'https://api.github.com/users/' + name + '/repos');
  req.send();
}
