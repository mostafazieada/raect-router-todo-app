import { useContext } from "react";
import { todoListContext } from "../../context/context";

export default function Form() {
  const { addTodo } = useContext(todoListContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const isComplete = e.target.isComplete.checked;
    const title = e.target.todoTitle.value;

    // to make sure the todo item is not empty
    if (title) return title;
    addTodo(title, isComplete);

    //to return the fields empty again
    e.target.isComplete.checked = false;
    e.target.todoTitle.value = "";
  };

  return (
    <form
      onSubmit={HandleSubmit}
      className=" group flex items-center w-full h-10 px-6 rounded-md bg-Very_Light_Gray dark:bg-Very_Dark_DeSaturated_Blue "
    >
      {/* checkbox input to determine weather the todo complete or not */}
      <label
        htmlFor="isComplete"
        className=" flex justify-start items-center line-height: 2.5rem"
      >
        <input
          type="checkbox"
          id="isComplete"
          tabIndex="0"
          className=" peer invisible relative after:absolute after:visible after:w-[17px]
        after:h-[17px] after:rounded-full after:border after:border-Dark_Grayish_Blue  
        after:checked:bg-gradient-to-br from-gradient_One to-gradient_Two cursor-pointer"
        />

        {/* checkbox "true" mark svg  */}
        <span className=" translate-x-[-90%] translate-y-[20%] left z-10 invisible peer-checked:visible">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        </span>
      </label>

      {/*  input for todo title  */}
      <input
        type="text"
        id="todoTitle"
        placeholder="Create a new todo..."
        className="w-full bg-transparent "
      />
    </form>
  );
}
