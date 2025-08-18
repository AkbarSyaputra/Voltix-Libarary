import React, { useState, useRef, useEffect } from 'react';
import { Zap, Music, Play, Pause, Volume2, Heart, Download, Share2, Camera, Sparkles, Mail, Bolt } from 'lucide-react';
import dutaImg from "./assets/duta.jpg";
import bungaimg from "./assets/bunga.jpg";
import foto1 from "./assets/1.jpg";
import foto2 from "./assets/2.jpg";
import foto3 from "./assets/3.jpg";
import foto4 from "./assets/4.jpg";
import foto5 from "./assets/5.jpg";
import foto6 from "./assets/6.jpg";
import foto7 from "./assets/7.jpg";
import foto8 from "./assets/8.jpg";
import foto9 from "./assets/9.jpg";
import foto10 from "./assets/10.jpg";
// import foto11 from "./assets/11.jpg";
import foto12 from "./assets/12.jpg";
import foto13 from "./assets/13.jpg";
import foto14 from "./assets/14.jpg";
import foto15 from "./assets/15.jpg";
import foto20 from "./assets/20.jpg";
import foto21 from "./assets/21.jpg";
import foto22 from "./assets/22.jpg";
import foto23 from "./assets/23.jpg";
import foto24 from "./assets/24.jpg";
import foto25 from "./assets/25.jpg";
import foto26 from "./assets/26.jpg";
import foto27 from "./assets/27.jpg";
import foto28 from "./assets/28.jpg";
import foto29 from "./assets/29.jpg";
// import foto30 from "./assets/30.jpg";

interface Photo {
  id: number;
  url: string;
  title: string;
  description: string;
  type: 'landscape' | 'portrait';
  isSpecial?: boolean;
}

interface MousePosition {
  x: number;
  y: number;
}

const mainPhotos: Photo[] = [
  {
    id: 1,
    url: foto1,
    title: "PKKMB",
    description: "my fotbar ketika pkkmb ",
    type: "landscape"
  },
  {
    id: 2,
    url: foto2,
    title: "DUO TERBAIK!!",
    description: "Kanjil FAVORIT ACUU!!",
    type: "landscape"
  },
  {
    id: 3,
    url: foto3,
    title: "SIAPA KITA?? VOLTIXX",
    description: "first bgt fotbar",
    type: "landscape"
  },
  {
    id: 4,
    url: foto9,
    title: "Ka Bunga",
    description: "namanya cakep kyk orangnya",
    type: "portrait"
  },
  {
    id: 5,
    url: foto7,
    title: "Mabar yuk",
    description: "ini juga cakep kok orgnya",
    type: "portrait"
  },
  {
    id: 6,
    url: foto8,
    title: "Ka Duta",
    description: "namanya cakep kyk orangnya",
    type: "portrait"
  },
  {
    id: 7,
    url: foto4,
    title: "INAGURASI CIHUY",
    description: "peri-nya lucu btw",
    type: "landscape"
  },
  {
    id: 8,
    url: foto5,
    title: "iyah",
    description: "lah aing kaga ada",
    type: "landscape"
  },
  {
    id: 9,
    url: foto6,
    title: "LDDK STRESS",
    description: "udah yappingnya??",
    type: "landscape"
  },
  {
    id: 10,
    url: foto10,
    title: "my freelancer",
    description: "gapapa dah terimakasih sudah berjasa mengatur parkir",
    type: "portrait"
  },
  {
    id: 11,
    url: foto20,
    title: "Beli Bawang",
    description: "Ga tau yang penting ikut",
    type: "portrait"
  },
  {
    id: 12,
    url: foto12,
    title: "bintang acu",
    description: "iya bintang, iyaa...",
    type: "portrait"
  },
  {
    id: 13,
    url: foto13,
    title: "First meeting",
    description: "when yah kumpul lagi",
    type: "landscape"
  },
  {
    id: 14,
    url: foto14,
    title: "LDDK STRRESS 2",
    description: "gosong chef",
    type: "landscape"
  },
  {
    id: 15,
    url: foto21,
    title: "Closingan",
    description: "Nyalain Areng ko 1 jam",
    type: "landscape"
  },
  {
    id: 16,
    url: foto27,
    title: "Penghijauan Dulu",
    description: "Cape jirr",
    type: "portrait"
  },
  {
    id: 17,
    url: foto29,
    title: "Aku Radik",
    description: "Jangan Lupain Aku Yaa",
    type: "portrait"
  },
  {
    id: 18,
    url: foto22,
    title: "Closingan momen",
    description: "Enakk nyoo",
    type: "portrait"
  },
  {
    id: 19,
    url: foto23,
    title: "Closingan momen",
    description: "",
    type: "landscape"
  },
  {
    id: 20,
    url: foto26,
    title: "Closingan momen",
    description: "Nyalain Areng ko 1 jam",
    type: "landscape"
  },
  {
    id: 21,
    url: foto28,
    title: "Sidang Senat",
    description: "Day 1 PKKMB",
    type: "landscape"
  },
];

