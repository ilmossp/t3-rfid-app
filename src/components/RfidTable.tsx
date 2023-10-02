"use client";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@material-tailwind/react";

import { useState } from "react";
import { TABS, TABLE_HEAD, TABLE_ROWS } from "~/components/data/rfidData";

export function RfidTable() {
    const [activeButton, setActiveButton] = useState("All");

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const filteredRows =
        activeButton === "All"
            ? TABLE_ROWS
            : TABLE_ROWS.filter((row) =>
                activeButton === "Online" ? row.online : !row.online
            );

    return (
        <div className="w-full rounded-3xl bg-gray-800 p-6 lg:w-8/12">
            <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                    <h5 className="text-white text-xl font-medium">Object's list</h5>
                    <p className="mt-1 text-gray-300 font-normal">
                        See information about all objects
                    </p>
                </div>
                <button className="text-white mr-1 font-medium rounded-full text-sm px-8 py-2 sm:px-6 sm:py-3 bg-gray-700 flex items-center gap-3 btn-sm">
                    <UserPlusIcon strokeWidth={2} className="h-8 w-8 sm:h-5 sm:w-5" /> Add member
                </button>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                    <a
                        onClick={() => handleButtonClick("All")}
                        className={`text-white mr-1 font-medium rounded-full text-sm px-4 py-2 ${activeButton === "All" ? "bg-gray-700" : ""
                            }`}
                    >
                        All
                    </a>
                    <a
                        onClick={() => handleButtonClick("Online")}
                        className={`text-white mr-1 font-medium rounded-full text-sm px-4 py-2 ${activeButton === "Online" ? "bg-gray-700" : ""
                            }`}
                    >
                        Online
                    </a>
                    <a
                        onClick={() => handleButtonClick("Offline")}
                        className={`text-white mr-1 font-medium rounded-full text-sm px-4 py-2 ${activeButton === "Offline" ? "bg-gray-700" : ""
                            }`}
                    >
                        Offline
                    </a>
                </div>
                <form className="w-80">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-white dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block p-4 pl-10 bg-gray-900 w-full text-sm text-white rounded-full"
                            placeholder="Object Search..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-blue-800 font-medium rounded-full text-sm px-4 py-2"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y text-white border-gray-500 bg-blue-gray-50/50 p-4 transition-colors"
                                >
                                    <div className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRows.slice(0, 5).map(({ img, name, email, job, org, online, date }, index) => {
                            const isLast = index === filteredRows.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-gray-600";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            <img src={img} alt={name} className="w-10 h-10 rounded-full" />
                                            <div className="flex flex-col">
                                                <p className="text-white font-medium">{name}</p>
                                                <p className="text-gray-300 font-normal opacity-70">{email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="text-white font-medium">{job}</p>
                                            <p className="text-gray-300 font-normal opacity-70">{org}</p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="w-max">
                                            <span className={`px-2 py-1 text-sm rounded ${online ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                                {online ? 'online' : 'offline'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <p className="text-white font-normal">{date}</p>
                                    </td>
                                    <td className={classes}>
                                        <Tooltip content="Edit User">
                                            <button className="text-blue-gray hover:text-blue-600">
                                                <PencilIcon className="h-4 w-4 text-white" />
                                            </button>
                                        </Tooltip>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between border-t border-gray-500 p-4">
                <p className="text-white font-normal">Page 1 of 10</p>
                <div className="flex gap-2 text-white">
                    <button className="focus:ring-2 w-24 h-11 bg-gray-600 hover:bg-gray-600 focus:outline-none rounded-full">Previous</button>
                    <button className="focus:ring-2 w-24 h-11 bg-gray-400 hover:bg-gray-600 focus:outline-none rounded-full">Next</button>
                </div>
            </div>
        </div>
    );
}
