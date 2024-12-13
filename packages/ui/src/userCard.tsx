const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-[#CFCEFF] even:bg-[#FAE27C] p-4 flex-1 min-w-[130px]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <img src="/more.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-semibold mt-4 mb-1">1.234</span>
        <span className="capitalize text-sm font-medium text-gray-500">
          {type}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