const specialPhotos: Photo[] = [
  {
    id: 101,
    url: dutaImg,
    title: "Tukang Parkir Idaman",
    description: "Terimakasih ya kaka manjila",
    type: 'portrait',
    isSpecial: true
  },
  {
    id: 102,
    url: bungaimg,
    title: "kaka Manjila Gabutz",
    description: "Terimakasih ya kaka manjila",
    type: 'portrait',
    isSpecial: true
  }
];

const DynamicBackground: React.FC<{ mousePosition: MousePosition }> = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Love Hearts with Electric Effect */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`love-heart-${i}`}
          className="electric-love-heart"
          style={{
            left: `${15 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`,
            transform: `translate(${mousePosition.x * 0.02 * (i + 1)}px, ${mousePosition.y * 0.02 * (i + 1)}px)`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${4 + (i % 2)}s`
          }}
        >
          <Heart size={16} className="text-pink-400" fill="currentColor" />
          <div className="electric-spark-heart">
            <Zap size={8} className="text-yellow-300" />
          </div>
        </div>
      ))}

      {/* Floating Orbs */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`orb-${i}`}
          className="floating-orb"
          style={{
            left: `${10 + (i * 8)}%`,
            top: `${15 + (i * 6)}%`,
            transform: `translate(${mousePosition.x * 0.03 * (i + 1)}px, ${mousePosition.y * 0.03 * (i + 1)}px)`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + (i % 3)}s`
          }}
        />
      ))}

      {/* Electric Particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className={`electric-particle ${i % 3 === 0 ? 'love-particle' : ''}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${mousePosition.x * 0.08 * Math.sin(i)}px, ${mousePosition.y * 0.08 * Math.cos(i)}px)`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Love Lightning Bolts */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={`love-lightning-${i}`}
          className="love-lightning-bolt"
          style={{
            left: `${25 + (i * 20)}%`,
            top: `${15 + (i * 18)}%`,
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) rotate(${i * 45}deg)`,
            animationDelay: `${i * 0.8}s`
          }}
        >
          <div className="love-bolt-line"></div>
          <Heart size={12} className="text-pink-300 love-bolt-heart" fill="currentColor" />
        </div>
      ))}

      {/* Lightning Effects */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`lightning-${i}`}
          className="lightning-effect"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${10 + (i * 12)}%`,
            transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px) rotate(${i * 60}deg)`,
            animationDelay: `${i * 1.2}s`
          }}
        />
      ))}

      {/* Dynamic Gradient */}
      <div
        className="gradient-overlay"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 0.15}% ${mousePosition.y * 0.15}%, rgba(6, 182, 212, 0.12) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 100%)`
        }}
      />
    </div>
  );
};

import lagu from "./assets/lagu.mp3"; // import audio lokal

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(true); // mulai muted
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => { });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setIsMuted(newVolume === 0); // otomatis mute kalau volume 0
      audioRef.current.muted = newVolume === 0;
    }
  };

  // 🔥 auto play saat component mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  // opsi unmute otomatis setelah beberapa detik
  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }, 1000); // 1 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-cyan-400/50 electric-glow-strong z-50">
      <audio ref={audioRef} loop preload="metadata" src={lagu}></audio>

      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50"
        >
          {isPlaying ? (
            <Pause size={20} className="text-white" />
          ) : (
            <Play size={20} className="text-white ml-1" />
          )}
        </button>

        <div className="flex items-center space-x-3">
          <Volume2 size={18} className="text-cyan-300" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 electric-slider"
          />
        </div>

        <div className="flex items-center space-x-1">
          <Music size={18} className="text-cyan-300" />
          <Sparkles size={14} className="text-yellow-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
