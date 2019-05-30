function displayCommits() {
  $('#repositories')
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText)
  const info = repos.map(function (repo) {
  	return repo.html_url, repo.name
  })
  const html = '<ul>'
  info.forEach(function (e) {
    html += `<li> ${e} </li>`
  })
  html += '</ul>'
  debugger
  $('#repositories').html(html)
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
