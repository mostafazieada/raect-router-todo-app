import { Outlet } from "react-router-dom";
import Context from "../context/context";

import Header from "../components/header/Header";
import Nav from "../components/nav/nav";
import Form from "../components/form/TodoForm";
import Images from "../components/images/images";
import InfoItem from "../components/todo-items/InfoItem";

export default function Layout() {
  return (
    <Context>
      <div className="font-one flex flex-col items-center min-h-screen bg-Very_Light_Grayish_Blue dark:bg-Very_Dark_Blue">
        <Images />
        <div className=" relative -top-44  md:-top-40 w-[90%] max-w-[600px]">
          <Header />
          <Form />
          <main className="w-full mt-6 mb-8 rounded-md overflow-hidden shadow-2xl">
            <Outlet />
            <InfoItem />
          </main>
          <Nav className={"md:hidden"} />
          <footer className="text-center mt-10 text-Dark_Grayish_Blue">
            Drag and drop to reorder list
          </footer>
        </div>
      </div>
    </Context>
  );
}