const SpecialLetterButton: React.FC<{ onClick: () => void; isActive: boolean }> = ({ onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 z-50 shadow-2xl ${isActive ? 'scale-110 rotate-12 shadow-pink-400/50' : 'hover:shadow-pink-400/40'
        }`}
      style={{
        boxShadow: isActive
          ? '0 0 30px rgba(244, 114, 182, 0.6), 0 0 60px rgba(244, 114, 182, 0.3)'
          : '0 8px 25px rgba(0, 0, 0, 0.3)'
      }}
    >
      <Mail size={28} className="text-white animate-pulse" />

      {/* Floating hearts around button */}
      {isActive && Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="absolute floating-heart"
          style={{
            left: `${50 + Math.cos(i * 90 * Math.PI / 180) * 40}px`,
            top: `${50 + Math.sin(i * 90 * Math.PI / 180) * 40}px`,
            animationDelay: `${i * 0.3}s`
          }}
        >
          <Heart size={12} className="text-pink-300" fill="currentColor" />
        </div>
      ))}
    </button>
  );
};

const PhotoCard: React.FC<{ photo: Photo; onClick: () => void; index: number; isSpecial?: boolean }> = ({
  photo,
  onClick,
  index,
  isSpecial = false
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getCardClasses = () => {
    if (isSpecial) {
      return "special-photo-card";
    }
    return photo.type === 'landscape' ? 'landscape-photo-card' : 'portrait-photo-card';
  };

  return (
    <div
      className={`group relative cursor-pointer transition-all duration-700 hover:scale-105 hover:z-20 ${getCardClasses()}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.15}s`,
        transform: isSpecial ? 'none' : `rotate(${-2 + Math.random() * 4}deg)`
      }}
    >
      <div className={`photo-container overflow-hidden ${isSpecial ? 'special-border' : 'elegant-border'}`}>
        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <div className="flex items-center mb-3">
            <Zap size={18} className="text-yellow-400 mr-3 animate-pulse" />
            <h3 className="font-semibold text-white text-lg">{photo.title}</h3>
          </div>
          <p className="text-cyan-200 text-sm mb-4 leading-relaxed">{photo.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
                className={`p-2 rounded-full transition-all duration-300 electric-love-button ${isLiked ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white scale-110 electric-glow-pink' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
              >
                <Heart size={14} fill={isLiked ? 'currentColor' : 'none'} />
                {isLiked && (
                  <div className="absolute inset-0 animate-ping">
                    <Heart size={14} className="text-pink-300" fill="currentColor" />
                  </div>
                )}
              </button>

              <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Share2 size={14} />
              </button>

              <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Download size={14} />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="electric-love-indicator">
                <Heart size={12} className="text-pink-400 animate-pulse" fill="currentColor" />
                <Zap size={10} className="text-yellow-400 ml-1" />
              </div>
              <Sparkles size={14} className="text-yellow-400 animate-pulse" />
              <Camera size={14} className="text-cyan-300" />
            </div>
          </div>
        </div>

        {/* Floating Sparks on Hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`floating-spark ${i % 2 === 0 ? 'love-spark' : ''}`}
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${15 + (i * 12)}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              >
                {i % 2 === 0 ? (
                  <Heart size={6} className="text-pink-400" fill="currentColor" />
                ) : (
                  <Zap size={6} className="text-yellow-400" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Modal: React.FC<{ photo: Photo | null; onClose: () => void }> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl max-h-[90vh] bg-black/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-400/50 electric-glow-strong animate-modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />

          {/* Electric Frame Effect */}
          <div className="absolute inset-0 border-4 border-transparent electric-frame-animation" />
        </div>

        <div className="p-8 bg-gradient-to-t from-black/90 to-transparent">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-500 rounded-full flex items-center justify-center electric-love-glow">
                <div className="relative">
                  <Heart size={20} className="text-white animate-pulse" fill="currentColor" />
                  <Zap size={12} className="text-yellow-300 absolute -top-1 -right-1 animate-bounce" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">{photo.title}</h2>
                <p className="text-cyan-200 text-xl">{photo.description}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {photo.isSpecial && (
                <div className="electric-special-indicator">
                  <Heart size={24} className="text-pink-400 animate-pulse" fill="currentColor" />
                  <Bolt size={16} className="text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
                </div>
              )}
              <Sparkles size={24} className="text-yellow-400 animate-spin" />
              <Camera size={24} className="text-cyan-300" />
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 hover:scale-110 border border-cyan-400/40"
        >
          <span className="text-2xl">×</span>
        </button>
      </div>
    </div>
  );
};

