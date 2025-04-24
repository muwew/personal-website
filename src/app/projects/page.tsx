import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "MemFlip Cognitive Game (Final Year Project)",
      description: "A research-based memory game built with React/Next.js to evaluate cognitive performance. Includes full scoring logic and Supabase integration.",
      link: "https://mem-flip.vercel.app/menu", // Replace with your link
      image: "/images/memFlipPreview.jpg", // Same as above or could be a special demo page
    },
    {
      title: "Voice Message Transcription Telegram Bot",
      description: "A Telegram bot that transcribes voice messages to text using OpenAI's Whisper API developed using Python.",
      link: "https://github.com/muwew/voice-msg-transcription-bot.git",
      image: "/images/voiceTranscriptionBotPreview.jpg", // Put an image in /public/images/
    },
    {
      title: "Data Analysis Project",
      description: "Python-based analysis of cognitive game data and survey data using pandas, seaborn and scikit-learn.",
      link: "https://github.com/muwew/fyp_data_analysis.git",
      image: "/images/dataAnalysisPreview.jpg",
    },
    {
        title: "Landing Page",
        description: "A simple HTML webpage exploring CSS elements to create a landing page.",
        link: "https://muwew.github.io/landing-page/",
        livePreview: "https://muwew.github.io/landing-page/",
    },
    {
        title: "Sketchboard",
        description: "A simple HTML webpage using mouse events to draw on a canvas.",
        link: "https://muwew.github.io/sketchboard/",
        livePreview: "https://muwew.github.io/sketchboard/",
    },
    {
        title: "Rock Paper Scissors",
        description: "A simple HTML webpage utilising Javascript for backend game logic.",
        link: "https://muwew.github.io/rock-paper-scissors/",
        livePreview: "https://muwew.github.io/rock-paper-scissors/",
    },
  ];

  return (
    <>
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
