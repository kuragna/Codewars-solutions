const alphabetPosition = text => 
  text.toLowerCase()
  .replace(/[^a-z]/gi, "")
  .split("")
  .map(e => e.charCodeAt() - 96)
  .join(" ");