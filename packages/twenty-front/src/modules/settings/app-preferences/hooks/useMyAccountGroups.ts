import { useMyConnectedAccounts } from '@/settings/accounts/hooks/useMyConnectedAccounts';
import { USER_OWNED_CONNECTED_ACCOUNTS_FILTER } from '@/settings/app-preferences/constants/UserOwnedConnectedAccountsFilter';
import { groupConnectedAccountsByNativeAccount } from '@/settings/app-preferences/utils/groupConnectedAccountsByNativeAccount';
import { ConnectedAccountProvider } from 'twenty-shared/types';

const ACCOUNT_GROUP_PROVIDERS: ReadonlySet<ConnectedAccountProvider> = new Set([
  ConnectedAccountProvider.GOOGLE,
  ConnectedAccountProvider.MICROSOFT,
  ConnectedAccountProvider.IMAP_SMTP_CALDAV,
  ConnectedAccountProvider.APP,
]);

export const useMyAccountGroups = () => {
  const { accounts, loading } = useMyConnectedAccounts({
    providers: ACCOUNT_GROUP_PROVIDERS,
    filter: USER_OWNED_CONNECTED_ACCOUNTS_FILTER,
  });

  return {
    groups: groupConnectedAccountsByNativeAccount(accounts),
    loading,
  };
};
