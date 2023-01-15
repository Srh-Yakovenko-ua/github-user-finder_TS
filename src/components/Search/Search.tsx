import styles from './Search.module.scss'
import { ReactComponent as IconSearch } from 'assets/icon-search.svg'
import { FormEvent } from 'react'
import { Button } from '../Button'

interface SearchProps {
  hasError: boolean
  onSubmit: (text: string | undefined) => void
}

type FormFields = {
  username: HTMLInputElement
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault()
    const text = e.currentTarget.username.value
    if (text) {
      onSubmit(text)
      e.currentTarget.reset()
    }
  }
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <IconSearch />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No Result</div>}
        <Button>Search</Button>
      </div>
    </form>
  )
}
