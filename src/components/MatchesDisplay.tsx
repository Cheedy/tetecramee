import React, { useState, useEffect } from 'react';
import { fetchNextAndLastMatch } from '../utils/api';
import { Loader2 } from 'lucide-react';

interface MatchData {
  Equipedom: string;
  Equipeext: string;
  Logodom: string | null;
  Logoext: string | null;
  Terrain: string;
  Date: string;
  Etat: boolean;
  Scoredom: number | null;
  Scoreext: number | null;
}

const MatchesDisplay: React.FC = () => {
  const [matches, setMatches] = useState<{ nextMatch: MatchData | null, lastMatch: MatchData | null } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMatches = async () => {
      const result = await fetchNextAndLastMatch();
      if ('error' in result) {
        setError(result.error);
      } else {
        setMatches(result);
      }
      setLoading(false);
    };

    loadMatches();
  }, []);

  const getImageUrl = (logo: string | null) => {
    if (!logo) {
      return "https://i.imgur.com/rkCZV39.png";
    }
    return `https://www-football--loisir--amateur-com.translate.goog/Content/images/LogoTeam/${logo}?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=fr&_x_tr_hl=fr&_x_tr_pto=wapp`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-orange-500" size={48} />
      </div>
    );
  }

  if (error || !matches) {
    return (
      <div className="text-red-500 text-center p-4 bg-gray-800 rounded-lg">
        <p>{error || "Aucun match trouvé."}</p>
      </div>
    );
  }

  const MatchCard: React.FC<{ match: MatchData | null, title: string }> = ({ match, title }) => {
    if (!match) return null;

    const matchDate = new Date(parseInt(match.Date.slice(6, -2)));

    return (
      <div className="relative mb-4 md:mb-0 md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Football Stadium"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-black font-bold overflow-hidden">
                <img src={getImageUrl(match.Logodom)} alt={match.Equipedom} className="w-full h-full object-cover" />
              </div>
              <span className="mt-1 text-xs">{match.Equipedom}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold mb-1">
                {match.Scoredom !== null ? `${match.Scoredom} - ${match.Scoreext}` : 'VS'}
              </span>
              <span className="text-xs">
                {matchDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-black font-bold overflow-hidden">
                <img src={getImageUrl(match.Logoext)} alt={match.Equipeext} className="w-full h-full object-cover" />
              </div>
              <span className="mt-1 text-xs">{match.Equipeext}</span>
            </div>
          </div>
          <p className="text-sm">{match.Terrain}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
      <MatchCard match={matches.lastMatch} title="Dernier Match" />
      <MatchCard match={matches.nextMatch} title="Prochain Match" />
    </div>
  );
};

export default MatchesDisplay;