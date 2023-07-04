import Link from "next/link";
import {
  IdentificationIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  UserIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

export default function NavigationBar() {
  const identificationIcon = (
    <IdentificationIcon className="self-center h-6 w-6 text-blue-500"></IdentificationIcon>
  );

  const menuLinks = [
    {
      svg: <UserIcon className="self-center h-6 w-6 text-blue-500"></UserIcon>,
      linkName: "Biography",
      url: "#biography",
    },
    {
      svg: (
        <BriefcaseIcon className="self-center h-8 w-8 text-blue-500"></BriefcaseIcon>
      ),
      linkName: "Jobs Experiences",
      url: "#jobs-experience",
    },
    {
      svg: (
        <AcademicCapIcon className="self-center h-6 w-6 text-blue-500"></AcademicCapIcon>
      ),
      linkName: "Academic",
      url: "#biography",
    },
    {
      svg: (
        <Cog6ToothIcon className="self-center h-6 w-6 text-blue-500"></Cog6ToothIcon>
      ),
      linkName: "Skills",
      url: "#biography",
    },
    {
      svg: (
        <ComputerDesktopIcon className="self-center h-6 w-6 text-blue-500"></ComputerDesktopIcon>
      ),
      linkName: "Courses/Conferences",
      url: "#biography",
    },
    {
      svg: (
        <IdentificationIcon className="self-center h-6 w-6 text-blue-500"></IdentificationIcon>
      ),
      linkName: "Certifications",
      url: "#biography",
    },
    {
      svg: (
        <LanguageIcon className="self-center h-6 w-6 text-blue-500"></LanguageIcon>
      ),
      linkName: "Languges",
      url: "#biography",
    },
  ];

  return (
    <div className="flex bg-slate-50 py-4 rounded-md m-2 py-6 select-none flex-nowrap overflow-hidden">
      <div className="flex basis-1/4 px-8 justify-center">
        <h1 className="self-center  font-bold text-xl">
          <Link
            href="/"
            className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% "
          >
            Online CV
          </Link>
        </h1>
      </div>

      <div className="flex basis-1/2">
        {menuLinks.map((link) => {
          return (
            <div className="flex group ">
              {link.svg}
              <Link
                href={link.url}
                scroll={false}
                className=" self-center px-2 mr-4 text-slate-500 group-hover:text-blue-500"
              >
                {link.linkName}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="self-center basis-1/4 flex px-8 justify-center || transition-all ease-in duration-100 hover:scale-110 scale-100">
        <span>
          <Link
            href="/"
            className="whitespace-nowrap text-clip  hover:shadow-md hover:shadow-blue-900/20 text-slate-100 bg-blue-500 px-5 py-3 rounded-full text-start scale-100 hover:scale-125"
          >
            Create free one!
          </Link>
        </span>
      </div>
    </div>
  );
}
