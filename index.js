function displayCommits() {
  $('#repositories')
}

function displayRepositories(repos) {

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
  const name = $('input[type=text]').val()
  req.open('GET', 'https://api.github.com/users/' + name + '/repos');
  req.send();
  displayRepositories()
}
