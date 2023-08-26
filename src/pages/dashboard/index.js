import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Widget from "../../components/dashboard/home/Widgets";
import BestSellingProducts from "../../components/dashboard/home/BestSellingProducts";
// import RecentActivity from "../../components/dashboard/home/RecentActivity";
import RecentOrders from "../../components/dashboard/home/RecentOrders";
// import Revenue from "../../components/dashboard/home/Revenue";
// import SalesByLocations from "../../components/dashboard/home/SalesByLocations";
import Section from "../../components/dashboard/home/Section";
import StoreVisits from "../../components/dashboard/home/StoreVisits";
import TopSellers from "../../components/dashboard/home/TopSellers";

const DashboardEcommerce = () => {
  // document.title = "Dashboard | Velzon - React Admin & Dashboard Template";

  const [rightColumn, setRightColumn] = useState(true);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col>
              <div className="h-100">
                <Section rightClickBtn={toggleRightColumn} />
                <Row>
                  <Widget />
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
            {/* <RecentActivity
              rightColumn={rightColumn}
              hideRightColumn={toggleRightColumn}
            /> */}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardEcommerce;
