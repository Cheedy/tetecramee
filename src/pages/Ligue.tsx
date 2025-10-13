import React, { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { fetchLeagueTable, getTeamLogo } from '../utils/api'
import LeagueTable from '../components/LeagueTable'

interface MatchData {
  Equipedom: string
  Equipeext: string
  Scoredom: number | null
  Scoreext: number | null
  Logodom: string | null
  Logoext: string | null
  Date: string
  Terrain: string
}

const Ligue: React.FC = () => {
  const [loading, setLoading] = useState(true)

  // Résultats de la journée 1
  const journee1Matches: MatchData[] = [
    {
      Equipedom: "TOUT PUISSANT TOLOSA",
      Equipeext: "BRIMBORION FC",
      Scoredom: 5,
      Scoreext: 3,
      Logodom: null,
      Logoext: null,
      Date: "11/10/2025",
      Terrain: "Centre Sportif Suzanne Lenglen"
    },
    {
      Equipedom: "TETE CRAMEE FC",
      Equipeext: "CONTROLES DESORIENTES ASC",
      Scoredom: 3,
      Scoreext: 0,
      Logodom: "IMG_4511.png",
      Logoext: null,
      Date: "11/10/2025",
      Terrain: "Centre Sportif Suzanne Lenglen"
    },
    {
      Equipedom: "FC FIVE",
      Equipeext: "INTERNATIONALE PARIS IV",
      Scoredom: 3,
      Scoreext: 4,
      Logodom: null,
      Logoext: null,
      Date: "11/10/2025",
      Terrain: "Centre Sportif Suzanne Lenglen"
    },
    {
      Equipedom: "ARZ FC",
      Equipeext: "BLACK PANAMA FC",
      Scoredom: 5,
      Scoreext: 2,
      Logodom: null,
      Logoext: "BPFC - Logo blanc sur noir.png",
      Date: "11/10/2025",
      Terrain: "Centre Sportif Suzanne Lenglen"
    },
    {
      Equipedom: "FCPS",
      Equipeext: "LAS ALPACAS",
      Scoredom: 1,
      Scoreext: 4,
      Logodom: null,
      Logoext: "47572484_578497172579041_5205478604447678464_n.jpg",
      Date: "11/10/2025",
      Terrain: "Centre Sportif Suzanne Lenglen"
    },
    {
      Equipedom: "DEMOS FC",
      Equipeext: "WOLF FC",
      Scoredom: 3,
      Scoreext: 2,
      Logodom: null,
      Logoext: null,
      Date: "11/10/2025",
      Terrain: "Centre Sportif Suzanne Lenglen"
    },
    {
      Equipedom: "FC HAB",
      Equipeext: "MDJ FC",
      Scoredom: null,
      Scoreext: null,
      Logodom: null,
      Logoext: null,
      Date: "03/01/2026",
      Terrain: "Centre Sportif Suzanne Lenglen"
    }
  ]

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-orange-500" size={48} />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
          Ligue 1 - Saison 2025-2026
        </h1>
        <p className="text-gray-400">Foot à 7 - Samedi - 1ère division Challenge</p>
      </div>

      {/* Résultats Journée 1 */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">📅 Journée 1</h2>
        <div className="space-y-4">
          {journee1Matches.map((match, index) => {
            const isPlayed = match.Scoredom !== null && match.Scoreext !== null
            const isTeteCramee = match.Equipedom === 'TETE CRAMEE FC' || match.Equipeext === 'TETE CRAMEE FC'
            
            return (
              <div 
                key={index} 
                className={`bg-gray-700 rounded-lg p-4 ${isTeteCramee ? 'ring-2 ring-orange-500' : ''}`}
              >
                <div className="flex items-center justify-between">
                  {/* Équipe Domicile */}
                  <div className="flex items-center space-x-2 w-2/5">
                    <img 
                      src={getTeamLogo(match.Logodom, match.Equipedom)}
                      alt={match.Equipedom} 
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <p className={`font-bold text-sm sm:text-base truncate ${match.Equipedom === 'TETE CRAMEE FC' ? 'text-orange-500' : ''}`}>
                      {match.Equipedom}
                    </p>
                  </div>

                  {/* Score / VS */}
                  <div className="flex flex-col items-center justify-center w-1/5">
                    {isPlayed ? (
                      <div className="flex items-center gap-2">
                        <span className={`text-2xl font-bold ${match.Scoredom! > match.Scoreext! ? 'text-green-500' : 'text-gray-400'}`}>
                          {match.Scoredom}
                        </span>
                        <span className="text-gray-500">-</span>
                        <span className={`text-2xl font-bold ${match.Scoreext! > match.Scoredom! ? 'text-green-500' : 'text-gray-400'}`}>
                          {match.Scoreext}
                        </span>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xl font-bold text-gray-400">VS</p>
                        <p className="text-xs text-orange-500">{match.Date}</p>
                      </div>
                    )}
                  </div>

                  {/* Équipe Extérieur */}
                  <div className="flex items-center justify-end space-x-2 w-2/5">
                    <p className={`font-bold text-sm sm:text-base text-right truncate ${match.Equipeext === 'TETE CRAMEE FC' ? 'text-orange-500' : ''}`}>
                      {match.Equipeext}
                    </p>
                    <img 
                      src={getTeamLogo(match.Logoext, match.Equipeext)}
                      alt={match.Equipeext} 
                      className="w-8 h-8 object-cover rounded-full"
                    />
                  </div>
                </div>
                
                {/* Terrain */}
                {isPlayed && (
                  <p className="text-xs text-gray-400 mt-2 text-center">
                    {match.Terrain} • {match.Date}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Classement */}
      <div>
        <h2 className="text-2xl font-bold text-orange-500 mb-4">🏆 Classement</h2>
        <LeagueTable />
      </div>
    </div>
  )
}

export default Ligue

