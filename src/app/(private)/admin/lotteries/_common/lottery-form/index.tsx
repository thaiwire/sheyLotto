"use client";
import { Form, Tabs } from "antd";
import React from "react";
import BasicTab from "./basic-tab";
import PrizedTab from "./prizes-tab";
import MediaTab from "./media-tab";

function LotteryForm() {
  return (
    <div className="mt-7">
      <Form>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Basic" key="1">
            <BasicTab />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Prizes" key="2">
            <PrizedTab />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Media" key="3">
            <MediaTab />
          </Tabs.TabPane>
        </Tabs>
      </Form>
    </div>
  );
}

export default LotteryForm;
