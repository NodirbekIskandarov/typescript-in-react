export type ProfileProps = {
    name: string
}
export const Profile = ({name}: ProfileProps) => {
    return (
        <div>profile {name}</div>
    )
}