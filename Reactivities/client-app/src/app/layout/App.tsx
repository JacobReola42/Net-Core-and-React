/* 26 */

import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Container, Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);
  // For dependencies. Empty means called once i.e. []

  return (
    // Fragment removes the useless div from html output to the browser 48.
    // Fragment helps keep the Navbar and container return same level and not 2 different elements.
    // <Fragment> is optional vs <></>
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <List>
          {activities.map((activity) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </Container>
    </>
    // </Fragment>
  );
}

export default App;
