import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de Nosotros | RDx Web",
  description: "Conoce más sobre el equipo detrás de RDx Web, nuestros valores y objetivos como desarrolladores de soluciones digitales.",
  openGraph: {
    title: "Sobre Nosotros - RDx Web",
    description: "Somos un equipo apasionado por la tecnología y la creación de experiencias web modernas y accesibles.",
    url: "http://localhost:3000/about",
    type: "website",
    images: [
      {
        url: "/images/seo-about.png",
        width: 1200,
        height: 630,
        alt: "Imagen Sobre Nosotros RDx"
      }
    ]
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Acerca de 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {" "}Nosotros
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Conoce nuestra historia, misión y el equipo detrás de este proyecto
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="text-3xl mr-4">📖</div>
            <h2 className="text-2xl font-semibold text-gray-800">Nuestra Historia</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Comenzamos este proyecto con la visión de crear una plataforma web moderna y funcional 
            que sirva como ejemplo de las mejores prácticas en desarrollo web. Utilizando las 
            tecnologías más actuales como Next.js, TypeScript y Tailwind CSS, hemos construido 
            una experiencia que combina rendimiento, diseño y funcionalidad.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nuestro enfoque se centra en la experiencia del usuario, la accesibilidad y el 
            código limpio y mantenible. Cada línea de código ha sido escrita pensando en la 
            escalabilidad y la facilidad de mantenimiento.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="text-3xl mr-4">👥</div>
            <h2 className="text-2xl font-semibold text-gray-800">Nuestro Equipo</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                RD
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Rodrigo Desarrollador</h3>
              <p className="text-gray-600 text-sm mb-3">Desarrollador Full Stack</p>
              <p className="text-gray-600 text-sm">
                Especialista en React, Next.js y arquitectura de aplicaciones modernas.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Josue Diseñador</h3>
              <p className="text-gray-600 text-sm mb-3">UI/UX Designer</p>
              <p className="text-gray-600 text-sm">
                Experto en diseño de interfaces intuitivas y experiencias de usuario excepcionales.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">🎯</div>
              <h2 className="text-xl font-semibold text-gray-800">Nuestra Misión</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Crear soluciones web innovadoras que combinen tecnología de vanguardia con 
              diseño excepcional, proporcionando experiencias digitales que superen las 
              expectativas de nuestros usuarios.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">⭐</div>
              <h2 className="text-xl font-semibold text-gray-800">Nuestros Valores</h2>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Calidad en cada detalle
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Innovación constante
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Experiencia del usuario primero
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Código limpio y mantenible
              </li>
            </ul>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <div className="flex items-center mb-6">
            <div className="text-3xl mr-4">⚡</div>
            <h2 className="text-2xl font-semibold text-gray-800">Tecnologías que Utilizamos</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Vercel</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  );
}