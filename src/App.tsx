import { useState } from 'react'
import { CareNetwork } from './components/CareNetwork'
import { Footer } from './components/Footer'
import { HelpSection } from './components/HelpSection'
import { Hero } from './components/Hero'
import { InterventionProposal } from './components/InterventionProposal'
import { Sources } from './components/Sources'
import { TopicCard } from './components/TopicCard'
import { TopicModal } from './components/TopicModal'
import { NavBar } from './components/NavBar'
import { WhyItMatters } from './components/WhyItMatters'
import { revealOrder, useReveal } from './hooks/useReveal'
import { topics, type Topic } from './content/topics'

function App() {
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null)
  useReveal()

  return (
    <>
      <NavBar />
      <Hero />

      <main>
        <WhyItMatters />

        <section
          id="temas"
          aria-labelledby="temas-titulo"
          className="bg-secao px-5 py-16 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="temas-titulo"
              data-reveal
              className="mx-auto max-w-2xl text-center text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
            >
              Sobre o que você quer entender hoje?
            </h2>
            <p data-reveal className="mx-auto mt-4 max-w-xl text-center text-lg text-pretty">
              Escolha um tema e explore no seu ritmo, com explicações curtas e
              sem julgamentos.
            </p>

            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {topics.map((topic, index) => (
                <li key={topic.id} data-reveal style={revealOrder(index)}>
                  <TopicCard topic={topic} onOpen={() => setActiveTopic(topic)} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CareNetwork />
        <InterventionProposal />
        <Sources />
        <HelpSection />
      </main>

      <Footer />

      {activeTopic && (
        <TopicModal
          key={activeTopic.id}
          topic={activeTopic}
          onClose={() => setActiveTopic(null)}
        />
      )}
    </>
  )
}

export default App
