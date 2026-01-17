import React from "react";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import Tag from "../shared/Tag";

import fork from "../../assets/fork.svg";
import star from "../../assets/star.svg";
import info from "../../assets/info.svg";
import viewed from "../../assets/viewed.svg";

function UserRepos({ repos }) {
  return (
    <div className="w-full mt-20">
      <h2 className="font-bold text-3xl">Latest Repositories</h2>

      <div className="flex flex-col  text-left gap-4 w-full my-10 mb-20">
        {repos.map((repo) => (
          <div
            className="bg-black/20 p-4 rounded-md space-y-4 hover:bg-black/40"
            key={repo.id}
          >
            <a
              href={`${repo.html_url}`}
              target="_blank"
              className="flex flex-row items-center"
            >
              <FaLink size={25} />
              <span className="ml-4 font-semibold text-xl">{repo.name}</span>
            </a>

            <p className="text-sm">{repo.description}</p>

            <div className="flex flex-row items-center gap-1">
              <Tag classes={"flex flex-row gap-3 bg-info"}>
                <img src={viewed} alt="" className="invert" />
                <span className="text-white">{repo.watchers_count}</span>
              </Tag>

              <Tag classes={"flex flex-row gap-3 bg-success"}>
                <img src={star} alt="" className="invert" />
                <span className="text-white">{repo.stargazers_count}</span>
              </Tag>

              <Tag classes={"flex flex-row gap-3 bg-error"}>
                <img src={info} alt="" className="invert scale-70" />
                <span className="text-white">{repo.open_issues_count}</span>
              </Tag>

              <Tag classes={"flex flex-row gap-3 bg-warning"}>
                <img src={fork} alt="" className="invert scale-70" />
                <span className="text-white">{repo.forks}</span>
              </Tag>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserRepos;
