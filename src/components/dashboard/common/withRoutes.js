import { useParams } from "next/navigation";

function withRoutes(Component) {
  function ComponentWithRouterProp(props) {
    // let location = useLocation();
    // let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRoutes;
