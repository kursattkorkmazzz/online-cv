import Image from "next/image";
import AvatarPic from "../../../public/avatar.jpeg";
import {
  EnvelopeIcon,
  PhoneIcon,
  AtSymbolIcon,
  MapPinIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import MockCV1 from "../../../mocks/mocks";

export default function Aside() {
  return (
    <div className="flex">
      <div className="flex gap-y-12 flex-col justify-start w-full mx-2 py-8 px-8 rounded bg-slate-50">
        <div className="group flex flex-col self-center">
          <Image
            src={AvatarPic}
            width={120}
            height={120}
            className="self-center rounded-full border-4 border-blue-300 group-hover:border-blue-800 transition-all group-hover:scale-105"
          ></Image>

          <p className="w-fit h-fit  self-center text-xl font-medium	text-blue-400 group-hover:text-blue-800 select-none">
            {MockCV1.firstname + " " + MockCV1.lastname}
          </p>
          <p className="w-fit h-fit self-center text-sm text-gray-500 group-hover:text-gray-800">
            {MockCV1.job}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-x-3 content-center">
            <EnvelopeIcon className="w-6 text-blue-500"></EnvelopeIcon>
            <p className="font-semibold text-xl text-blue-500">Contact</p>
          </div>

          <div className="flex flex-col pl-4 gap-2 items-start">
            {MockCV1.contacts.phone && (
              <div className="flex gap-2 items-center">
                <PhoneIcon className="w-4 h-fit text-blue-500"></PhoneIcon>
                <p className="text-gray-500">{MockCV1.contacts.phone}</p>
              </div>
            )}

            {MockCV1.contacts.mail && (
              <div className="flex gap-2 items-center">
                <AtSymbolIcon className="w-4 h-fit  text-blue-500"></AtSymbolIcon>
                <p className="text-gray-500">{MockCV1.contacts.mail}</p>
              </div>
            )}

            {MockCV1.contacts.address && (
              <div className="flex gap-2 items-center">
                <MapPinIcon className="w-7 h-fit  text-blue-500"></MapPinIcon>
                <p className="text-gray-500">{MockCV1.contacts.address}</p>
              </div>
            )}

            {MockCV1.contacts.webs.map((web) => {
              return (
                <div className="flex gap-2 items-center">
                  <GlobeAltIcon className="w-4 h-fit text-blue-500"></GlobeAltIcon>
                  <Link href={web.url} className="text-gray-500">
                    {web.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
