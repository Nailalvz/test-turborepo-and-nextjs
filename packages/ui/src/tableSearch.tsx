const TableSearch = () => {
    return (
        <div className="ui-w-full md:ui-w-auto ui-flex ui-items-center ui-gap-2 ui-text-xs ui-rounded-full ui-ring-[1.5px] ui-ring-gray-300 ui-px-2 ">
        <img src="/search.png" alt="" width={14} height={14} />
        <input type="text" placeholder="Search from table..." className="ui-w-[200px] ui-p-2 ui-bg-transparent ui-outline-none" />
      </div>
    )
}

export default TableSearch