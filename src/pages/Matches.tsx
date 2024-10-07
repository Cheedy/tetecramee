import React, { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { UrlToGoogle, fetchMatches } from '../utils/api'

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
        const sortedMatches = result.sort((a, b) => {
          const dateA = new Date(parseInt(a.Date.slice(6, -2)));
          const dateB = new Date(parseInt(b.Date.slice(6, -2)));
          return dateA.getTime() - dateB.getTime();
        });
        setMatches(sortedMatches);
      }
      setLoading(false);
    };

    loadMatches();
  }, [])

  const getImageUrl = (logo: string | null) => {
    if (!logo) {
      return "https://i.imgur.com/rkCZV39.png";
    }
    return UrlToGoogle(`http://www.football-loisir-amateur.com/Content/images/LogoTeam/${logo}`) + "?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=fr&_x_tr_hl=fr&_x_tr_pto=wapp";
  }

  const getTeamNameClass = (teamName: string) => {
    return teamName === TEAM_NAME ? 'text-orange-500 font-bold' : 'font-bold';
  }

  const getMatchResult = (match: MatchData) => {
    if (match.Scoredom === null || match.Scoreext === null) return null;

    const isTeteCrameeHome = match.Equipedom === TEAM_NAME;
    const teteCrameeScore = isTeteCrameeHome ? match.Scoredom : match.Scoreext;
    const opponentScore = isTeteCrameeHome ? match.Scoreext : match.Scoredom;

    if (teteCrameeScore > opponentScore) {
      return <span className="bg-green-500 text-white font-bold py-1 px-3 rounded-full text-xs">Victoire</span>;
    } else if (teteCrameeScore < opponentScore) {
      return <span className="bg-red-500 text-white font-bold py-1 px-3 rounded-full text-xs">Défaite</span>;
    } else {
      return <span className="bg-gray-500 text-white font-bold py-1 px-3 rounded-full text-xs">Nul</span>;
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
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Tous les matchs</h1>
      {matches.map((match, index) => {
        const matchDate = new Date(parseInt(match.Date.slice(6, -2)))
        const isPlayed = match.Scoredom !== null && match.Scoreext !== null
        const isTeteCrameeInvolved = match.Equipedom === TEAM_NAME || match.Equipeext === TEAM_NAME
        return (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 grid items-center grid-cols-10 gap-4">
            <div className="col-span-2 flex items-center space-x-4">
              <img 
                src={getImageUrl(match.Logodom)}
                alt={match.Equipedom} 
                className="w-12 h-12 object-cover rounded-full"
              />
              <p className={getTeamNameClass(match.Equipedom)}>
                {match.Equipedom}
              </p>
            </div>
            <div className="col-span-1 text-center">
              {isPlayed && <p className="text-2xl font-bold">{match.Scoredom}</p>}
            </div>
            <div className="col-span-4 text-center">
              <p className="text-sm text-gray-400">
                {matchDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm text-gray-400">
                {matchDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
              </p>
              {!isPlayed && <p className="text-xl font-bold mt-2">VS</p>}
              <p className="text-xs mt-1 mb-2">{match.Terrain}</p>
              {isTeteCrameeInvolved && isPlayed && getMatchResult(match)}
            </div>
            <div className="col-span-1 text-center">
              {isPlayed && <p className="text-2xl font-bold">{match.Scoreext}</p>}
            </div>
            <div className="col-span-2 flex items-center space-x-4 justify-self-end">
              <p className={getTeamNameClass(match.Equipeext)}>
                {match.Equipeext}
              </p>
              <img 
                src={getImageUrl(match.Logoext)}
                alt={match.Equipeext} 
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Matches