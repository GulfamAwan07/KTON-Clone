import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getNFTById, nftCollection } from "../utilities/mockNFTData";
import { useNFTOwnership } from "../utilities/useNFTOwnership";

const NFTDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ownedTokenIds, loading, isConnected } = useNFTOwnership();
  const [card, setCard] = useState(null);

  useEffect(() => {
    // If not connected, redirect home
    if (!isConnected && !loading) {
        // Allow a small grace period for loading state to settle, but for now strict redirect
        navigate("/"); 
        // Commented out to allow viewing freely for dev/demo if needed, 
        // but requirement says "route them ... for that specific card".
    }

    // Load card data
    const foundCard = getNFTById(id);
    if (foundCard) {
      setCard(foundCard);
    }
  }, [id, isConnected, loading, navigate]);

  if (!card) return <div className="min-h-screen flex items-center justify-center text-white bg-black">Loading Artifact...</div>;

  const isOwner = ownedTokenIds.includes(Number(id));

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference pointer-events-none">
        <div className="text-xl font-bold tracking-tighter pointer-events-auto cursor-pointer">MYSTIC MINT</div>
        <div className="pointer-events-auto">
             <appkit-button /> 
        </div>
      </nav>

      <main className="container mx-auto px-4 h-screen flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center perspective-1000">
          <div className="relative group w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 transition-all duration-500 hover:scale-105 hover:shadow-purple-700/40">
            <img 
              src={card.image} 
              alt={card.name} 
              className="w-full h-full object-cover"
            />
            {/* Overlay if not owned? Optional. */}
            {!isOwner && !loading && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm">
                <p className="text-red-400 font-mono">LOCKED // NOT OWNED</p>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-mono text-purple-400 tracking-widest uppercase">Artifact #{card.id}</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              {card.name}
            </h1>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            {card.description}
          </p>

          <div className="py-6 border-t border-gray-800 grid grid-cols-2 gap-4">
            {card.attributes.map((attr, idx) => (
              <div key={idx} className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <span className="block text-xs text-gray-500 uppercase tracking-wider">{attr.trait_type}</span>
                <span className="text-lg font-medium">{attr.value}</span>
              </div>
            ))}
          </div>

          {isOwner ? (
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors uppercase tracking-wide">
              Access Secret Content
            </button>
          ) : (
            <div className="flex gap-4">
                <button 
                    onClick={() => navigate('/')}
                    className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide">
                    Back to Hub
                </button>
                <a 
                    href="https://opensea.io/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-8 py-3 bg-[#2081E2] text-white font-bold rounded-full hover:bg-[#1868B7] transition-colors uppercase tracking-wide"
                >
                    Buy on OpenSea
                </a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default NFTDetail;
