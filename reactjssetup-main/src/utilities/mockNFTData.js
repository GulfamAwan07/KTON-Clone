/**
 * Mock Data for 21 NFT Cards
 * Each card has an ID (1-21), name, description, and placeholder image.
 */
export const nftCollection = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  return {
    id: id,
    name: `Mystic Card #${id}`,
    description: `This is the unique digital artifact for card number ${id} in the collection. It grants you access to exclusive content.`,
    // Using a placeholder image service for now, can be replaced with real IPFS links
    image: `https://placehold.co/600x800/1a1a1a/FFF?text=Card+${id}`,
    attributes: [
      { trait_type: "Element", value: ["Fire", "Water", "Earth", "Air", "Void"][i % 5] },
      { trait_type: "Power", value: Math.floor(Math.random() * 100) }
    ]
  };
});

export const getNFTById = (id) => {
  return nftCollection.find(nft => nft.id === Number(id));
};
