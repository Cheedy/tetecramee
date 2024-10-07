import React from 'react'
import LeagueTable from '../components/LeagueTable'

const LeagueTablePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Classement</h1>
      <LeagueTable />
    </div>
  )
}

export default LeagueTablePage