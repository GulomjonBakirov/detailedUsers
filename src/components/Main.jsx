import React, { useEffect, useState } from "react";
import { Button, Layout, Card, Avatar, Alert, Pagination } from "antd";

import { useDispatch, useSelector } from "react-redux";

import { getAllUser } from "../store/actions/userActions";
import Loader from "./Layout/Loader";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Meta } = Card;

export default function Main() {
  const { loading, error, data, users } = useSelector((state) => state.users);
  const [current, setCurrent] = useState(1);

  const dispatch = useDispatch();

  const onClose = (e) => {
    console.log(e, "I was closed.");
  };

  useEffect(() => {
    dispatch(getAllUser(current));

    if (error) {
      return (
        <Alert
          message="Error Text"
          description={`${error.message}`}
          closable
          onClose={onClose}
        />
      );
    }
  }, [dispatch, current, error]);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="users">
          {users?.map((user) => (
            <Card
              key={user.last_name}
              style={{ width: 300 }}
              cover={
                <img
                  alt="userImage"
                  width="300"
                  height="300"
                  src={`${user.avatar}`}
                />
              }
              actions={[
                <Button type="primary" key="moreInfo">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`user/${user.id}`}
                  >
                    More Information
                  </Link>
                </Button>,
              ]}
            >
              <Meta
                avatar={<Avatar src={`${user.avatar}`} />}
                title={`${user.first_name} ${user.last_name}`}
              />
            </Card>
          ))}
          <Pagination
            pageSize={6}
            current={data.page}
            onChange={onChange}
            total={data.total}
          />
        </div>
      )}
    </Content>
  );
}
