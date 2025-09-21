import React, { useState } from 'react';
import playerStats from '../data/playerStats.json';
import leagueStats from '../data/leagueStats.json';
import cupStats from '../data/cupStats.json';

type MainTabType = 'joueurs' | 'ligue' | 'coupe';
type SubTabType = 'buteurs' | 'passeurs';

const Statistics: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<MainTabType>('joueurs');
  const [activeSubTab, setActiveSubTab] = useState<SubTabType>('buteurs');

  const sortedLeagueScorers = [...leagueStats.buteurs].sort((a, b) => b.buts - a.buts);
  const sortedLeagueAssisters = [...leagueStats.passeurs].sort((a, b) => b.assists - a.assists);
  const sortedCupScorers = [...cupStats.buteurs].sort((a, b) => b.buts - a.buts);
  const sortedCupAssisters = [...cupStats.passeurs].sort((a, b) => b.assists - a.assists);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Statistiques</h1>
      
      {/* Onglets principaux */}
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 mr-2 rounded-t-lg ${activeMainTab === 'joueurs' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setActiveMainTab('joueurs')}
        >
          Joueurs
        </button>
        <button
          className={`px-4 py-2 mr-2 rounded-t-lg ${activeMainTab === 'ligue' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setActiveMainTab('ligue')}
        >
          Ligue
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${activeMainTab === 'coupe' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
          onClick={() => setActiveMainTab('coupe')}
        >
          Coupe
        </button>
      </div>

      {/* Contenu des onglets */}
      {activeMainTab === 'joueurs' && (
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

      {(activeMainTab === 'ligue' || activeMainTab === 'coupe') && (
        <div>
          {/* Sous-onglets pour Ligue et Coupe */}
          <div className="flex mb-4 bg-gray-700 p-1 rounded-lg w-fit">
            <button
              className={`px-4 py-2 mr-1 rounded ${activeSubTab === 'buteurs' ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setActiveSubTab('buteurs')}
            >
              Buteurs
            </button>
            <button
              className={`px-4 py-2 rounded ${activeSubTab === 'passeurs' ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setActiveSubTab('passeurs')}
            >
              Passeurs
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-x-auto">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">
                {activeMainTab === 'ligue' ? '🏆 Classement Ligue' : '🏆 Classement Coupe'} - {activeSubTab === 'buteurs' ? 'Buteurs' : 'Passeurs'}
              </h2>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700 text-gray-200">
                  <th className="px-2 sm:px-4 py-2 text-left">Rang</th>
                  <th className="px-2 sm:px-4 py-2 text-left">Joueur</th>
                  <th className="px-2 sm:px-4 py-2 text-left">Poste</th>
                  <th className="px-2 sm:px-4 py-2 text-right">
                    {activeSubTab === 'buteurs' ? 'Buts' : 'Passes'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  let data;
                  if (activeMainTab === 'ligue') {
                    data = activeSubTab === 'buteurs' ? sortedLeagueScorers : sortedLeagueAssisters;
                  } else {
                    data = activeSubTab === 'buteurs' ? sortedCupScorers : sortedCupAssisters;
                  }
                  
                  return data.map((player, index) => (
                    <tr key={player.id} className="border-b border-gray-700">
                      <td className="px-2 sm:px-4 py-2 text-gray-300">{index + 1}</td>
                      <td className="px-2 sm:px-4 py-2 text-white font-medium">{player.joueur}</td>
                      <td className="px-2 sm:px-4 py-2 text-orange-400">{player.poste}</td>
                      <td className="px-2 sm:px-4 py-2 text-right text-white font-bold text-lg">
                        {activeSubTab === 'buteurs' ? (player as any).buts : (player as any).assists}
                      </td>
                    </tr>
                  ));
                })()}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;