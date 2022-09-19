import { AuthAction, withAuthUser } from "next-firebase-auth";

const MyLoader = () => <div>Loading...</div>;

const Login = () => <div>My login page</div>;

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: MyLoader,
})(Login);
