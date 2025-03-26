import '../components/Team.css'

const TeamMemberCard = ({ name, title }) => {
    return (
        <div className='team'>
            <div>
            <h1>{name}</h1>
            <h2>{title}</h2>
            </div>
        </div>
    );
}

export default TeamMemberCard