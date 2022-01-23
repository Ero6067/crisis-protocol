import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Character from '../components/Character'
import axios from 'axios'

const HomeScreen = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    console.log('hello')
    const fetchCharacters = async () => {
      const { data } = await axios.get('/api/characters')

      setCharacters(data)
    }
    fetchCharacters()
  }, [])

  return (
    <>
      <h1 className="text-white">Characters</h1>
      <Row>
        {characters.map((character) => (
          <Col key={character.index} sm={12} md={6} lg={4} xl={3}>
            <Character key={character._id} character={character} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
