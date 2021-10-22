export type SearchUserType = {
  login: string
	id: number
}

export type SearchResult = {
	items: SearchUserType[]
}

export type UserType = {
  login: string
  id: number
	avatar_url: string
	followers: number
}

export type SearchPropsType = {
	value: string
	onSubmit: (fixedValue: string) => void
	onBlur: (value: string) => void
	showing: boolean
}

export type UsersListPropsType = {
	term: string
	selectedUser: SearchUserType | null
	onUserSelect: (user: SearchUserType) => void
}

export type UserDetailsPropsType = {
	user: SearchUserType | null
}

export type TimerPropsType = {
	seconds: number
	onChange: (actualSeconds: number) => void
	timerKey: string
}
