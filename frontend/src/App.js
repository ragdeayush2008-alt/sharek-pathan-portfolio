import "@/App.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

function App() {
    return (
        <div className="App bg-ink font-body text-cream">
            <div className="noise-overlay" />
            <ScrollProgress />
            <Navbar />
            <main>
                <Hero />
                <Work />
                <Contact />
            </main>
        </div>
    );
}

export default App;
