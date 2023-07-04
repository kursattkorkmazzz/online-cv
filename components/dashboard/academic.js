import { AcademicCapIcon } from "@heroicons/react/24/outline";
import AcademicCard from "./utils/academiccard";

export default function Academic({ children, academic }) {
  return (
    <div
      id="education"
      className="gap-8 flex flex-col bg-slate-50 rounded w-full h-fit p-8"
    >
      <div className="flex gap-3 items-center">
        <AcademicCapIcon className="w-7 text-blue-500" />
        <h1 className="text-xl font-bold text-blue-500">Academic</h1>
      </div>
      <div className=" grid grid-cols-4 gap-5 ">
        {academic.map((school) => {
          return <AcademicCard education={school} />;
        })}
      </div>
    </div>
  );
}
