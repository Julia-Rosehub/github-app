import React, { useState, useEffect } from 'react'
import axios from 'axios'
import s from './Github.module.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
	SearchUserType,
} from './../../../types/types'
import { Search } from './../Search'
import { UsersList } from './../UsersList'
import { UserDetails } from './../UserDetails'

export const Github = () => {
	let initialSearchState = 'julia-rosehub'
	const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
	const [showingButton, setShowingButton] = useState(false)
	const [searchTerm, setSearchTerm] = useState(initialSearchState)

	const onBlur = (value: string) => {
		if (value !== searchTerm) {
			setShowingButton(true)
		}
	}

	useEffect(() => {
		if (selectedUser) {
			document.title = selectedUser.login
		}
	}, [selectedUser])

	return <Container style={{ marginTop: 20 + "px" }}>
		<Row>
		<Col>
			<Search value={searchTerm} onSubmit={setSearchTerm} onBlur={onBlur} showing={showingButton} />
			{' '}
			<Button variant="primary" onClick={() => {
				setSearchTerm(initialSearchState)
				setShowingButton(false)
			}}>reset</Button>
		</Col>
		<Col>
				<UsersList term={searchTerm} selectedUser={selectedUser} onUserSelect={setSelectedUser} />
				</Col>
				<Col xs={6}>
				<UserDetails user={selectedUser} />
		</Col>
		</Row>
		</Container>
}
