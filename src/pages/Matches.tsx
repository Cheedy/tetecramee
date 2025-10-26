import React, { useState, useEffect } from 'react'
import { Loader2, ChevronDownIcon } from 'lucide-react'
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
  JourneeName: string
}

const TEAM_NAME = 'TETE CRAMEE FC'
const TEAM_ID = 5962

const Matches: React.FC = () => {
  const [matches, setMatches] = useState<MatchData[]>([])
  const [allMatches, setAllMatches] = useState<MatchData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedTeam, setSelectedTeam] = useState<string>('TETE CRAMEE FC')
  const [selectedJournee, setSelectedJournee] = useState<string>('Toutes les journées')
  const [teams, setTeams] = useState<string[]>([])
  const [journees, setJournees] = useState<string[]>([])
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false)
  const [isJourneeDropdownOpen, setIsJourneeDropdownOpen] = useState(false)

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
        const sortedMatches = [...sortedMatchesWithDates, ...matchesWithoutDates];
        setAllMatches(sortedMatches);
        setMatches(sortedMatches);
        
        // Extraire toutes les équipes uniques
        const allTeams = new Set<string>();
        result.forEach(match => {
          allTeams.add(match.Equipedom);
          allTeams.add(match.Equipeext);
        });
        setTeams(['Toutes les équipes', ...Array.from(allTeams).sort()]);

        // Extraire toutes les journées uniques
        const allJournees = new Set<string>();
        result.forEach(match => {
          allJournees.add(match.JourneeName);
        });
        // Trier les journées dans l'ordre numérique
        const sortedJournees = Array.from(allJournees).sort((a, b) => {
          const numA = parseInt(a.match(/\d+/)?.[0] || '0');
          const numB = parseInt(b.match(/\d+/)?.[0] || '0');
          return numA - numB;
        });
        setJournees(['Toutes les journées', ...sortedJournees]);
      }
      setLoading(false);
    };

    loadMatches();
  }, [])

  useEffect(() => {
    let filteredMatches = allMatches;

    // Filtrer par équipe
    if (selectedTeam !== 'Toutes les équipes') {
      filteredMatches = filteredMatches.filter(match => 
        match.Equipedom === selectedTeam || match.Equipeext === selectedTeam
      );
    }

    // Filtrer par journée
    if (selectedJournee !== 'Toutes les journées') {
      filteredMatches = filteredMatches.filter(match => 
        match.JourneeName === selectedJournee
      );
    }

    setMatches(filteredMatches);
  }, [selectedTeam, selectedJournee, allMatches])


  const getTeamNameClass = (teamName: string) => {
    if (teamName === TEAM_NAME) {
      return 'text-orange-500 font-bold';
    } else if (teamName === selectedTeam && selectedTeam !== 'Toutes les équipes') {
      return 'text-blue-400 font-bold';
    } else {
      return 'font-bold';
    }
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
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-orange-500">Tous les matchs</h1>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Dropdown pour filtrer par journée */}
          <div className="relative flex-1">
            <button
              onClick={() => {
                setIsJourneeDropdownOpen(!isJourneeDropdownOpen);
                setIsTeamDropdownOpen(false);
              }}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-between transition-colors"
            >
              <span className="truncate">{selectedJournee}</span>
              <ChevronDownIcon 
                className={`transition-transform ${isJourneeDropdownOpen ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </button>
            
            {isJourneeDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-full bg-gray-700 border border-gray-600 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {journees.map((journee) => (
                  <button
                    key={journee}
                    onClick={() => {
                      setSelectedJournee(journee);
                      setIsJourneeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-600 transition-colors ${
                      selectedJournee === journee ? 'bg-orange-600 text-white' : 'text-gray-200'
                    }`}
                  >
                    <span className="truncate">{journee}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown pour filtrer par équipe */}
          <div className="relative flex-1">
            <button
              onClick={() => {
                setIsTeamDropdownOpen(!isTeamDropdownOpen);
                setIsJourneeDropdownOpen(false);
              }}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-between transition-colors"
            >
              <span className="truncate">{selectedTeam}</span>
              <ChevronDownIcon 
                className={`transition-transform ${isTeamDropdownOpen ? 'rotate-180' : ''}`} 
                size={20} 
              />
            </button>
            
            {isTeamDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-full bg-gray-700 border border-gray-600 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {teams.map((team) => (
                  <button
                    key={team}
                    onClick={() => {
                      setSelectedTeam(team);
                      setIsTeamDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-600 transition-colors ${
                      selectedTeam === team ? 'bg-orange-600 text-white' : 'text-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {team !== 'Toutes les équipes' && (
                        <img 
                          src={getTeamLogo(null, team)}
                          alt={team} 
                          className="w-5 h-5 object-cover rounded-full"
                        />
                      )}
                      <span className="truncate">{team}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {matches.map((match, index) => {
        // Gérer les dates nulles
        const getFormattedDate = () => {
          if (!match.Date || match.Date === null) {
            return "Date à déterminer";
          }
          const matchDate = new Date(parseInt(match.Date.slice(6, -2)));
          return matchDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'numeric' });
        };

        const getFormattedTime = () => {
          if (!match.Date || match.Date === null) {
            return "";
          }
          const matchDate = new Date(parseInt(match.Date.slice(6, -2)));
          return matchDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
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
                  <>
                    <p className="text-sm sm:text-base font-bold">VS</p>
                    <p className="text-xs text-orange-400 font-semibold">{getFormattedTime()}</p>
                  </>
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