import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'

export default function About() {
    return (
        <>
        <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <div className="divide-y divide-gray-200">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-[4rem] md:leading-[3.5rem]">
                About
              </h1>
              <p className="text-lg text-gray-500">
                Who I am, What I do, Where I go.
              </p>
            </div>
            </div>
            </main>
            </SectionContainer>
      </>
    )
}
