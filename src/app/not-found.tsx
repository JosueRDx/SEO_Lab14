import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse">
            404
          </div>
          <div className="text-6xl mb-6 animate-bounce">
            🤔
          </div>
        </div>

        {/* Error Message */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ¡Oops! Página no encontrada
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Lo sentimos, pero la página que estás buscando no existe, ha sido movida 
            o el enlace está roto. No te preocupes, ¡todos nos perdemos a veces!
          </p>
          
          {/* Possible reasons */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Posibles razones:</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                La URL fue escrita incorrectamente
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                La página fue movida o eliminada
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                El enlace que seguiste está desactualizado
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Puede ser un error temporal del servidor
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            ¿Qué puedes hacer ahora?
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              href="/"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              🏠 Ir al Inicio
            </Link>
            <Link 
              href="/about"
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              👥 Acerca de Nosotros
            </Link>
            <Link 
              href="/contact"
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              📧 Contacto
            </Link>
          </div>

          {/* Quick Navigation */}
          <div className="border-t pt-6">
            <h4 className="font-medium text-gray-800 mb-4">Navegación rápida:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
                🏠 Inicio
              </Link>
              <Link href="/about" className="text-blue-600 hover:text-blue-700 transition-colors">
                👥 Nosotros
              </Link>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 transition-colors">
                📧 Contacto
              </Link>
              <Link href="/blog/1" className="text-blue-600 hover:text-blue-700 transition-colors">
                📝 Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <div className="text-4xl mb-3">💡</div>
          <h4 className="font-semibold text-gray-800 mb-2">¿Sabías que...?</h4>
          <p className="text-gray-600 text-sm">
            El error 404 debe su nombre al número de la oficina en el CERN donde se 
            creó la World Wide Web. Cuando no se encontraba una página, 
            ¡literalmente tenían que ir a la oficina 404!
          </p>
        </div>

        {/* Report issue */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Si crees que esto es un error, puedes{" "}
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">
              reportarlo aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}