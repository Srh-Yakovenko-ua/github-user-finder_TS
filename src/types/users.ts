//https://api.github.com/users/Srh-Yakovenko-ua

export type LocalGithubUser = {
  login: string
  avatar: string
  name: string
  company: string | null
  blog: string
  location: string
  bio: string
  twitter: string | null
  repos: number
  followers: number
  following: number
  created_at: string
}

export type GithubUser = {
  login: string
  avatar_url: string
  name: string
  company: string | null
  blog: string
  location: string
  bio: string
  twitter_username: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export type GithubError = {
  message: string
  documentation_url: string
}
