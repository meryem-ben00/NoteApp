import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_bBthB0mLo",
  ClientId: "1kpsjd7ieh43qpsvfeg3b4kgqn",
}

const UserPool = new CognitoUserPool(poolData);

export default UserPool;