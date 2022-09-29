export default function Comments(props){
    return (
        <table>
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Commentar</th>
            </tr>
        </thead>
        <tbody>
            {props.comments?.map(comment => (
            <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
            </tr>
            ))}
        </tbody>
        </table>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await res.json()
    return {
        props: {
            comments
        }
    }
}
