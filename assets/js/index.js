const mode = document.querySelector("#toggleMode");
const rootElement = document.documentElement;

const lightModeColors = {
  "--bg-color": "rgb(243, 243, 243)",
  "--bg-light-color": "rgb(254, 252, 252)",
  "--border-color": "rgb(211, 211, 211)",
  "--text-color": "rgb(0, 0, 0)",
  "--logo-color": "#231e1f",
};

const darkModeColors = {
  "--bg-color": "rgb(38, 38, 38)",
  "--bg-light-color": "rgb(49, 47, 47)",
  "--border-color": "rgb(6, 6, 6)",
  "--text-color": "rgb(255, 255, 255)",
  "--logo-color": "#f3f3f3",
};

mode.addEventListener("change", () => {
  const isChecked = mode.checked;

  isChecked ? setTimeout(() => changeTheme(darkModeColors), 100) : setTimeout(() => changeTheme(lightModeColors), 100);
  
  clearTimeout();
});

function changeTheme(theme) {
  for (let prop in theme) {
    changePropertyColors(prop, theme[prop]);
  }
}

function changePropertyColors(property, value) {
  return rootElement.style.setProperty(property, value);
}
