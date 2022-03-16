import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Spanish with Mariela</title>
      </Head>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-indigo-900 sm:text-4xl">Hola, I'm Mariela and I'd like teach you Spanish!</span>
          </h1>
          <div align="center" class="mt-4">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/W-yz7M4ncKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p class="mt-4 text-xl text-gray-500 leading-8">I'm a native speaker from Lima, Peru. I speak fluent English and have a degree in hotel and tourism management. </p>
          <p class="mt-4 text-xl text-gray-500 leading-8">I worked in the hotel industry for many years. I love to talk and help people. I've been told that I'm great at making people feel comfortable around me.</p>
          <p class="mt-4 text-xl text-gray-500 leading-8">I have been teaching Spanish for 7 years. My methodology is based on pictures, reading, listening and a lot of talking to improve the pronunciation and listening.</p>
          <p class="mt-4 text-xl text-gray-500 leading-8">I want to make you feel both comfortable and challenged to learn Spanish according to your goals.</p>
          <p class="mt-4 text-xl text-gray-500 leading-8">Let's enjoy our classes together by doing it very interactively-talking, discussing pictures, reading, and listening to music.</p>
        </div>
      </div>
    </div>
  )
};
