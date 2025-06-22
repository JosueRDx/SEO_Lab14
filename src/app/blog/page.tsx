import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | RDx Web",
  description: "Explora publicaciones sobre desarrollo web, tips de programación, y novedades del proyecto RDx.",
  openGraph: {
    title: "Blog de RDx Web",
    description: "Lee artículos y novedades sobre desarrollo moderno con Next.js, diseño web y buenas prácticas.",
    url: "http://localhost:3000/blog", 
    type: "website",
    images: [
      {
        url: "/images/seo-blog.png",
        width: 1200,
        height: 630,
        alt: "Imagen del Blog de RDx Web"
      }
    ]
  }
};


export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">📝 Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bienvenido a nuestro blog donde compartimos artículos, tutoriales y noticias sobre desarrollo web, tecnología y más.
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
              Destacado
            </span>
            <h2 className="text-3xl font-bold text-white mt-4 mb-2">
              Introducción a Next.js 14: Lo que necesitas saber
            </h2>
            <p className="text-blue-100">
              Descubre las nuevas características y mejoras de Next.js 14, incluyendo App Router, Server Components y mucho más.
            </p>
          </div>
          <div className="p-6">
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span>👤 Por RDx Team</span>
              <span className="mx-2">•</span>
              <span>📅 15 de Junio, 2025</span>
              <span className="mx-2">•</span>
              <span>⏱️ 5 min de lectura</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Leer más →
            </button>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Post 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
              <span className="text-white text-4xl">⚛️</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                React 19: Nuevas características
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Explora las nuevas funcionalidades que trae React 19 y cómo pueden mejorar tus aplicaciones.
              </p>
              <div className="flex items-center text-gray-500 text-xs mb-4">
                <span>📅 10 Jun 2025</span>
                <span className="mx-2">•</span>
                <span>⏱️ 3 min</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Leer más →
              </button>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
              <span className="text-white text-4xl">🎨</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Diseño UI/UX moderno
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Tendencias y mejores prácticas para crear interfaces de usuario atractivas y funcionales.
              </p>
              <div className="flex items-center text-gray-500 text-xs mb-4">
                <span>📅 8 Jun 2025</span>
                <span className="mx-2">•</span>
                <span>⏱️ 4 min</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Leer más →
              </button>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
              <span className="text-white text-4xl">🚀</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Optimización de rendimiento
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Técnicas avanzadas para mejorar la velocidad y performance de tus aplicaciones web.
              </p>
              <div className="flex items-center text-gray-500 text-xs mb-4">
                <span>📅 5 Jun 2025</span>
                <span className="mx-2">•</span>
                <span>⏱️ 6 min</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Leer más →
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Quieres estar al día?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y recibe los últimos artículos y tutoriales directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="tu@email.com"
              className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}