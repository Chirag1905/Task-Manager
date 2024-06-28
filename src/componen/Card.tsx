const Card = ({ description, date, tasks, comments }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{description}</h3>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
        <div className="text-gray-500 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center text-xs text-gray-500 mt-4 space-x-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 12.75l6 6 7.5-7.5m-10.5 0h6" />
          </svg>
          {tasks}
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 11.25h-6.75m0 0L11.25 8.25m0 3h6.75m0 0L20.25 14.25m-9 0v3m-1.5 3.75h-6a2.25 2.25 0 01-2.25-2.25V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v13.5a2.25 2.25 0 01-2.25 2.25H15" />
          </svg>
          {comments}
        </div>
      </div>
    </div>
  );
};

export default Card;
