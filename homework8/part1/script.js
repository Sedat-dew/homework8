const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p, index) => {
  p.innerText = `Paragraph ${index + 1}: Content changed!`;
});
const headers1 = document.querySelectorAll("h1");
headers1.forEach((h1, index) => {
  h1.innerText = `Header ${index + 1}: H1 content changed!`;
});
const headers3 = document.querySelectorAll("h3");
headers3.forEach((h3, index) => {
  h3.innerText = `Header ${index + 1}: H3 content changed!`;
});
//innerHTML probano innerText
