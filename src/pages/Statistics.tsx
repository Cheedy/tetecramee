import React, { useState } from 'react';
import playerStats from '../data/playerStats.json';

type TabType = 'buteurs' | 'passeurs';

const Statistics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('buteurs');

  const sortedPlayers = [...playerStats].sort((a, b) => {
    if (activeTab === 'buteurs') {
      return b.buts - a.buts;
    } else {
      return b.assists - a.assists;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Statistiques</h1>
      
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 mr-2 rounded-t-lg ${activeTab === 'buteurs' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setActiveTab('buteurs')}
        >
          Buteurs
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'passeurs' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setActiveTab('passeurs')}
        >
          Passeurs
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700 text-gray-200">
              <th className="px-4 py-2 text-left">Rang</th>
              <th className="px-4 py-2 text-left">Joueur</th>
              <th className="px-4 py-2 text-left">Poste</th>
              <th className="px-4 py-2 text-right">{activeTab === 'buteurs' ? 'Buts' : 'Passes décisives'}</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.map((player, index) => (
              <tr key={player.id} className="border-b border-gray-700">
                <td className="px-4 py-2 text-gray-300">{index + 1}</td>
                <td className="px-4 py-2 text-white">{player.joueur}</td>
                <td className="px-4 py-2 text-gray-300">{player.poste}</td>
                <td className="px-4 py-2 text-right text-white font-bold">
                  {activeTab === 'buteurs' ? player.buts : player.assists}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistics;