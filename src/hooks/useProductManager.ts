import { useCallback } from 'react';
import { getProductManagerContract } from '../contracts';

export function useIsAdmin(address: string): Promise<boolean> {
  const contract = getProductManagerContract();
  return contract.esAdmin(address);
}

export function useGetProducts(): Promise<string[]> {
  const contract = getProductManagerContract();
  return contract.getProducts();
}

export function useGetProductInfo(productAddress: string) {
  const contract = getProductManagerContract();
  return contract.getProductInfo(productAddress);
}

export function useUpdateProductStatus(productAddress: string, isActive: boolean) {
  const contract = getProductManagerContract();
  return contract.updateProductStatus(productAddress, isActive);
}

