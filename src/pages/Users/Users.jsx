import React, { useState } from "react";
import { Navbar, SideBar } from "../../components";
import { Table } from "flowbite-react";
const Users = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="main p-4 flex pt-[68px] sm:ml-64 min-h-screen">
        <div className="main__inner flex w-full flex-col">
          <div className="flex items-center mt-10 justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 ">
            <label className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for users"
              />
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg  ">
            <Table className="bg-transparent z-[-1] text-center">
              <Table.Head>
                <Table.HeadCell className="text-left">
                  Пользователь
                </Table.HeadCell>
                <Table.HeadCell>Должность</Table.HeadCell>
                <Table.HeadCell>Статус</Table.HeadCell>
                <Table.HeadCell>Привилегия</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Редактировать</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                    <div className="flex items-center gap-2">
                      <div className="w-[40px] h-[40px] bg-gray-500 rounded-[50%]"></div>
                      <div className="flex flex-col items-start">
                        <span>Евгений А.О. </span>
                        <span className="text-[12px] text-gray-500">
                          aksentyev_eo@edu.surgu.ru
                        </span>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>Студент/Разработчик</Table.Cell>
                  <Table.Cell>
                    <span className="px-2 py-1 bg font-semibold rounded-lg text-xs bg-red-400  text-red-800 ">
                      Оффлайн
                    </span>
                  </Table.Cell>
                  <Table.Cell>5</Table.Cell>
                  <Table.Cell>
                    <button
                      href="#"
                      className="px-4 py-1 rounded-lg bg-[#2042b9]  font-semibold text-xs"
                    >
                      Редактировать
                    </button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-[40px] h-[40px] bg-gray-500 rounded-[50%]"></div>
                      <div className="flex flex-col items-start">
                        <span>Синкевич Д.Д. </span>
                        <span className="text-[12px] text-gray-500">
                          sinkevich_dd@edu.surgu.ru
                        </span>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>Студент/Разработчик</Table.Cell>
                  <Table.Cell>
                    <span className="px-2 py-1 bg font-semibold rounded-lg  text-xs bg-red-400  text-red-800 ">
                      Оффлайн
                    </span>
                  </Table.Cell>
                  <Table.Cell>5</Table.Cell>
                  <Table.Cell>
                    <button
                      href="#"
                      className="px-4 py-1 rounded-lg bg-[#2042b9]  font-semibold text-xs"
                    >
                      Редактировать
                    </button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-[40px] h-[40px] bg-gray-500 rounded-[50%]"></div>
                      <div className="flex flex-col items-start">
                        <span>Осипов А.А. </span>
                        <span className="text-[12px] text-gray-500">
                          osipov_aa@edu.surgu.ru
                        </span>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>Работник университета/Team Lead</Table.Cell>
                  <Table.Cell>
                    <span className="px-2 py-1  text-xs bg font-semibold rounded-lg bg-green-400  text-green-800 ">
                      Онлайн
                    </span>
                  </Table.Cell>
                  <Table.Cell>4</Table.Cell>
                  <Table.Cell>
                    <button
                      href="#"
                      className="px-4 py-1 rounded-lg bg-[#2042b9]  font-semibold text-xs"
                    >
                      Редактировать
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <nav className="flex justify-center mt-2">
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
