import JobCard from "@/components/dashboard/utils/jobcard";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

export default function JobExperience({ children, jobs }) {
  return (
    <div
      id="jobs-experience"
      className="gap-8 flex flex-col w-full h-fit p-8 rounded bg-slate-50"
    >
      <div className="flex gap-3 items-center">
        <BriefcaseIcon className="w-7 text-blue-500" />
        <h1 className="text-xl font-bold text-blue-500">Jobs Experiences</h1>
      </div>

      <div className=" grid grid-cols-4 gap-5 ">
        {jobs.map((job) => {
          return <JobCard job={job}></JobCard>;
        })}
      </div>
    </div>
  );
}
