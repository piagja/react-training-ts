import React, { useState } from 'react'
import Logo from '../../img/logo-github.svg'
import api from '../../services/api'

import {Title, Main, Input, Image, P, Div, Header, Button} from './styles'
import {toast} from 'react-toastify'

interface Repository {
  full_name: string,
  description: string,
  owner: {
    login: string,
    avatar_url: string
  }
}

const Home: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])

  async function handleRepoData() {
    try {
      const response = await api.get(`repos/${newRepo}`)
      const repository = response.data
      setRepositories([...repositories, repository])
      setNewRepo('')

      toast('Repository succesfully added!', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      })
    } catch (error) {
      return toast.dark('Oops! Something went wrong!', {
        autoClose: 2500,
      })
    }
  }

  const handleClearRepo = () => {
    setRepositories([])
    toast('Repositories successfully cleared!', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }

  return (
    <>
      <Image src={Logo} alt='Logo' />
      <Header>
        <Input
        value={newRepo}
        onChange={e => setNewRepo(e.target.value)}
        type='text'
        placeholder='Search repositories, like user/repo' />
        <Button onClick={handleRepoData}>Search</Button>
        <Button onClick={handleClearRepo}>Clear</Button>
      </Header>
      <Main>
        {repositories.map((repo, id) => (
          <Div key={id}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <Title>Repo: {repo.full_name}</Title>
            <P>Description: {repo.description}</P>
          </Div>
          ))}
      </Main>
    </>
  )
}

export default Home