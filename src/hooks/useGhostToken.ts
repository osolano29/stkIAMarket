import { useCallback } from 'react';
import { getGhostTokenContract } from '../contracts';

export function useGetRewardBalance(address: string): Promise<number> {
  const contract = getGhostTokenContract();
  return contract.getMyRewardBalance(address);
}

export function useClaimRewards() {
  const contract = getGhostTokenContract();
  return contract.claimMyGhostRewards();
}

export function useDepositGo(amount: number) {
  const contract = getGhostTokenContract();
  return contract.depositTokenGo(amount);
}
