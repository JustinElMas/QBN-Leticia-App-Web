export function AudioPlayer() {
  return `
    <div id="ambient-audio-container" class="fixed bottom-5 right-5 z-50 flex items-center">
      <audio id="bg-music" loop preload="auto">
        <source src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf756.mp3?filename=lofi-study-112191.mp3" type="audio/mpeg">
      </audio>

      <button 
        id="toggle-audio-btn" 
        class="group flex items-center gap-2.5 rounded-full bg-slate-900/90 px-4 py-3 text-white shadow-xl backdrop-blur-md transition-all hover:bg-slate-900 hover:scale-105 active:scale-95 border border-white/10"
        title="Activar/Silenciar música de ambiente"
      >
        <span id="audio-icon" class="text-base animate-pulse">🎵</span>
        <span id="audio-text" class="text-xs font-bold tracking-wide">Música: <strong class="text-indigo-400">Off</strong></span>
      </button>
    </div>
  `;
}