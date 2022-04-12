import { Layout } from "antd";
import React from "react";
import { useEffect } from "react";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../store/actions/userActions";
import Loader from "./Layout/Loader";

const { Content } = Layout;

export default function MoreInfo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails(window.location.pathname.split("/")[2]));
  }, [dispatch]);

  const { loading, user } = useSelector((state) => state.userDetails);

  return (
    <Content
      className="site-layout-background userSingle"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="moreInfo">
          <Image src={`${user?.avatar}`} />
          <div className="detailedInfo">
            <h2>First Name: {user?.first_name}</h2>
            <h2>Last Name: {user?.last_name}</h2>
            <h2>
              Email: <a href={`mailto:${user?.email}`}>{user?.email}</a>
            </h2>
          </div>
        </div>
      )}
    </Content>
  );
}
