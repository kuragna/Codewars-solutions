const generateColor = () => {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    color += hex[random]
  }
  return color;
}