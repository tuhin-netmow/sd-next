import { combineReducers } from "redux";

// Dashboard Ecommerce
import DashboardEcommerceReducer from "./dashboardEcommerce/reducer";

const rootReducer = combineReducers({
  DashboardEcommerce: DashboardEcommerceReducer,
});

export default rootReducer;
