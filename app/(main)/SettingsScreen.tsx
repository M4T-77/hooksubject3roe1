import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [explicitContent, setExplicitContent] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    router.replace('/index');
  };

  const SettingItem = ({ icon, label, value, onValueChange }) => (
    <div className="flex justify-between items-center py-4 px-4 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <Ionicons name={icon} size={24} color="#1db954" />
        <p className="text-white text-base font-medium">{label}</p>
      </div>
      <button
        onClick={() => onValueChange(!value)}
        className={`w-12 h-6 rounded-full transition-colors ${
          value ? 'bg-green-500' : 'bg-gray-600'
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full bg-white transition-transform ${
            value ? 'translate-x-6' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );

  const ActionItem = ({ icon, label, onPress, isDestructive = false }) => (
    <button
      onClick={onPress}
      className={`flex items-center py-4 px-4 border-b border-gray-700 w-full ${
        isDestructive ? 'hover:bg-red-950' : 'hover:bg-gray-800'
      } transition-colors`}
    >
      <Ionicons name={icon} size={24} color={isDestructive ? '#e74c3c' : '#1db954'} />
      <p className={`text-base font-medium ml-3 ${isDestructive ? 'text-red-500' : 'text-white'}`}>
        {label}
      </p>
    </button>
  );

  return (
    <>
      <div className="flex-1 bg-black overflow-y-auto h-screen">
        <div className="pt-6">
          <h1 className="text-white text-4xl font-bold px-4 mb-6">Configuración</h1>

          {/* Sección de Reproducción */}
          <div className="mb-6">
            <p className="text-gray-400 text-xs font-bold px-4 mb-3 uppercase">Reproducción</p>
            <SettingItem icon="volume-high" label="Notificaciones" value={notifications} onValueChange={setNotifications} />
            <SettingItem icon="play-circle" label="Reproducción automática" value={autoPlay} onValueChange={setAutoPlay} />
            <SettingItem icon="warning" label="Contenido explícito" value={explicitContent} onValueChange={setExplicitContent} />
          </div>

          {/* Sección de Visualización */}
          <div className="mb-6">
            <p className="text-gray-400 text-xs font-bold px-4 mb-3 uppercase">Visualización</p>
            <SettingItem icon="moon" label="Modo oscuro" value={darkMode} onValueChange={setDarkMode} />
          </div>

          {/* Sección de Información */}
          <div className="mb-6">
            <p className="text-gray-400 text-xs font-bold px-4 mb-3 uppercase">Información</p>
            <ActionItem icon="information-circle" label="Acerca de" onPress={() => alert('Versión 1.0.0')} />
            <ActionItem icon="document-text" label="Términos y Condiciones" onPress={() => alert('Aquí irían los términos...')} />
            <ActionItem icon="shield-checkmark" label="Privacidad" onPress={() => alert('Aquí iría la política de privacidad...')} />
          </div>

          {/* Sección de Cuenta */}
          <div className="mb-8">
            <p className="text-gray-400 text-xs font-bold px-4 mb-3 uppercase">Cuenta</p>
            <ActionItem icon="log-out" label="Cerrar sesión" onPress={() => setShowLogoutModal(true)} isDestructive={true} />
          </div>

          <div className="px-4 pb-8">
            <p className="text-gray-600 text-xs text-center">Versión 1.0.0</p>
          </div>
        </div>
      </div>

      {/* Modal de Cerrar Sesión */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-800 rounded-2xl p-6 w-4/5 max-w-sm flex flex-col items-center">
            {/* Ícono */}
            <div className="bg-green-500 w-16 h-16 rounded-full flex justify-center items-center mb-4">
              <Ionicons name="log-out" size={32} color="black" />
            </div>

            {/* Título */}
            <h2 className="text-white text-xl font-bold mb-2 text-center">Cerrar sesión</h2>

            {/* Descripción */}
            <p className="text-gray-400 text-sm text-center mb-6">
              ¿Estás seguro de que deseas cerrar sesión?
            </p>

            {/* Botones */}
            <div className="w-full flex flex-col gap-3">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors w-full"
              >
                Cerrar sesión
              </button>

              <button
                onClick={() => setShowLogoutModal(false)}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition-colors w-full"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}