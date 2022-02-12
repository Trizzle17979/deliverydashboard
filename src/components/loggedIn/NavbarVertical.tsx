import React from "react";

interface Show {
  home: boolean;
  analytics: boolean;
  table: boolean;
}

interface Props {
  setShow: React.Dispatch<React.SetStateAction<Show>>;
}

const NavbarVertical: React.FC<Props> = ({ setShow }) => {
  return (
    <nav className="fixed overflow-scroll bg-blue-900 w-20 h-screen">
      <ul className="list-none p-0 m-0 flex flex-col items-center h-full">
        <li className="flex item-center h-20 no-underline w-full">
          <button
            onClick={() => {
              setShow({
                home: true,
                analytics: false,
                table: false,
              });
            }}
          >
            <img
              src="./src/assets/home.svg"
              className="w-6 h-6 hover:scale-110"
            />
          </button>
        </li>
        <li className="flex item-center h-20 no-underline w-full">
          <button
            onClick={() => {
              setShow({
                home: false,
                analytics: true,
                table: false,
              });
            }}
          >
            <img
              src="./src/assets/graph-white.svg"
              className="w-6 h-6 hover:scale-110"
            />
          </button>
        </li>
        <li className="flex item-center h-20 no-underline w-full">
          <button
            onClick={() => {
              setShow({
                home: false,
                analytics: false,
                table: true,
              });
            }}
          >
            <img
              src="./src/assets/table.svg"
              className="w-6 h-6 hover:scale-110"
            />
          </button>
        </li>
        <li className="flex item-center h-20 no-underline w-full mt-auto">
          <button
            onClick={() => {
              setShow({
                home: false,
                analytics: false,
                table: true,
              });
            }}
          >
            <img
              src="./src/assets/table.svg"
              className="w-6 h-6 hover:scale-110"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarVertical;
