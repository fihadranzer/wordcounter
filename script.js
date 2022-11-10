let textarea = document.getElementById("text-box");
let charArea = document.getElementById("char");
let wordArea = document.getElementById("word");

textarea.addEventListener("input", function () {
  let char = this.value;
  charArea.innerHTML = char.length;

  char = char.trim();
  let word = char.split(" ");

  let cleanlist = word.filter(function (elm) {
    return elm != "";
  });

  wordArea.innerHTML = cleanlist.length;
});
