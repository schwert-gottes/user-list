import Image from "next/image";
import type { UserCardProps } from "@/types/user";

const UserCard: React.FC<UserCardProps> = ({
  name,
  job,
  description,
  image,
}) => {
  return (
    <article
      className="bg-white rounded-lg shadow border border-[#E6E6E6] p-3 flex flex-col gap-2 min-h-[200px]"
      aria-labelledby={`user-name-${name}`}
    >
      <div className="flex items-center gap-3 mb-2 border-b border-[#E6E6E6] pb-3">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          loading="lazy"
          className="w-12 h-12 rounded-full bg-gray-200 object-cover"
        />
        <div>
          <h2
            id={`user-name-${name}`}
            className="font-semibold text-sm text-[#1F2026]"
          >
            {name}
          </h2>
          <div className="text-xs text-[#767A85]">{job}</div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-sm mb-1 text-[#1F2026]">
          Description
        </h3>
        <p className="text-xs text-[#767A85] leading-snug line-clamp-5">
          {description}
        </p>
      </div>
    </article>
  );
};

export default UserCard;
