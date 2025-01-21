export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Portfolio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}