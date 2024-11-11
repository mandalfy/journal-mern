import JournalEntrySquare from '../Components/JournalEntrySquare/JournalEntrySquare';
import './Home.css';


const Home = () => {

    const handleClick = async () => {
        const test = await fetch("/test",{
            method: "GET",
            headers: {
                "Content-Type": "applications/json",
                "Accept": "applications/json"
            }
        })
        .then(res=> res.json())
        console.log(test)
    }
    return(
        <section className='home'>
            <div className='home_journal-container'>
                <h1 className='home_header'>Welcome to your journal app!!</h1>
                <div className='home_journal-list'>
                <JournalEntrySquare />
                </div>
                <button onClick={()=>handleClick()}>test</button>
            </div>
        </section>
    )
}
export default Home;