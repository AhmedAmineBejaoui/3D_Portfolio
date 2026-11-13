import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const groups = [
  { title: "Education", items: [
    "Engineering in Computer Science — ISAMM · since September 2026",
    "M1 Research in Computer Science — ISI Ariana, Tunis El Manar · since September 2026",
    "Computer Science degree, Software Engineering and Information Systems — ISSAT Mateur · 2023–2026",
  ] },
  { title: "Certifications", items: [
    "Cisco — CyberOps Associate",
    "NVIDIA — Associate, AI Infrastructure and Operations",
    "Oracle — Agentic AI Certified Foundations Associate · September 2026",
    "DataCamp — AI Fundamentals · April 2025",
  ] },
  { title: "Community & awards", items: [
    "Tunisian Ambassador — International Machine Learning Competition · 2026",
    "3rd prize — LEONI Hackathon · December 2025",
    "1st prize, problem solving — Choufli Code, IEEE Computer Society ISSAT Mateur",
    "Tunisian Red Crescent volunteer · March 2024–April 2025",
  ] },
  { title: "Languages", items: [
    "Arabic — native", "French — working proficiency", "English — intermediate", "German — C1",
  ] },
];
function Qualifications() {
  return <>
    <p className={styles.sectionSubText}>Learning & community</p>
    <h2 className={styles.sectionHeadText}>Background.</h2>
    <div className="mt-10 grid md:grid-cols-2 gap-6">
      {groups.map(group => <section key={group.title} className="bg-tertiary rounded-2xl p-7">
        <h3 className="text-xl font-bold text-white mb-5">{group.title}</h3>
        <ul className="text-secondary list-disc pl-5 space-y-4">
          {group.items.map(item => <li key={item}>{item}</li>)}
        </ul>
      </section>)}
    </div>
  </>;
}
export default SectionWrapper(Qualifications, "background");
