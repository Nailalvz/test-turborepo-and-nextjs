const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="ui-rounded-2xl odd:ui-bg-[#CFCEFF] even:ui-bg-[#FAE27C] ui-p-4 ui-flex-1 ui-min-w-[130px]">
      <div className="ui-flex ui-items-center ui-justify-between">
        <span className="ui-text-[10px] ui-bg-white ui-px-2 ui-py-1 ui-rounded-full ui-text-green-600">
          2024/25
        </span>
        <img src="/more.png" alt="" width={20} height={20} />
      </div>
      <div className="ui-flex ui-flex-col">
        <span className="ui-text-2xl ui-font-semibold ui-mt-4 ui-mb-1">1.234</span>
        <span className="ui-capitalize ui-text-sm ui-font-medium ui-text-gray-500">
          {type}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
