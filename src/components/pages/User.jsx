import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Container from "../shared/Container";
import IntroductionPanel from "../layout/IntroductionPanel";
import StatsPanel from "../layout/StatsPanel";
import UserRepos from "../layout/UserRepos";

import { FaArrowLeftLong } from "react-icons/fa6";

import NavigationContext from "../../context/NavigationContext";

import Spinner from "../layout/Spinner";

function User() {
  const { login } = useParams();

  const {
    requestUserProfile,
    requestUserRepos,
    userProfile,
    userRepos,
    loading,
  } = useContext(NavigationContext);

  useEffect(() => {
    requestUserProfile(login);
    requestUserRepos(login);
  }, []);

  return (
    <div className="">
      <Container classes={`pt-20 max-w-6xl`}>
        {/* Back Link */}
        <Link to={"/"} className="flex items-center pl-8">
          <FaArrowLeftLong className="mr-3" size={20} /> Back To Search
        </Link>

        {/* Panels */}
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <IntroductionPanel user={userProfile} />
            <StatsPanel user={userProfile} />
          </div>
        )}

        {/* Repos */}
        {!loading && <UserRepos repos={userRepos} />}
      </Container>
    </div>
  );
}

export default User;
