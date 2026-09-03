import Header from "../../Layout/Header";
import Card from "../../UI/Card";

const Home = ()=> {
    return(
        <main className="min-h-screen bg-black">
            <Header></Header>
            <br className="mb-4"/>
            <Card src="public/allofus.png" alt="All of Us"></Card>
        </main>
    )
}
export default Home;