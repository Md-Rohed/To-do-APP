const todoInput = document.querySelector(".todo-input");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  //   console.log("hello i am clicked");

  //prevent default
  e.preventDefault();

  const inputValue = todoInput.value;
  //   console.log(todoInput.value);
  const ul = document.querySelector(".ul");
  const li = document.createElement("li");
  li.append(inputValue);
  ul.append(li);
});
