import React from "react";

interface Props {
  learnMoreSection: React.RefObject<HTMLDivElement>;
}

const LearnMore: React.FC<Props> = ({ learnMoreSection }) => {
  return (
    <div
      ref={learnMoreSection}
      className="flex flex-col gap-16 justify-between items-center px-24 py-36 text-gray-800"
    >
      <div className="flex flex-col items-center space-y-6 text-center">
        <p className="font-mono text-blue-800">Change how you earn</p>
        <h2 className="text-4xl font-bold">
          An Easier Way To Monitor And Calculate Your Earnings
        </h2>
        <h4>
          DoorDash, Uber Eats, Postmates, and other delivery platforms don't
          allow you to know how much you are actually taking home after paying
          for expenses. Now you can know your exact earnings after paying for
          the costs of driving, like wear & tear and filling up the tank.
        </h4>
      </div>
      <div className="flex gap-8">
        <div className="w-1/2 border border-blue-100 rounded-md shadow-sm p-12 hover:scale-105">
          <img src="./src/assets/moneybag.svg" className="w-8 h-8 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Visualize Your Earnings</h3>
          <p className="">
            Custom charts allow you to see how you are earning and where your
            expenses are adding up.
          </p>
        </div>
        <div className="w-1/2 border border-blue-100 rounded-md shadow-sm p-12 hover:scale-105">
          <img src="./src/assets/truck-blue.svg" className="w-8 h-8 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Track Your Miles</h3>
          <p className="">
            Easily enter your total pay, miles driven, and local gas cost to
            calculate how well you are doing. Now you can have a simple,
            efficient way to track your earnings at the end of every work day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
