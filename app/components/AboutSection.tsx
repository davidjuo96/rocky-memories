"use client";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.jpg"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sobre nosotros
            </h2>
          <p className="text-base lg:text-lg">
            Somos los Junior y sus secuaces. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Nisl vel pretium lectus quam id leo
            in vitae turpis. Praesent tristique magna sit amet purus gravida
            quis blandit. Lectus magna fringilla urna porttitor rhoncus dolor
            purus non enim. Ut lectus arcu bibendum at varius vel pharetra vel
            turpis. Ipsum nunc aliquet bibendum enim facilisis gravida neque
            convallis a. Vulputate ut pharetra sit amet aliquam id diam. Risus
            quis varius quam quisque. Dolor sit amet consectetur adipiscing elit
            duis tristique. Pellentesque dignissim enim sit amet venenatis urna
            cursus eget nunc. Suspendisse potenti nullam ac tortor vitae.
          </p>
          <div className="mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
