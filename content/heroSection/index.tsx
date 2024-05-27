import CardImages from "@/components/cardImages";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center mx-auto w-4/5 min-h-screen bg-background
     lg:flex-row lg:justify-center"
    >
      <div className="flex flex-col flex-1 justify-center items-center mr-4 p-4">
        <p className="text-primary text-6xl italic mb-8">
          Cada segundo, uma expressão de estilo.
        </p>
        <p className="text-primary text-xl">
          Bem-vindo à Relogiuns,
          <br /> onde cada segundo é mais do que apenas tempo. É uma expressão
          única de estilo, personalidade e elegância. Aqui, não apenas vendemos
          relógios de pulso excepcionais, mas também curadoria de momentos
          preciosos e momentos de distinção.
        </p>
        <button
          type="button"
          className="bg-primary text-white text-xl p-4 rounded-3xl max-w-sm"
        >
          Explore nossa coleção
        </button>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row">
        <CardImages
          imageSrc="/images/pexels-quang-viet-nguyen-107013384-9561301.jpg"
          imageAlt="relógio de pulso analógico"
        />
        <CardImages
          imageSrc="/images/pexels-javon-swaby-197616-2783873.jpg"
          imageAlt="relógio de pulso analógico"
        />
        <CardImages
          imageSrc="/images/pexels-tdcat-437037.jpg"
          imageAlt="relógio de pulso analógico"
        />
      </div>
    </section>
  );
}
