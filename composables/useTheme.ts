import { ref } from 'vue'

interface Theme {
  primary: string
  secondary: string
  background: string
  borderWidth: string
  shadowSize: string
}

const currentTheme = ref<Theme>({
  primary: '#000000',
  secondary: '#FFD700',
  background: '#FAFAFA',
  borderWidth: '2px',
  shadowSize: '5px'
})

export const useTheme = () => {
  const updateTheme = (newTheme: Partial<Theme>) => {
    currentTheme.value = { ...currentTheme.value, ...newTheme }
    
    // Update CSS variables
    const root = document.documentElement
    root.style.setProperty('--primary-color', currentTheme.value.primary)
    root.style.setProperty('--secondary-color', currentTheme.value.secondary)
    root.style.setProperty('--background-color', currentTheme.value.background)
    root.style.setProperty('--border-width', currentTheme.value.borderWidth)
    root.style.setProperty('--shadow-size', currentTheme.value.shadowSize)
  }

  return {
    theme: currentTheme,
    updateTheme
  }
}