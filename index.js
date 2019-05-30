function displayCommits() {
  $('#repositories')
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText)
  debugger
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
  req.addEventListener('load', displayRepositories);
  req.send();
}
