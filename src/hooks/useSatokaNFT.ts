import { useCallback } from 'react';
import { getSatokaNFTContract } from '../contracts';

export function useGetNFTInfo(tokenType: number) {
  const contract = getSatokaNFTContract();
  return contract.getNFTInfo(tokenType);
}

export function useMintNFT(to: string, tokenType: number) {
  const contract = getSatokaNFTContract();
  return contract.mintNFT(to, tokenType);
}

export function useGetUri(tokenType: number) {
  const contract = getSatokaNFTContract();
  return contract.uri(tokenType);
}

export function useIsFundingActive(): Promise<boolean> {
  const contract = getSatokaNFTContract();
  return contract.isFundingActive();
}

export function useGetMyRewardBalance(): Promise<number> {
  const contract = getSatokaNFTContract();
  return contract.getMyRewardBalance();
}

export function useClaimMyGhostRewards() {
  const contract = getSatokaNFTContract();
  return contract.claimMyGhostRewards();
}
