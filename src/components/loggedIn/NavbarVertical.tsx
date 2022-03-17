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
    <nav className="md:w-72 m-8">
      <ul className="list-none p-0 m-0 flex flex-col items-center h-full">
        <li className="flex justify-center h-16 no-underline w-full">
          <div
            className="flex hover:scale-110 cursor-pointer justify-center items-center gap-3 w-full"
            onClick={() => {
              setShow({
                home: true,
                analytics: false,
                table: false,
              });
            }}
          >
            <img src="/home.svg" className="w-6 h-6" />
            <h2 className="text-blue-900">Home</h2>
          </div>
        </li>
        <li className="flex justify-center h-16 no-underline w-full">
          <div
            className="flex hover:scale-110 cursor-pointer justify-center items-center gap-3 w-full"
            onClick={() => {
              setShow({
                home: false,
                analytics: true,
                table: false,
              });
            }}
          >
            <img src="/graph-white.svg" className="w-6 h-6 hover:scale-110" />
            <h2 className="text-blue-900">Analytics</h2>
          </div>
        </li>
        <li className="flex justify-center h-16 no-underline w-full">
          <div
            className="flex hover:scale-110 cursor-pointer justify-center items-center gap-3 w-full"
            onClick={() => {
              setShow({
                home: false,
                analytics: false,
                table: true,
              });
            }}
          >
            <img src="/table.svg" className="w-6 h-6 hover:scale-110" />
            <h2 className="text-blue-900">Table</h2>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarVertical;
