const Pagination = () => {
  return (
    <div className="ui-p-4 ui-flex ui-items-center ui-justify-between ui-text-gray-500">
      <button
        disabled
        className="ui-py-2 ui-px-4 ui-rounded-md ui-bg-slate-200 ui-text-xs ui-font-semibold disabled:ui-opacity-50 disabled:ui-cursor-not-allowed"
      >
        Prev
      </button>
      <div className="ui-flex ui-items-center ui-gap-2 ui-text-sm">
        <button className="ui-px-2 ui-rounded-sm ui-bg-lamaSky">1</button>
        <button className="ui-px-2 ui-rounded-sm">2</button>
        <button className="ui-px-2 ui-rounded-sm">3</button>
        ...
        <button className="ui-px-2 ui-rounded-sm">10</button>
      </div>
      <button className="ui-py-2 ui-px-4 ui-rounded-md ui-bg-slate-200 ui-text-xs ui-font-semibold disabled:ui-opacity-50 disabled:ui-cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
