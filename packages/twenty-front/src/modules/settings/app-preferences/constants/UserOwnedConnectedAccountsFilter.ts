import {
  ConnectedAccountScope,
  type MyConnectedAccountsFilterInput,
} from '~/generated-metadata/graphql';

export const USER_OWNED_CONNECTED_ACCOUNTS_FILTER: MyConnectedAccountsFilterInput =
  {
    ownedByCaller: true,
    appConnectionScope: ConnectedAccountScope.USER,
  };
