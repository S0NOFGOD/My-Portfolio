async function loadQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  document.getElementById("projects").innerHTML = `
    <blockquote>"${data.content}"</blockquote>
    <p>- ${data.author}</p>
  `;
}

loadQuote();