const SpecialPhotosModal: React.FC<{ isOpen: boolean; onClose: () => void; photos: Photo[] }> = ({
  isOpen,
  onClose,
  photos
}) => {
  const [selectedSpecialPhoto, setSelectedSpecialPhoto] = useState<Photo | null>(null);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-lg flex items-center justify-center z-50 p-6"
        onClick={onClose}
      >
        <div
          className="relative max-w-4xl w-full bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-black/60 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-pink-400/50 electric-glow-pink animate-modal-enter"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-8 border-b border-pink-400/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center electric-love-glow">
                  <div className="relative">
                    <Mail size={28} className="text-white animate-pulse" />
                    <Heart size={12} className="text-pink-200 absolute -top-1 -right-1 animate-bounce" fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Kaka Manjila Tercinta Voltix</h2>
                  <p className="text-pink-200 text-lg">Terimaksih Banyak Buat Kanjil Tercintah Kitaa ⚡💕</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="electric-love-heart-special"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <Heart size={20} className="text-pink-400 animate-pulse" fill="currentColor" />
                    <Zap size={10} className="text-yellow-300 absolute -top-1 -right-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Special Photos Grid */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative cursor-pointer transition-all duration-500 hover:scale-105"
                  onClick={() => setSelectedSpecialPhoto(photo)}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="special-photo-container overflow-hidden rounded-3xl border-2 border-pink-400/40 hover:border-pink-400/80 transition-all duration-300">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Pink Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center mb-2">
                        <div className="electric-love-indicator mr-3">
                          <Heart size={16} className="text-pink-400 animate-pulse" fill="currentColor" />
                          <Zap size={8} className="text-yellow-300 absolute -top-1 -right-1" />
                        </div>
                        <h3 className="font-bold text-white text-lg">{photo.title}</h3>
                      </div>
                      <p className="text-pink-200 text-sm">{photo.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 hover:scale-110 border border-pink-400/40"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>
      </div>

      {/* Special Photo Modal */}
      <Modal photo={selectedSpecialPhoto} onClose={() => setSelectedSpecialPhoto(null)} />
    </>
  );
};

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 50, y: 50 });
  const [showSpecialPhotos, setShowSpecialPhotos] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <DynamicBackground mousePosition={mousePosition} />
      <MusicPlayer />
      <SpecialLetterButton
        onClick={() => setShowSpecialPhotos(true)}
        isActive={showSpecialPhotos}
      />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8 animate-float">
            <div className="relative mr-6">
              <div className="electric-love-logo">
                <Heart size={48} className="text-pink-400 animate-pulse" fill="currentColor" />
                <Zap size={32} className="text-yellow-400 absolute top-0 right-0 animate-bounce" />
              </div>
              <div className="absolute inset-0 animate-ping opacity-30">
                <Heart size={48} className="text-pink-400" fill="currentColor" />
              </div>
            </div>

            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 animate-gradient-text">
              VOLTIX GALERY
            </h1>

            <div className="relative ml-6">
              <div className="electric-love-logo">
                <Sparkles size={48} className="text-cyan-400 animate-spin-slow" />
                <Heart size={24} className="text-pink-400 absolute top-2 right-2 animate-pulse" fill="currentColor" />
              </div>
              <div className="absolute inset-0 animate-ping opacity-30">
                <Sparkles size={48} className="text-cyan-400" />
              </div>
            </div>
          </div>

          <p className="text-xl text-cyan-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Terimakasih buat kalian semua yang udah berjuang bareng, dan tentunya buat kaka manjila yang keren ⚡💕
          </p>
        </div>

        {/* Unified Photo Gallery */}
          <div className="unified-gallery">
            {mainPhotos.map((photo, index) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onClick={() => setSelectedPhoto(photo)}
                index={index}
              />
            ))}
          </div>

        {/* Elegant Footer */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="inline-flex items-center space-x-4 bg-black/40 backdrop-blur-xl rounded-full px-8 py-4 border border-cyan-400/40 electric-glow">
            <div className="electric-love-indicator">
              <Heart size={18} className="text-pink-400 animate-pulse" fill="currentColor" />
              <Zap size={12} className="text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-cyan-300 font-medium">Proud Of You Guys</span>
            <div className="electric-love-indicator">
              <Sparkles size={18} className="text-cyan-400 animate-spin-slow" />
              <Heart size={10} className="text-pink-400 absolute top-0 right-0 animate-pulse" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Photo Modal */}
      <Modal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />

      {/* Special Photos Modal */}
      <SpecialPhotosModal
        isOpen={showSpecialPhotos}
        onClose={() => setShowSpecialPhotos(false)}
        photos={specialPhotos}
      />
    </div>
  );
}

export default App;