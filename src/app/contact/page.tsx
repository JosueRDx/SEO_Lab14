import ContactForm from "../../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | RDx Web",
  description: "¿Tienes preguntas o proyectos? Contáctanos para ayudarte con soluciones digitales.",
  openGraph: {
    title: "Contáctanos - RDx Web",
    description: "Envíanos un mensaje y recibe atención personalizada sobre desarrollo web y diseño.",
    url: "https://rdx-web.onrender.com/contact", 
    type: "website",
    images: [
      {
        url: "https://rdx-web.onrender.com/images/seo-contacto.png",
        width: 1200,
        height: 630,
        alt: "Imagen Contacto RDx"
      }
    ]
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Contáctanos
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            ¿Tienes alguna pregunta o proyecto en mente? ¡Nos encantaría escucharte!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="lg:col-span-2 flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
