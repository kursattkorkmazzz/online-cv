import {
  FolderArrowDownIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function AcademicCard({ children, education }) {
  const dateFormat = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const startDate = new Date(education.start_date).toLocaleDateString(
    "en-us",
    dateFormat
  );
  const endDate = new Date(education.end_date).toLocaleDateString(
    "en-us",
    dateFormat
  );

  const dateDifferenceInMS =
    new Date(education.end_date) - new Date(education.start_date);

  let inDay = dateDifferenceInMS / (1000 * 60 * 60 * 24);

  let inMonth = inDay / 30;
  if (inDay > 30) {
    inDay = inDay % 30;
  }

  const inYear = inMonth / 12;
  if (inMonth > 12) {
    inMonth = inMonth % 12;
  }

  return (
    <div className="group overflow-clip flex flex-col gap-2 items-center bg-slate-50 rounded-xl p-4 drop-shadow-lg w-full h-fit transition-all hover:scale-105">
      <p className="text-lg font-bold text-gray-800 w-full text-center">
        {education.school_name}
      </p>
      <p className="font-light w-full w-full text-center">
        <i>{education.degree + ", " + education.department}</i>
      </p>
      <p className="text-sm w-full text-center">
        {startDate} - {endDate} <br />(
        {inYear >= 1 && parseInt(inDay, 10) + " Year "}
        {inMonth >= 1 && parseInt(inMonth, 10) + " Month "}
        {inDay + " Day"})
      </p>
      <p className="text-gray-500 text-justify w-full">
        {education.description}
      </p>
      <p className="font-medium">
        GPA: {education.isAverageBasedHundred ? "100" : "4"}/{education.avarage}
      </p>
      {education.transcriptLink && (
        <div className="flex flex-col p-3 rounded-xl text-slate-100 items-center bg-blue-500 hover:text-slate-300 hover:bg-slate-500 transition-all cursor-pointer">
          <FolderArrowDownIcon className="w-6" />
          <Link href={education.transcriptLink}>Download Transcript</Link>
        </div>
      )}
    </div>
  );
}
