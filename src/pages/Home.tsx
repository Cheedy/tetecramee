import React from 'react'
import MatchesDisplay from '../components/MatchesDisplay'
import LeagueTable from '../components/LeagueTable'

const Home: React.FC = () => {
  return (
    <>
      <MatchesDisplay />
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Classement</h2>
        <LeagueTable />
      </div>
    </>
  )
}

export default Home