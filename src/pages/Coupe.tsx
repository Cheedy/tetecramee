import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const Coupe: React.FC = () => {
  const [expandedJournee, setExpandedJournee] = useState<number | null>(null);
  const [expandedPhases, setExpandedPhases] = useState<boolean>(false);

  const toggleJournee = (journeeNum: number) => {
    setExpandedJournee(expandedJournee === journeeNum ? null : journeeNum);
  };

  const togglePhases = () => {
    setExpandedPhases(!expandedPhases);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-orange-500 mb-2">🏆 Coupe à 7</h1>
        <p className="text-gray-300 text-lg">Saison 2025-2026</p>
      </div>
      
      <div className="space-y-8">
        {/* Section Journées */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-6">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">📅 Journées</h2>
          
          <div className="space-y-4">
            {/* 1ère journée */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <button
                onClick={() => toggleJournee(1)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-white">1ère journée</h3>
                  <span className="text-orange-400 font-medium">Samedi 20 septembre</span>
                </div>
                {expandedJournee === 1 ? (
                  <ChevronUpIcon className="text-orange-400" size={24} />
                ) : (
                  <ChevronDownIcon className="text-orange-400" size={24} />
                )}
              </button>
              
              {expandedJournee === 1 && (
                <div className="p-4 bg-gray-600">
                  <div className="space-y-2">
                    <div className="bg-gray-800 p-3 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center">
                        <div className="w-24 text-left">
                          <span className="text-white font-medium text-xs">BLACK PANAMA FC</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-orange-400 font-bold text-sm">3 - 5</span>
                          <p className="text-gray-400 text-xs mt-1">Stade à définir - 19h</p>
                        </div>
                        <div className="w-24 text-right">
                          <span className="text-white font-medium text-xs">OCCITAN FC B</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center">
                        <div className="w-24 text-left">
                          <span className="text-white font-medium text-xs">FCPS</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-orange-400 font-bold text-sm">7 - 5</span>
                          <p className="text-gray-400 text-xs mt-1">Stade à définir - 19h</p>
                        </div>
                        <div className="w-24 text-right">
                          <span className="text-white font-medium text-xs">ARZ FC</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center">
                        <div className="w-24 text-left">
                          <span className="text-white font-medium text-xs">DEMOS FC</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-orange-400 font-bold text-sm">2 - 1</span>
                          <p className="text-gray-400 text-xs mt-1">Stade à définir - 20h</p>
                        </div>
                        <div className="w-24 text-right">
                          <span className="text-white font-medium text-xs">UFC PARIS 17</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center">
                        <div className="w-24 text-left">
                          <span className="text-white font-medium text-xs">MDJ FC</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-orange-400 font-bold text-sm">4 - 2</span>
                          <p className="text-gray-400 text-xs mt-1">Stade à définir - 20h</p>
                        </div>
                        <div className="w-24 text-right">
                          <span className="text-white font-medium text-xs">TOUT PUISSANT TOLOSA</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center">
                        <div className="w-24 text-left">
                          <span className="text-white font-medium text-xs">TS FC</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-orange-400 font-bold text-sm">2 - 8</span>
                          <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen - 19h</p>
                        </div>
                        <div className="w-24 text-right">
                          <span className="text-white font-medium text-xs">FC VELPEAU</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center">
                        <div className="w-24 text-left">
                          <span className="text-white font-medium text-xs">FC FIVE</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-orange-400 font-bold text-sm">1 - 6</span>
                          <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen - 19h</p>
                        </div>
                        <div className="w-24 text-right">
                          <span className="text-white font-medium text-xs">PANATRECE</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center">
                        <div className="w-24 text-left">
                          <span className="text-white font-medium text-xs">WOLF FC</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-orange-400 font-bold text-sm">0 - 4</span>
                          <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen - 19h</p>
                        </div>
                        <div className="w-24 text-right">
                          <span className="text-white font-medium text-xs">ATLAS LION FC</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center">
                        <div className="w-24 text-left">
                          <span className="text-white font-medium text-xs">LAS ALPACAS</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-orange-400 font-bold text-sm">3 - 4</span>
                          <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen - 19h</p>
                        </div>
                        <div className="w-24 text-right">
                          <span className="text-white font-medium text-xs">FC FOUKY</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-800 to-orange-600 p-3 rounded-lg border-2 border-orange-400 max-w-md mx-auto">
                      <div className="flex items-center">
                        <div className="w-24 text-left">
                          <span className="text-white font-bold text-xs">TETE CRAMEE FC</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-green-300 font-bold text-sm">9 - 4</span>
                          <p className="text-orange-100 text-xs mt-1">Suzanne Lenglen - 20h</p>
                        </div>
                        <div className="w-24 text-right">
                          <span className="text-white font-bold text-xs">FC HAB</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center">
                        <div className="w-24 text-left">
                          <span className="text-white font-medium text-xs">FC PARIS CLICHY C</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-orange-400 font-bold text-sm">8 - 4</span>
                          <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen - 20h</p>
                        </div>
                        <div className="w-24 text-right">
                          <span className="text-white font-medium text-xs">INTERNATIONALE PARIS IV</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg max-w-md mx-auto">
                      <div className="flex items-center">
                        <div className="w-24 text-left">
                          <span className="text-white font-medium text-xs">BRIMBORION</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-orange-400 font-bold text-sm">0 - 11</span>
                          <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen - 20h</p>
                        </div>
                        <div className="w-24 text-right">
                          <span className="text-white font-medium text-xs">PASTA FC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2ème journée */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <button
                onClick={() => toggleJournee(2)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-white">2ème journée</h3>
                  <span className="text-orange-400 font-medium">Samedi 27 septembre</span>
                </div>
                {expandedJournee === 2 ? (
                  <ChevronUpIcon className="text-orange-400" size={24} />
                ) : (
                  <ChevronDownIcon className="text-orange-400" size={24} />
                )}
              </button>
              
              {expandedJournee === 2 && (
                <div className="p-4 bg-gray-600">
                  <div className="space-y-2">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">FC FOUKY</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">FC FIVE</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Stade à définir - 19h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">FC HAB</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">FC PARIS CLICHY C</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Stade à définir - 19h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">UFC PARIS 17</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">BRIMBORION</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Stade à définir - 20h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">PASTA FC</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">DEMOS FC</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Stade à définir - 20h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">TOUT PUISSANT TOLOSA</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">BLACK PANAMA FC</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°1) - 19h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">OCCITAN FC B</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">MDJ FC</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°3) - 19h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">PANATRECE</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">WOLF FC</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°3) - 19h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">FC VELPEAU</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">FCPS</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°1) - 19h</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-800 to-orange-600 p-3 rounded-lg border-2 border-orange-400">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold text-sm">INTERNATIONALE PARIS IV</span>
                        <span className="text-yellow-300 font-bold text-lg">vs</span>
                        <span className="text-white font-bold text-sm">TETE CRAMEE FC</span>
                      </div>
                      <p className="text-orange-100 text-xs mt-1">Suzanne Lenglen (Terrain n°1) - 20h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">ATLAS LION FC</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">LAS ALPACAS</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°3) - 20h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">ARZ FC</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">TS FC</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°1) - 20h</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3ème journée */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <button
                onClick={() => toggleJournee(3)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-white">3ème journée</h3>
                  <span className="text-orange-400 font-medium">Samedi 04 octobre</span>
                </div>
                {expandedJournee === 3 ? (
                  <ChevronUpIcon className="text-orange-400" size={24} />
                ) : (
                  <ChevronDownIcon className="text-orange-400" size={24} />
                )}
              </button>
              
              {expandedJournee === 3 && (
                <div className="p-4 bg-gray-600">
                  <div className="space-y-2">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">MDJ FC</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">BLACK PANAMA FC</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Stade à définir - 19h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">DEMOS FC</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">BRIMBORION</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Stade à définir - 19h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">ATLAS LION FC</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">FC FOUKY</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Stade à définir - 20h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">UFC PARIS 17</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">PASTA FC</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Stade à définir - 20h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">FC FIVE</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">WOLF FC</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°3) - 19h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">TOUT PUISSANT TOLOSA</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">OCCITAN FC B</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°1) - 19h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">PANATRECE</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">LAS ALPACAS</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°1) - 19h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">ARZ FC</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">FC VELPEAU</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°3) - 19h</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-800 to-orange-600 p-3 rounded-lg border-2 border-orange-400">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold text-sm">TETE CRAMEE FC</span>
                        <span className="text-yellow-300 font-bold text-lg">vs</span>
                        <span className="text-white font-bold text-sm">FC PARIS CLICHY C</span>
                      </div>
                      <p className="text-orange-100 text-xs mt-1">Suzanne Lenglen (Terrain n°1) - 20h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">FC HAB</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">INTERNATIONALE PARIS IV</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°1) - 20h</p>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium text-sm">FCPS</span>
                        <span className="text-gray-400 font-bold">vs</span>
                        <span className="text-white font-medium text-sm">TS FC</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">Suzanne Lenglen (Terrain n°3) - 20h</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section Phases éliminatoires */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-6">
          <button
            onClick={togglePhases}
            className="w-full flex justify-between items-center hover:bg-gray-700 p-4 rounded-lg transition-colors"
          >
            <h2 className="text-3xl font-bold text-white">🏆 Phases Éliminatoires</h2>
            {expandedPhases ? (
              <ChevronUpIcon className="text-orange-400" size={32} />
            ) : (
              <ChevronDownIcon className="text-orange-400" size={32} />
            )}
          </button>
          
          {expandedPhases && (
            <div className="space-y-6 mt-6">
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Tour de cadrage - Samedi 25 octobre</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">1er poule B <span className="text-orange-400">vs</span> 3ème poule D</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">2ème poule D <span className="text-orange-400">vs</span> 2ème poule A</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">1ère poule C <span className="text-orange-400">vs</span> 2ème poule E</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">1/4 de finale - Samedi 14 février</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">Vainqueur cadrage <span className="text-orange-400">vs</span> 1er poule A</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">Vainqueur cadrage <span className="text-orange-400">vs</span> 2ème poule B</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">Vainqueur cadrage <span className="text-orange-400">vs</span> 1er poule D</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">1er poule E <span className="text-orange-400">vs</span> 2ème poule C</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Demi-finale - Samedi 21 février</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">Vainqueur 1/4 <span className="text-orange-400">vs</span> Vainqueur 1/4</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">Vainqueur 1/4 <span className="text-orange-400">vs</span> Vainqueur 1/4</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">🏆 FINALE</h3>
              <div className="bg-yellow-700 p-4 rounded-lg text-center">
                <p className="text-white font-bold text-lg">Vainqueur demi-finale <span className="text-yellow-200">vs</span> Vainqueur demi-finale</p>
                <p className="text-yellow-200 text-sm mt-1">Stade à définir</p>
              </div>
            </div>
            </div>
          )}
        </div>

        {/* Section Classements des groupes */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-6">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">📊 Classements des Groupes</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Groupe A */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4">
                <h3 className="text-lg font-bold text-white text-center">Groupe A</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-600 text-gray-200">
                      <th className="px-3 py-2 text-left text-sm">Équipe</th>
                      <th className="px-2 py-2 text-center text-sm">Pts</th>
                      <th className="px-2 py-2 text-center text-sm">J</th>
                      <th className="px-2 py-2 text-center text-sm">+/-</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">OCCITAN FC B</td>
                      <td className="px-2 py-2 text-center text-green-400 font-bold">4</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-green-400">+2</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">MDJ FC</td>
                      <td className="px-2 py-2 text-center text-green-400 font-bold">4</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-green-400">+2</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">BLACK PANAMA FC</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-red-400">-2</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-white font-medium text-sm">TOUT PUISSANT TOLOSA</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-red-400">-2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Groupe B */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-4">
                <h3 className="text-lg font-bold text-white text-center">Groupe B</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-600 text-gray-200">
                      <th className="px-3 py-2 text-left text-sm">Équipe</th>
                      <th className="px-2 py-2 text-center text-sm">Pts</th>
                      <th className="px-2 py-2 text-center text-sm">J</th>
                      <th className="px-2 py-2 text-center text-sm">+/-</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">FC VELPEAU</td>
                      <td className="px-2 py-2 text-center text-green-400 font-bold">4</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-green-400">+6</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">FCPS</td>
                      <td className="px-2 py-2 text-center text-green-400 font-bold">4</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-green-400">+2</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">ARZ FC</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-red-400">-2</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-white font-medium text-sm">TS FC</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-red-400">-6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Groupe C */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg border-2 border-orange-500">
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-4">
                <h3 className="text-lg font-bold text-white text-center">Groupe C 🔥</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-600 text-gray-200">
                      <th className="px-3 py-2 text-left text-sm">Équipe</th>
                      <th className="px-2 py-2 text-center text-sm">Pts</th>
                      <th className="px-2 py-2 text-center text-sm">J</th>
                      <th className="px-2 py-2 text-center text-sm">+/-</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-600 bg-gradient-to-r from-orange-900 to-orange-800">
                      <td className="px-3 py-2 text-orange-300 font-bold text-sm">🏆 TETE CRAMEE FC</td>
                      <td className="px-2 py-2 text-center text-green-400 font-bold">4</td>
                      <td className="px-2 py-2 text-center text-orange-300">1</td>
                      <td className="px-2 py-2 text-center text-green-400">+5</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">FC PARIS CLICHY C</td>
                      <td className="px-2 py-2 text-center text-green-400 font-bold">4</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-green-400">+4</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">INTERNATIONALE PARIS IV</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-red-400">-4</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-white font-medium text-sm">FC HAB</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-red-400">-5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Groupe D */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-red-600 to-red-500 p-4">
                <h3 className="text-lg font-bold text-white text-center">Groupe D</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-600 text-gray-200">
                      <th className="px-3 py-2 text-left text-sm">Équipe</th>
                      <th className="px-2 py-2 text-center text-sm">Pts</th>
                      <th className="px-2 py-2 text-center text-sm">J</th>
                      <th className="px-2 py-2 text-center text-sm">+/-</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">PANATRECE</td>
                      <td className="px-2 py-2 text-center text-green-400 font-bold">4</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-green-400">+5</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">ATLAS LION FC</td>
                      <td className="px-2 py-2 text-center text-green-400 font-bold">4</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-green-400">+4</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">FC FOUKY</td>
                      <td className="px-2 py-2 text-center text-green-400 font-bold">4</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-green-400">+1</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">LAS ALPACAS</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-red-400">-1</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">WOLF FC</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-red-400">-4</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-white font-medium text-sm">FC FIVE</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-red-400">-5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Groupe E */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-green-600 to-green-500 p-4">
                <h3 className="text-lg font-bold text-white text-center">Groupe E</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-600 text-gray-200">
                      <th className="px-3 py-2 text-left text-sm">Équipe</th>
                      <th className="px-2 py-2 text-center text-sm">Pts</th>
                      <th className="px-2 py-2 text-center text-sm">J</th>
                      <th className="px-2 py-2 text-center text-sm">+/-</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">PASTA FC</td>
                      <td className="px-2 py-2 text-center text-green-400 font-bold">4</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-green-400">+11</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">DEMOS FC</td>
                      <td className="px-2 py-2 text-center text-green-400 font-bold">4</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-green-400">+1</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="px-3 py-2 text-white font-medium text-sm">UFC PARIS 17</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-red-400">-1</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-white font-medium text-sm">BRIMBORION</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-gray-300">1</td>
                      <td className="px-2 py-2 text-center text-red-400">-11</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupe;
