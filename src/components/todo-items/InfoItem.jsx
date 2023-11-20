import { useContext } from "react";

import { todoListContext } from "../../context/context";
import Nav from "../nav/nav";

export default function InfoItem() {
  const { activeTodos, clearComplete } = useContext(todoListContext);

  return (
    <div className=" w-full h-10 md:h-12 px-2 md:px-6 flex justify-between items-center bg-Very_Light_Gray dark:bg-Very_Dark_DeSaturated_Blue text-Dark_Grayish_Blue ">
      <p>
        {activeTodos?.length > 1
          ? `${activeTodos?.length} items`
          : `${activeTodos?.length} item`}
        left
      </p>

      <Nav className={"hidden md:flex w-full max-w-[200px]"} />

      <button onClick={() => clearComplete()} className="cursor-pointer">
        clear complete
      </button>
    </div>
  );
}
