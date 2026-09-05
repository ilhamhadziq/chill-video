import Header from "../../Layout/Header";
import Card from "../../UI/Card";

const Home = ()=> {
    return(
        <main className="min-h-screen bg-black ">
            <Header></Header>
            <br className="mb-4"/>
            <section className="grid grid-cols-3 gap-3 py-1.5 px-5 items-center justify-center sm:grid-cols-6">
                <Card src="public/allofus.png" alt="All of Us"></Card>
                <Card src="public/allofus.png" alt="All of Us"></Card>
                <Card src="public/allofus.png" alt="All of Us"></Card>
                <Card src="public/allofus.png" alt="All of Us"></Card>
            </section>
            
        </main>
    )
}
export default Home;