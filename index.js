function displayCommits() {
  $('#repositories')
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText)
  const html =
    '<ul>' +
    repos.map(function(repo){
      return `<li><h2> ${repo.owner.login} </h2>
      <a href="${repo.html_url}" data-repo="${repo.name}"> ${repo.name} </a><br>
      <a href="#" onclick="getCommits(this)">Get Commits</a><br>
      <a href="#" onclick="getBranches(this)">Get Branches</a><br>
      `
    }).join('')
    +
    '</ul>'
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
