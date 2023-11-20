import { useContext } from "react";
import { todoListContext } from "../../context/context";

export default function TodoItem({ title, isComplete, id }) {
  const { toggleComplete, deleteTodo } = useContext(todoListContext);

  return (
    <div className=" group w-full h-10 md:h-12 py-1 px-4 md:px-6 flex justify-between items-center bg-Very_Light_Gray dark:bg-Very_Dark_DeSaturated_Blue border-b-[0.5px] border-Dark_Grayish_Blue last-of-type:border-0 ">
      <label
        htmlFor={id}
        className=" w-full flex justify-start items-center line-height: 2.5rem cursor-pointer"
      >
        <input
          type="checkbox"
          id={id}
          checked={isComplete ? true : false}
          onChange={() => toggleComplete(id)}
          className={` peer invisible relative after:absolute after:visible after:w-[17px] after:h-[17px] after:rounded-full after:border after:border-Dark_Grayish_Blue  
                    after:bg-gradient-to-br from-gradient_One to-gradient_Two 
                    ${isComplete ? "" : "after:bg-none"} cursor-pointer `}
        />

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

        <p
          className={`${
            isComplete ? "line-through text-Dark_Grayish_Blue" : ""
          }`}
        >
          {title}
        </p>
      </label>

      <button
        className="md:hidden group-hover:block"
        onClick={() => deleteTodo(id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </div>
  );
}
