import { GithubUser } from '../../types'

export const IsGithubUser = (user: any): user is GithubUser => {
  return 'login' in user
}
