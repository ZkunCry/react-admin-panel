import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page ">
      <div className="not-found-page__inner flex items-center justify-center min-h-screen flex-col gap-5 text-center">
        <h1 className=" text-5xl">404 Not Found</h1>
        <h1 className=" text-3xl">Страница находится на стадии разработки</h1>
        <Link
          to={-1}
          className="bg-[#2042b9] hover:bg-[#18328e] text-white font-bold py-2 px-4 rounded"
        >
          Вернуться назад
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
