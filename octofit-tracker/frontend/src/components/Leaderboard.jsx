import { apiUrl } from '../api'
import ResourceTable from './ResourceTable'

const endpoint = apiUrl('/api/leaderboard/')

export default function Leaderboard() {
  return (
    <ResourceTable
      endpoint={endpoint}
      title="Leaderboard"
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'user', label: 'User' },
        { key: 'team', label: 'Team' },
        { key: 'score', label: 'Score' },
      ]}
    />
  )
}
