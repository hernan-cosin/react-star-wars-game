import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Layout } from "pages/layout";
import { Home } from "pages/home"
import { Rules } from "pages/rules"
import { ChooseSide } from "pages/choose-side";
import { ReadyPage } from "pages/ready";
import { GoPage } from "pages/go";
import { ResultsPage } from "pages/results-page";
import { MovesPage } from "pages/moves-page"
// import { NearBy } from "pages/near-by";
// import { Login } from "pages/login";
// import { LoginPass } from "pages/login-pass";
// import { MyData } from "pages/my-data";
// import { MyReports } from "pages/my-reports";
// import {ReportPet} from "pages/report-pet"
// import { PrivateRoute } from "./privateRoute";
// import { NewUser } from "pages/my-data/new-user";


export function MyRouter() {
    return  <React.StrictMode> 
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/rules" element={<Rules />}></Route>
              <Route path="/choose-side" element={<ChooseSide />}></Route>
              <Route path="/ready" element={<ReadyPage />}></Route>
              <Route path="/go" element={<GoPage />}></Route>
              <Route path="/results" element={<ResultsPage />}></Route>
              <Route path="/moves" element={<MovesPage />}></Route>
            </Route>
              {/* <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/near-by/:lat/:lng" element={<NearBy />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/login-pass" element={<LoginPass />}></Route>
                <Route path="/me" element={
                  <PrivateRoute>
                    <MyData />
                  </PrivateRoute>
                }></Route>
                <Route path="/me/reports" element={
                  <PrivateRoute>
                    <MyReports />
                  </PrivateRoute>
                }></Route>
                <Route path="/me/report" element={
                  <PrivateRoute>
                    <ReportPet/>
                  </PrivateRoute>
                }></Route>
                <Route path="/me/new" element={<NewUser />}></Route>
              </Route> */}
          </Routes>
      </React.StrictMode>
}