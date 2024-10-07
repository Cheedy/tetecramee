import React, { useState, useEffect } from 'react';
import { fetchNextMatch } from '../utils/api';
import { Loader2 } from 'lucide-react';

interface MatchData {
  Equipedom: string;
  Equipeext: string;
  Logodom: string;
  Logoext: string;
  Terrain: string;
  Date: string;
  Etat: boolean;
}

const NextMatch: React.FC = () => {
  const [nextMatch, setNextMatch] = useState<MatchData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNextMatch = async () => {
      const result = await fetchNextMatch();
      if ('error' in result) {
        setError(result.error);
      } else {
        setNextMatch(result);
      }
      setLoading(false);
    };

    loadNextMatch();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-orange-500" size={48} />
      </div>
    );
  }

  if (error || !nextMatch) {
    return (
      <div className="text-red-500 text-center p-4 bg-gray-800 rounded-lg">
        <p>{error || "Aucun match à venir trouvé."}</p>
      </div>
    );
  }

  const matchDate = new Date(parseInt(nextMatch.Date.slice(6, -2)));

  const getLogoUrl = (logoName: string) => {
    return `http://www.football-loisir-amateur.com/Content/images/LogoTeam/${logoName}`;
  };

  return (
    <div className="relative mb-8">
      <img
        src="https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="Football Stadium"
        className="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Prochain Match</h2>
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-black font-bold overflow-hidden">
              {nextMatch.Logodom ? (
                <img src={getLogoUrl(nextMatch.Logodom)} alt={nextMatch.Equipedom} className="w-full h-full object-cover" />
              ) : (
                nextMatch.Equipedom.substring(0, 2)
              )}
            </div>
            <span className="mt-2 text-sm">{nextMatch.Equipedom}</span>
          </div>
          <span className="text-4xl font-bold">VS</span>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-black font-bold overflow-hidden">
              {nextMatch.Logoext ? (
                <img src={getLogoUrl(nextMatch.Logoext)} alt={nextMatch.Equipeext} className="w-full h-full object-cover" />
              ) : (
                nextMatch.Equipeext.substring(0, 2)
              )}
            </div>
            <span className="mt-2 text-sm">{nextMatch.Equipeext}</span>
          </div>
        </div>
        <p className="text-xl">
          {matchDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-xl">{matchDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</p>
        <p className="text-sm mt-2">{nextMatch.Terrain}</p>
      </div>
    </div>
  );
};

export default NextMatch;