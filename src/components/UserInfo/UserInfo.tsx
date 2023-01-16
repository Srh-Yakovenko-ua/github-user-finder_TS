import styles from './UserInfo.module.scss'
import { LocalGithubUser } from '../../types'
import { InfoItem, InfoItemProps } from '../InfoItem'
import { ReactComponent as IconCompany } from 'assets/icon-company.svg'
import { ReactComponent as IconLocation } from 'assets/icon-location.svg'
import { ReactComponent as IconTwitter } from 'assets/icon-twitter.svg'
import { ReactComponent as IconBlog } from 'assets/icon-website.svg'

interface UserInfoProps
  extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {}

export const UserInfo = ({
  company,
  twitter,
  location,
  blog,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <IconLocation />,
      text: location,
    },
    {
      icon: <IconBlog />,
      text: blog,
      isLink: true,
    },
    {
      icon: <IconTwitter />,
      text: twitter,
    },
    {
      icon: <IconCompany />,
      text: company,
    },
  ]

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => {
        return (
          <InfoItem
            key={`${item.text}-${index}`}
            icon={item.icon}
            text={item.text}
            isLink={item.isLink}
          />
        )
      })}
    </div>
  )
}
