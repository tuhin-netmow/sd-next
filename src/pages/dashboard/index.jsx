"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import DashboardLayout from "@/Layouts/index";
import Section from "@/components/dashboard/Section";
import Widgets from "@/components/dashboard/Widgets";
import Revenue from "@/components/dashboard/Revenue";
import SalesByLocations from "@/components/dashboard/SalesByLocations";
import BestSellingProducts from "@/components/dashboard/BestSellingProducts";
import TopSellers from "@/components/dashboard/TopSellers";
import StoreVisits from "@/components/dashboard/StoreVisits";
import RecentOrders from "@/components/dashboard/RecentOrders";
import RecentActivity from "@/components/dashboard/RecentActivity";

const DashboardEcommerce = () => {
  // document.title = "Dashboard | SquadDeck";

  const [rightColumn, setRightColumn] = useState(false);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  return (
    <>
      <DashboardLayout>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col>
                <div className="h-100">
                  <Section rightClickBtn={toggleRightColumn} />
                  <Row>
                    <Widgets />
                  </Row>
                  <Row>
                    <Col xl={8}>
                      <Revenue />
                    </Col>
                    <SalesByLocations />
                  </Row>
                  <Row>
                    <BestSellingProducts />
                    <TopSellers />
                  </Row>
                  <Row>
                    <StoreVisits />
                    <RecentOrders />
                  </Row>
                </div>
              </Col>
              <RecentActivity
                rightColumn={rightColumn}
                hideRightColumn={toggleRightColumn}
              />
            </Row>
          </Container>
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardEcommerce;
