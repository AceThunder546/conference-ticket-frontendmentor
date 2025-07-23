document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const avatar = document.getElementById("avatar").value;
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const githubName = document.getElementById("github").value;

  /*if (!avatar) {
    document.querySelector(".avatar-error").innerHTML =
      '<img src="src/assets/images/icon-info.svg" alt="info">File too large. Please upload a photo under 500KB';
    document.querySelector(".avatar-error").classList.remove("text-white/70");
    document.querySelector(".avatar-error").classList.add("text-red-500/80");
  }*/
  if (!email) {
    document.querySelector(".email-error").innerHTML =
      '<img src="src/assets/images/icon-info.svg" alt="info">Please enter a valid email adress.';
  }

  if (fullName && email && githubName) {
    const container = document.getElementById("container");
    const ticketContainer = document.getElementById("ticket");
    const names = document.querySelectorAll('.name');

    container.classList.add('hidden');
    ticketContainer.classList.remove('hidden');

    names.forEach(username => {
      username.textContent = fullName;
    });

    document.getElementById('userEmail').textContent = email; 

    document.getElementById('github-username').textContent = "@" + githubName;
  }
});
