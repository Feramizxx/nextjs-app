import React from "react";
import Card from "../ui/Card";
import Layout from "../layout/Layout";
import classes from "../meetups/MeetupDetail.module.css";
export default function MeetupDetail(props) {
  return (
    <Layout>
      <Card>
        <div className={classes.container}>
          <div>
            <img src={props.image} alt={props.title} />
          </div>
          <div>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
          </div>
          <div>
            <p>{props.description}</p>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
