import Person from './Person'
import persons from '../data/persons'

function Persons({ infoOfPerson, setInfoOfPerson }) {
  return (
    <div className="cards">
      {persons.map((item) => {
        return (
          <Person
            {...item}
            infoOfPerson={infoOfPerson}
            setInfoOfPerson={setInfoOfPerson}
            key={item.id}
          />
        )
      })}
    </div>
  )
}

export default Persons
