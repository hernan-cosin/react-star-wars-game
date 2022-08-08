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
          </Routes>
      </React.StrictMode>
}