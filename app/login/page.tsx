import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--koov-blue)] to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <Image
              src="/koov_cover.jpg"
              alt="KOOV COVER Logo"
              width={50}
              height={50}
              className="rounded-lg object-cover"
            />
            <span className="text-2xl font-serif font-bold text-[var(--koov-black)]">KOOV COVER</span>
          </Link>
          <h1 className="text-2xl font-bold text-[var(--koov-black)] mb-2">Iniciar Sesión</h1>
          <p className="text-[var(--koov-gray)]">Accede a tu cuenta KOOV COVER</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--koov-black)] mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--koov-blue)] focus:border-transparent outline-none transition-all"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[var(--koov-black)] mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--koov-blue)] focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[var(--koov-blue)] focus:ring-[var(--koov-blue)]"
              />
              <span className="ml-2 text-sm text-[var(--koov-gray)]">Recordarme</span>
            </label>
            <a href="#" className="text-sm text-[var(--koov-blue)] hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--koov-blue)] text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[var(--koov-gray)]">
            ¿No tienes cuenta?{" "}
            <a href="#" className="text-[var(--koov-blue)] hover:underline font-semibold">
              Regístrate aquí
            </a>
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[var(--koov-gray)] hover:text-[var(--koov-blue)] transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
