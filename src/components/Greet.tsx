type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `welcome ${props.name} ${messageCount}` : `is not logged in`
                }
            </h2>
        </div>
    )
}