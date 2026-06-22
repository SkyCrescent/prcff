import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PersonnelHero from "../../components/Nex/PersonnelHero";
import CabinetSecretaireSection from "../../components/Nex/CabinetSecretaireSection";
import CabinetPremiereSection from "../../components/Nex/CabinetPremiereSection";
import CabinetDeuxiemeSection from "../../components/Nex/CabinetDeuxiemeSection";

export default function PersonnelCCF() {
    return (
        <main>
            <Navbar />
            <PersonnelHero />
            <CabinetSecretaireSection />
            <CabinetPremiereSection />
            <CabinetDeuxiemeSection />
            <Footer/>
        </main>
    );
}
