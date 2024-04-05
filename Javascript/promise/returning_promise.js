document.querySelector(".getUser").addEventListener("click", () => {
  fetch('http://localhost:5000/User1')
    // Load it as json
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return response.json();
    })
    // Make a request to GitHub
    .then(user => {
      console.log(user);
      return fetch(`https://api.github.com/users/${user.name}`);
    })
    // Load the response as json
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
      }
      return response.json();
    })
    // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
    .then(githubUser => {
      console.log(githubUser);
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.querySelector('.user-avatar-container').appendChild(img);

      // setTimeout(() => img.remove(), 9000); // (*)
    })
    // Catch any errors that occur in the fetch chain
    .catch(error => {
      console.error('Error:', error);
    });
});
