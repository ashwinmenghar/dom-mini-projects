const input = document.getElementById("input");
const output = document.querySelector(".output");
let allTodo = [
  {
    text: "1",
    isDone: false,
  },
  {
    text: "2",
    isDone: false,
  },
  {
    text: "3",
    isDone: false,
  },
  {
    text: "4",
    isDone: false,
  },
  {
    text: "5",
    isDone: false,
  },
];

const addTodo = (e) => {
  let value = e.target.value;

  if (e.keyCode == 13 && value != "") {
    let todo = {
      text: value,
      isDone: false,
    };

    allTodo.push(todo);
    display(allTodo);
    e.target.value = "";
  }
};

const display = (todos) => {
  output.innerHTML = "";
  todos.forEach((todo, index) => {
    let li = document.createElement("li");

    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "input");
    input.checked = todo.isDone;

    let p = document.createElement("p");
    p.setAttribute("id", "text");
    p.innerText = todo.text;

    let button = document.createElement("button");
    button.setAttribute("id", "remove");
    button.innerText = "x";
    button.setAttribute("data-id", index);

    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(button);

    output.appendChild(li);
  });
};

input.addEventListener("keyup", addTodo);
display(allTodo);

output.addEventListener("click", (e) => {
  if (e.target.id == "remove") {
    let id = e.target.dataset.id;
    delete allTodo[id];

    console.log(allTodo);
  }
});
