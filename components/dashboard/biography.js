import { UserIcon } from "@heroicons/react/24/outline";

export default function Biography({ children, biographyText }) {
  return (
    <div
      id="biography"
      className="flex flex-col gap-4 w-full h-fit p-8 rounded bg-slate-50"
    >
      <div className="flex gap-3 items-center">
        <UserIcon className="w-7 text-blue-500" />
        <h1 className="text-xl font-bold text-blue-500 ">Biography</h1>
      </div>

      {biographyText.split("\n").map((text) => {
        return <p className="text-justify indent-4">{text}</p>;
      })}
    </div>
  );
}
