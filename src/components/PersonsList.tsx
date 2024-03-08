type PersonsListProps = {
    persons: {
        first: string,
        last: string,
        number: number
    }[]
}
export const PersonsList = (props: PersonsListProps) => {
    return (
        <div>
            {props.persons.map(person => {
                return (
                    <h2 key={person.number}>{person.first} {person.last} - {person.number}</h2>
                )
            })}
        </div>
    )
}