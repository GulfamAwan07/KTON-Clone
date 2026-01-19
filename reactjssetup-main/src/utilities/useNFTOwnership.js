import { useAppKitAccount } from "@reown/appkit/react";
import { useState, useEffect } from "react";

/**
 * Hook to check if the current user owns any valid NFTs from the collection.
 * Currently MOCKED to always return ID #1 if connected.
 */
export const useNFTOwnership = () => {
  const { address, isConnected } = useAppKitAccount();
  const [ownedTokenIds, setOwnedTokenIds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isConnected || !address) {
      setOwnedTokenIds([]);
      return;
    }

    const checkOwnership = async () => {
      setLoading(true);
      
      // Simulate API/Contract call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // MOCK LOGIC: 
      // Always simulating that the user owns card #1 and #7 for demonstration.
      // Replace this block with real Wagmi contract reads later.
      const mockOwnedList = [1, 7]; 
      
      setOwnedTokenIds(mockOwnedList);
      setLoading(false);
    };

    checkOwnership();
  }, [isConnected, address]);

  return {
    isConnected,
    address,
    ownedTokenIds,
    loading,
    hasNFT: ownedTokenIds.length > 0
  };
};
