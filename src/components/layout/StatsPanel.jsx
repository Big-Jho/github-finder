import React from "react";
import { FaUsers } from "react-icons/fa6";
import { FaUserGroup, FaLayerGroup, FaHouse } from "react-icons/fa6";

function StatsPanel({ user }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x  divide-dashed divide-gray-500  items-center justify-between mt-12 overflow-x-scroll rounded-sm shadow-lg bg-transparent px-8 py-6 gap-y-8 ">
      <div className="flex flex-row justify-between  mr-6 pr-6">
        <div className="space-y-1">
          <p className="text-xs text-gray-300">Followers</p>
          <h4 className="font-extrabold text-4xl">{user.followers}</h4>
        </div>
        <FaUsers size={50} className="text-pink-500" />
      </div>

      <div className="flex flex-row justify-between  mr-6 pr-6">
        <div className="space-y-1">
          <p className="text-xs text-gray-300">Following</p>
          <h4 className="font-extrabold text-4xl">{user.following}</h4>
        </div>
        <FaUserGroup size={50} className="text-pink-500" />
      </div>

      <div className="flex flex-row justify-between  mr-6 pr-6">
        <div className="space-y-1">
          <p className="text-xs text-gray-300">Public Repos</p>
          <h4 className="font-extrabold text-4xl">{user.public_repos}</h4>
        </div>
        <FaLayerGroup size={50} className="text-pink-500" />
      </div>

      <div className="flex flex-row justify-between  mr-6 pr-6">
        <div className="space-y-1">
          <p className="text-xs text-gray-300">Public Gists</p>
          <h4 className="font-extrabold text-4xl">{user.public_gists}</h4>
        </div>
        <FaHouse size={60} className="text-pink-500" />
      </div>
    </div>
  );
}

export default StatsPanel;
