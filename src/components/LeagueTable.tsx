import React, { useState, useEffect } from 'react'
import { fetchLeagueTable } from '../utils/api'
import { Loader2 } from 'lucide-react'

interface TeamData {
  IdEquipe: number;
  Nom: string;
  Points: number;
  Victoire: number;
  Egalite: number;
  Defaite: number;
  Bp: number;
  Bc: number;
  CinqDernier: string[];
}

const LeagueTable: React.FC = () => {
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLeagueTable = async () => {
      const result = await fetchLeagueTable();
      if ('error' in result) {
        setError(result.error);
      } else {
        const sortedTeams = result.sort((a, b) => b.Points - a.Points);
        setTeams(sortedTeams);
      }
      setLoading(false);
    };

    loadLeagueTable();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-orange-500" size={48} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4 bg-gray-800 rounded-lg">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Équipe</th>
            <th className="py-2 px-4">J</th>
            <th className="py-2 px-4">G</th>
            <th className="py-2 px-4">N</th>
            <th className="py-2 px-4">P</th>
            <th className="py-2 px-4">BP</th>
            <th className="py-2 px-4">BC</th>
            <th className="py-2 px-4">Pts</th>
            <th className="py-2 px-4">Forme</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.IdEquipe} className={`border-b border-gray-700 ${team.Nom === 'TETE CRAMEE FC' ? 'bg-orange-900 bg-opacity-50' : ''}`}>
              <td className="py-2 px-4">{index + 1}</td>
              <td className={`py-2 px-4 font-medium ${team.Nom === 'TETE CRAMEE FC' ? 'font-bold text-orange-500' : ''}`}>{team.Nom}</td>
              <td className="py-2 px-4">{team.Victoire + team.Egalite + team.Defaite}</td>
              <td className="py-2 px-4">{team.Victoire}</td>
              <td className="py-2 px-4">{team.Egalite}</td>
              <td className="py-2 px-4">{team.Defaite}</td>
              <td className="py-2 px-4">{team.Bp}</td>
              <td className="py-2 px-4">{team.Bc}</td>
              <td className="py-2 px-4 font-bold">{team.Points}</td>
              <td className="py-2 px-4">
                {team.CinqDernier.map((result, i) => (
                  <span key={i} className={`inline-block w-3 h-3 rounded-full mr-1 ${
                    result === 'won' ? 'bg-green-500' :
                    result === 'draw' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}></span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeagueTable