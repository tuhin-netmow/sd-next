import { useParams } from "next/navigation";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    // let location = useLocation();
    // let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter;
