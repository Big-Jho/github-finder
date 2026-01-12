import React from "react";
import Card from "../shared/Card";
import Tag from "../shared/Tag";
import { Link } from "react-router-dom";

function IntroductionPanel({ user }) {
  return (
    <div className="flex flex-col justify-between md:flex-row items-start gap-10">
      <Card classes={`w-full md:w-1/3 text-gray-300`}>
        <h2 className="text-lg font-semibold tracking-wider">{user.name}</h2>
        <p className="text-sm">{user.login}</p>
      </Card>

      <div className="w-full  md:w-2/3 px-8 md:p-0">
        <div className="flex flex-row space-x-4 items-center pb-4">
          <h2 className="text-3xl font-semibold">{user.name}</h2>

          <Tag classes={`bg-success`}>{user.type}</Tag>
          {user.hireable && <Tag classes={`bg-info`}>Hireable</Tag>}
        </div>

        {/* Bio */}
        <p className="">{user.bio}</p>
        <a
          target="_blank"
          href={`${user.html_url}`}
          className="mt-6 btn  outline rounded-sm hover:outline-0 transition duration-300"
        >
          <button>Visit GitHub Profile</button>
        </a>

        {/* Contact Panel */}
        <div className="flex flex-row divide-x divide-dashed divide-gray-500  items-center justify-between mt-12 overflow-x-scroll rounded-sm shadow-lg bg-transparent px-0 py-6">
          {user.location && (
            <div className="flex flex-col items-start gap-1 mr-6 pr-6 md:mr-16 md:pr-16 ">
              <p className="text-xs text-gray-300">Location</p>
              <h4 className="font-semibold text-lg">{user.location}</h4>
            </div>
          )}

          {user.blog && (
            <div className="flex flex-col items-start gap-1  mr-6 pr-6 md:mr-16  md:pr-16 ">
              <p className="text-xs text-gray-300">Website</p>
              <h4 className="font-semibold text-lg">{user.blog}</h4>
            </div>
          )}
          {user.twitter_username && (
            <div className="flex flex-col items-start gap-1">
              <p className="text-xs text-gray-300">Twitter</p>
              <h4 className="font-semibold text-lg">{user.twitter_username}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IntroductionPanel;
