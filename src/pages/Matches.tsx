import React, { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { fetchMatches, getTeamLogo } from '../utils/api'

interface MatchData {
  Equipedom: string
  Equipeext: string
  Logodom: string | null
  Logoext: string | null
  Terrain: string
  Date: string
  Etat: boolean
  Scoredom: number | null
  Scoreext: number | null
}

const TEAM_NAME = 'TETE CRAMEE FC'
const TEAM_ID = 5962

const Matches: React.FC = () => {
  const [matches, setMatches] = useState<MatchData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadMatches = async () => {
      const result = await fetchMatches();
      if ('error' in result) {
        setError(result.error);
      } else {
        // Séparer les matchs avec et sans dates
        const matchesWithDates = result.filter(match => match.Date && match.Date !== null);
        const matchesWithoutDates = result.filter(match => !match.Date || match.Date === null);
        
        // Trier les matchs avec dates
        const sortedMatchesWithDates = matchesWithDates.sort((a, b) => {
          const dateA = new Date(parseInt(a.Date.slice(6, -2)));
          const dateB = new Date(parseInt(b.Date.slice(6, -2)));
          return dateA.getTime() - dateB.getTime();
        });
        
        // Combiner : matchs triés + matchs sans dates à la fin
        setMatches([...sortedMatchesWithDates, ...matchesWithoutDates]);
      }
      setLoading(false);
    };

    loadMatches();
  }, [])


  const getTeamNameClass = (teamName: string) => {
    return teamName === TEAM_NAME ? 'text-orange-500 font-bold' : 'font-bold';
  }

  const getMatchResult = (match: MatchData) => {
    if (match.Scoredom === null || match.Scoreext === null) return null;

    const isTeteCrameeHome = match.Equipedom === TEAM_NAME;
    const teteCrameeScore = isTeteCrameeHome ? match.Scoredom : match.Scoreext;
    const opponentScore = isTeteCrameeHome ? match.Scoreext : match.Scoredom;

    if (teteCrameeScore > opponentScore) {
      return <span className="bg-green-500 text-white font-bold py-1 px-2 rounded-full text-xs">Victoire</span>;
    } else if (teteCrameeScore < opponentScore) {
      return <span className="bg-red-500 text-white font-bold py-1 px-2 rounded-full text-xs">Défaite</span>;
    } else {
      return <span className="bg-gray-500 text-white font-bold py-1 px-2 rounded-full text-xs">Nul</span>;
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-orange-500" size={48} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4 bg-gray-800 rounded-lg">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4">Tous les matchs</h1>
      {matches.map((match, index) => {
        // Gérer les dates nulles
        const getFormattedDate = () => {
          if (!match.Date || match.Date === null) {
            return "Date à déterminer";
          }
          const matchDate = new Date(parseInt(match.Date.slice(6, -2)));
          return matchDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric' });
        };
        
        const isPlayed = match.Scoredom !== null && match.Scoreext !== null
        const isTeteCrameeInvolved = match.Equipedom === TEAM_NAME || match.Equipeext === TEAM_NAME
        return (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-2 sm:p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 sm:space-x-2 w-1/3">
                <img 
                  src={getTeamLogo(match.Logodom, match.Equipedom)}
                  alt={match.Equipedom} 
                  className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full"
                />
                <p className={`${getTeamNameClass(match.Equipedom)} text-xs sm:text-sm truncate`}>
                  {match.Equipedom}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/3">
                <p className="text-xs text-gray-400">
                  {getFormattedDate()}
                </p>
                {isPlayed ? (
                  <p className="text-sm sm:text-base font-bold">{match.Scoredom} - {match.Scoreext}</p>
                ) : (
                  <p className="text-sm sm:text-base font-bold">VS</p>
                )}
                <p className="text-xs text-gray-400 truncate">{match.Terrain}</p>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 justify-end w-1/3">
                <p className={`${getTeamNameClass(match.Equipeext)} text-xs sm:text-sm text-right truncate`}>
                  {match.Equipeext}
                </p>
                <img 
                  src={getTeamLogo(match.Logoext, match.Equipeext)}
                  alt={match.Equipeext} 
                  className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full"
                />
              </div>
            </div>
            {isTeteCrameeInvolved && isPlayed && (
              <div className="mt-1 flex justify-center">
                {getMatchResult(match)}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Matches