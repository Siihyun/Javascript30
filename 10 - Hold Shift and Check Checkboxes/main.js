const checkboxes = document.querySelectorAll("input");

const doCheck = (e) => {
  if (!e.shiftKey) return;

  let first = -1;
  let last = -1;
  let count = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      if (first === -1) first = count;
      last = count;
    }
    count += 1;
  });

  for (let i = first; i <= last; i++) {
    checkboxes[i].checked = true;
  }
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", doCheck);
});
