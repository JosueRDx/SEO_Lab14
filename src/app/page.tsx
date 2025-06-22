import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio | RDx Web",
  description: "Bienvenido a RDx Web, tu fuente para aprender y explorar tecnologías modernas con Next.js y diseño optimizado.",
  openGraph: {
    title: "Inicio - RDx Web",
    description: "Explora nuestro sitio y descubre lo último en desarrollo web moderno con Next.js y más.",
    url: "http://localhost:3000",
    type: "website",
    images: [
      {
        url: "/images/seo-home.png",
        width: 1200,
        height: 630,
        alt: "Imagen Home RDx"
      }
    ]
  }
};


export default function HomePage() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Bienvenido a 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Mi Sitio Web
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Un proyecto desarrollado con Next.js, TypeScript y Tailwind CSS. 
            Descubre contenido increíble y navega por nuestra plataforma moderna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Conoce más sobre nosotros
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Por qué elegir nuestro sitio?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Rápido y Moderno</h3>
              <p className="text-gray-600">
                Construido con Next.js para una experiencia de usuario súper rápida y optimizada.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Diseño Elegante</h3>
              <p className="text-gray-600">
                Interfaz moderna y atractiva diseñada con Tailwind CSS para una experiencia visual excepcional.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Totalmente Funcional</h3>
              <p className="text-gray-600">
                Enrutamiento dinámico, navegación intuitiva y todas las características que necesitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Últimas Publicaciones del Blog
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mi primera publicación</h3>
              <p className="text-gray-600 mb-4">
                Descubre cómo comenzé este increíble viaje en el desarrollo web...
              </p>
              <span className="text-blue-600 font-medium">Leer más →</span>
            </Link>
            <Link href="/blog" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tips para desarrolladores</h3>
              <p className="text-gray-600 mb-4">
                Consejos útiles que todo desarrollador debería conocer...
              </p>
              <span className="text-blue-600 font-medium">Leer más →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}