import ShadowyLogo from './adinkra-logo-shadowy.svg'
import SilverLogo from './adinkra-logo-silver.svg'

// The logos don't really make much of a difference between modes...
const components = {
  lightMode: ShadowyLogo,
  darkMode: SilverLogo,
  // darkMode: ShadowyLogo,
}

const AdinkraLogo = ({ mode, href = '#', size = '1rem' }) => {
  // console.log("Theme: ", mode);

  const LogoSvg = components[mode]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">Kofi's Logo</span>
      <LogoSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default AdinkraLogo
