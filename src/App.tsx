import { Container } from './components/Container'
import { TheHeader } from './components/TheHeader'
import { Search } from './components/Search'
import { UserCard } from './components/UserCard'
import { defaultUser } from './mock'
import { useState } from 'react'
import { GithubError, GithubUser, LocalGithubUser } from './types'
import { IsGithubUser } from './utils/typeguards/isGithubUser'
import { extractLocalUser } from './utils/typeguards/extract-local-user'

const BASE_URL = `https://api.github.com/users/`

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)

  const fetchUser = async (userName: string | undefined) => {
    const data = await fetch(`${BASE_URL}${userName}`)
    const user = (await data.json()) as GithubUser | GithubError

    if (IsGithubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  )
}

export default App
