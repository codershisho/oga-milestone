const Milestone = () => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div id="gantt-header" className="h-12 p-2 flex items-center">
        <h1 className="text-xl font-bold">ガントチャート</h1>
    </div>
    <div id="gantt-content" className="flex">
        <div id="gantt-task">
        <div id="gantt-task-title" className="flex items-center bg-green-600 text-white h-20">
            <div className="border-t border-r border-b flex items-center justify-center font-bold text-xs w-48 h-full">プロジェクト
            </div>
            <div className="border-t border-r border-b flex items-center justify-center font-bold text-xs w-24 h-full">開始日
            </div>
            <div className="border-t border-r border-b flex items-center justify-center font-bold text-xs w-24 h-full">完了期限日
            </div>
            <div className="border-t border-r border-b flex items-center justify-center font-bold text-xs w-16 h-full">担当
            </div>
            <div className="border-t border-r border-b flex items-center justify-center font-bold text-xs w-12 h-full">進捗
            </div>
        </div>
        </div>
        <div id="gantt-calendar">カレンダー領域</div>
    </div>
    </div>
  );
};

export default Milestone; 