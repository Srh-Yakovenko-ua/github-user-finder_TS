import styles from './UserTitle.module.scss'
import { LocalGithubUser } from '../../types'

interface UserTitleProps
  extends Pick<LocalGithubUser, 'name' | 'login' | 'created_at'> {}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})
export const UserTitle = ({ name, login, created_at }: UserTitleProps) => {
  const joinedData = localDate.format(new Date(created_at))

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedData}</span>
    </div>
  )
}
