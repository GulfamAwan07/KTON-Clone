import { AppKitButton } from "@reown/appkit/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useNFTOwnership } from "../utilities/useNFTOwnership";

const Home = () => {
  const navigate = useNavigate();
  const { isConnected, hasNFT, ownedTokenIds, loading } = useNFTOwnership();

  useEffect(() => {
    // If connected and ownership check is done
    if (isConnected && !loading) {
      if (hasNFT && ownedTokenIds.length > 0) {
        // Automatically route to the first owned card
        // In a real scenario, might want a "Dashboard" if multiple are owned, 
        // but requirement says "route them to the correct inner page"
        navigate(`/card/${ownedTokenIds[0]}`);
      }else{
        navigate('/');
      }
    }
  }, [isConnected, hasNFT, ownedTokenIds, loading, navigate]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center selection:bg-purple-500 selection:text-white">
      
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <main className="z-10 text-center space-y-12 px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          <p className="text-purple-400 font-mono tracking-[0.2em] animate-fade-in-up">
            GENESIS COLLECTION
          </p>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600">
            MYSTIC<br/>MINT
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A curated collection of 21 unique digital artifacts. Connect your wallet to access your exclusive content.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="scale-125 transform transition-all duration-300 hover:scale-130">
             {/* Using wrapper to style or center if needed, though AppKitButton has its own styles */}
             <AppKitButton />
          </div>

          {loading && (
            <div className="flex items-center gap-2 text-sm text-gray-500 font-mono animate-pulse">
              <span className="w-2 h-2 bg-purple-500 rounded-full"/>
              Scanning Blockchain...
            </div>
          )}

           {/* Feedback for users who connect but don't own */}
           {isConnected && !loading && !hasNFT && (
             <div className="mt-4 p-4 border border-red-900/50 bg-red-900/10 rounded-lg max-w-sm mx-auto backdrop-blur-md">
                <p className="text-red-300 mb-3">No Artifacts Detected</p>
                <a 
                    href="https://opensea.io/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs uppercase tracking-widest border-b border-white/20 pb-0.5 hover:text-white hover:border-white transition-colors"
                >
                    Acquire on OpenSea
                </a>
             </div>
           )}
        </div>
      </main>

      {/* Footer / Status */}
      <footer className="absolute bottom-6 w-full text-center">
        <p className="text-xs text-gray-700 font-mono uppercase tracking-widest">
            {isConnected ? "Secure Connection Established" : "Waiting for Setup"}
        </p>
      </footer>
    </div>
  );
};

export default Home;
