import Image from "next/image";

export const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-gray-600 border-2">
        <Image
          src="/rafa.jpg"
          alt="Profile"
          className="w-full h-full object-cover "
          width={89}
          height={89}
        />
      </div>
    </div>
  );
};
