import MockCV1 from "@/mocks/mocks";
import Biography from "@/components/dashboard/biography";
import JobExperience from "@/components/dashboard/job_experience";
import Academic from "@/components/dashboard/academic";

export default function MainSection() {
  return (
    <div className="flex flex-col gap-2 pb-4 mr-2 h-full">
      <Biography biographyText={MockCV1.biography} />
      <JobExperience jobs={MockCV1.jobs_experiences} />
      <Academic academic={MockCV1.academic} />
    </div>
  );
}
