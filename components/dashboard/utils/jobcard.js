export default function JobCard({ children, job }) {
  const dateFormat = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const startDate = new Date(job.start_date).toLocaleDateString(
    "en-us",
    dateFormat
  );
  const endDate = new Date(job.end_date).toLocaleDateString(
    "en-us",
    dateFormat
  );

  const dateDifferenceInMS = new Date(job.end_date) - new Date(job.start_date);

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
        {job.companyName}
      </p>
      <p className="font-light w-full w-full text-center">{job.position}</p>
      <p className="text-sm w-full text-center">
        {startDate} - {endDate} <br />(
        {inYear >= 1 && parseInt(inDay, 10) + " Year "}
        {inMonth >= 1 && parseInt(inMonth, 10) + " Month "}
        {inDay + " Day"})
      </p>
      <p className="text-gray-500 text-justify w-full">{job.description}</p>
    </div>
  );
}
