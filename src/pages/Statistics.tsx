import React, { useState } from 'react';
import playerStats from '../data/playerStats.json';
import cupStats from '../data/cupStats.json';

type TabType = 'joueurs' | 'buteurs' | 'coupe';

const Statistics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('joueurs');
  const sortedPlayers = [...playerStats].sort((a, b) => b.buts - a.buts);
  const sortedCupPlayers = [...cupStats].sort((a, b) => b.buts - a.buts);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Statistiques</h1>
      
      {/* Onglets */}
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 mr-2 rounded-t-lg ${activeTab === 'joueurs' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setActiveTab('joueurs')}
        >
          Joueurs
        </button>
        <button
          className={`px-4 py-2 mr-2 rounded-t-lg ${activeTab === 'buteurs' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setActiveTab('buteurs')}
        >
          Classement Buteurs
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'coupe' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setActiveTab('coupe')}
        >
          Classement Buteurs Coupe
        </button>
      </div>

      {/* Contenu des onglets */}
      {activeTab === 'joueurs' && (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Effectif TETE CRAMEE FC</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {playerStats.map((player) => (
              <div key={player.id} className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white">{player.joueur}</h3>
                <p className="text-orange-400 font-medium">{player.poste}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'buteurs' && (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700 text-gray-200">
                <th className="px-2 sm:px-4 py-2 text-left">Rang</th>
                <th className="px-2 sm:px-4 py-2 text-left">Joueur</th>
                <th className="px-2 sm:px-4 py-2 text-left">Poste</th>
                <th className="px-2 sm:px-4 py-2 text-right">Buts</th>
              </tr>
            </thead>
            <tbody>
              {sortedPlayers.map((player, index) => (
                <tr key={player.id} className="border-b border-gray-700">
                  <td className="px-2 sm:px-4 py-2 text-gray-300">{index + 1}</td>
                  <td className="px-2 sm:px-4 py-2 text-white font-medium">{player.joueur}</td>
                  <td className="px-2 sm:px-4 py-2 text-orange-400">{player.poste}</td>
                  <td className="px-2 sm:px-4 py-2 text-right text-white font-bold text-lg">
                    {player.buts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'coupe' && (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-x-auto">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white">🏆 Classement Buteurs Coupe</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700 text-gray-200">
                <th className="px-2 sm:px-4 py-2 text-left">Rang</th>
                <th className="px-2 sm:px-4 py-2 text-left">Joueur</th>
                <th className="px-2 sm:px-4 py-2 text-left">Poste</th>
                <th className="px-2 sm:px-4 py-2 text-right">Buts</th>
              </tr>
            </thead>
            <tbody>
              {sortedCupPlayers.map((player, index) => (
                <tr key={player.id} className="border-b border-gray-700">
                  <td className="px-2 sm:px-4 py-2 text-gray-300">{index + 1}</td>
                  <td className="px-2 sm:px-4 py-2 text-white font-medium">{player.joueur}</td>
                  <td className="px-2 sm:px-4 py-2 text-orange-400">{player.poste}</td>
                  <td className="px-2 sm:px-4 py-2 text-right text-white font-bold text-lg">
                    {player.buts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Statistics;