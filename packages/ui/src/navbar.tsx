const Navbar = () => {
  return (
    <div className="ui-flex ui-items-center ui-justify-between ui-p-4">
      {/* Search */}
      <div className="ui-hidden md:ui-flex ui-items-center ui-gap-2 ui-text-xs ui-rounded-full ui-ring-[1.5px] ui-ring-gray-300 ui-px-2 ">
        <img src="/search.png" alt="" width={14} height={14} />
        <input type="text" placeholder="Search..." className="ui-w-[200px] ui-p-2 ui-bg-transparent ui-outline-none" />
      </div>
      {/* Icons and user */}

      <div className="ui-flex ui-items-center ui-gap-6 ui-justify-end ui-w-full">
        <div className="ui-bg-white ui-rounded-full ui-w-7 ui-h-7 ui-flex ui-items-center ui-justify-center ui-cursor-pointer">
          <img src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="ui-bg-white ui-rounded-full ui-w-7 ui-h-7 ui-flex ui-items-center ui-justify-center ui-cursor-pointer ui-relative">
          <img src="/announcement.png" alt="" width={20} height={20} />
          <div className="ui-absolute ui--top-3 ui--right-3 ui-w-5 ui-h-5 ui-flex ui-items-center ui-justify-center ui-bg-purple-400 ui-rounded-full ui-text-xs ui-text-white">1</div>
        </div>
        <div className="ui-flex ui-flex-col">
          <span className="ui-text-xs ui-leading-3 ui-font-medium">John Doe</span>
          <span className="ui-text-[10px] ui-text-gray-500 ui-text-right">Admin</span>
        </div>
        <img src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
      </div>
    </div>
  );
};

export default Navbar;
