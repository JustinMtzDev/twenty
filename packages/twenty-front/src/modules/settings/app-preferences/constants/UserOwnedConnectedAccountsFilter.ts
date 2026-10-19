import {
  ConnectedAccountScope,
  type MyConnectedAccountsFilterInput,
} from '~/generated-metadata/graphql';

export const USER_OWNED_CONNECTED_ACCOUNTS_FILTER: MyConnectedAccountsFilterInput =
  {
    isOwnedByCaller: true,
    appConnectionScope: ConnectedAccountScope.USER,
  };
