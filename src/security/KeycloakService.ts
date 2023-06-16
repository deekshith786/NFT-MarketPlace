import Keycloak from "keycloak-js";

const keycloakInstance = new Keycloak();

interface CallbackOneParam<T1 = void, T2 = void> {
  (param1: T1): T2;
}
/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const Login = (onAuthenticatedCallback: CallbackOneParam) => {
  keycloakInstance
    .init({ onLoad: "login-required" })
    .then(function (authenticated) {
      authenticated ? onAuthenticatedCallback() : alert("non authenticated");
    })
    .catch((e) => {
      console.dir(e);
      console.log(`keycloak init exception: ${e}`);
    });
};

const Logout = () => {
  return keycloakInstance.logout()
}
const UserName = (): string | undefined =>
  keycloakInstance?.tokenParsed?.preferred_username;

const Token = (): string | undefined => keycloakInstance?.token;


const KeyCloakService = {
  CallLogin: Login, CallLogout: Logout, GetUserName: UserName, GetAccesToken: Token,
};

export default KeyCloakService;