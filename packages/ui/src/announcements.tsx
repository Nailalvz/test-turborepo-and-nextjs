const Announcements = () => {
  return (
    <div className="ui-bg-white ui-p-4 ui-rounded-md">
      <div className="ui-flex ui-items-center ui-justify-between">
        <h2 className="ui-text-xl ui-font-semibold">Announcements</h2>
        <span className="ui-text-xs ui-text-gray-400">View all</span>
      </div>

      <div className="ui-flex ui-flex-col ui-gap-4 ui-mt-4">
        <div className="ui-bg-lamaSkyLight ui-rounded-md ui-p-4">
            <div className="ui-flex ui-items-center ui-justify-between">
                <h3 className="ui-font-medium">Lorem ipsum dolor sit</h3>
                <span className="ui-text-xs ui-text-gray-400 ui-bg-white ui-rounded-md ui-px-1 ui-py-1">2025-01-01</span>
            </div>
            <p className="ui-text-sm ui-text-gray-400 ui-mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugiat aspernatur, sit eaque sunt accusamus?</p>
        </div>
        <div className="ui-bg-lamaPurpleLight ui-rounded-md ui-p-4">
            <div className="ui-flex ui-items-center ui-justify-between">
                <h3 className="ui-font-medium">Lorem ipsum dolor sit</h3>
                <span className="ui-text-xs ui-text-gray-400 ui-bg-white ui-rounded-md ui-px-1 ui-py-1">2025-01-01</span>
            </div>
            <p className="ui-text-sm ui-text-gray-400 ui-mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste odio ea quam totam! Eius, ipsam.</p>
        </div>
        <div className="ui-bg-lamaYellowLight ui-rounded-md ui-p-4">
            <div className="ui-flex ui-items-center ui-justify-between">
                <h3 className="ui-font-medium">Lorem ipsum dolor sit</h3>
                <span className="ui-text-xs ui-text-gray-400 ui-bg-white ui-rounded-md ui-px-1 ui-py-1">2025-01-01</span>
            </div>
            <p className="ui-text-sm ui-text-gray-400 ui-mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maiores nobis tenetur a, velit fuga!</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
