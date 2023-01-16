import styles from './UserCard.module.scss'
import { UserStat } from '../UserStat'
import { LocalGithubUser } from '../../types'
import { UserTitle } from '../UserTitle'
import { UserInfo } from '../UserInfo'

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.login} className={styles.avatar} />
      <UserTitle
        name={props.name}
        created_at={props.created_at}
        login={props.login}
      />
      <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.followers}
      />
      <UserInfo
        company={props.company}
        blog={props.blog}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  )
}
