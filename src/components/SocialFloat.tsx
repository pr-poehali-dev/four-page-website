import Icon from '@/components/ui/icon';

const SocialFloat = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3 animate-slide-in-right">
      <a 
        href="https://t.me/username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary/90 to-secondary/90 backdrop-blur-sm hover:from-primary hover:to-secondary transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:scale-110"
        aria-label="Telegram"
      >
        <Icon name="Send" size={24} className="text-white" />
      </a>
      
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366]/90 to-[#128C7E]/90 backdrop-blur-sm hover:from-[#25D366] hover:to-[#128C7E] transition-all duration-300 hover:shadow-xl hover:shadow-green-500/50 hover:scale-110"
        aria-label="WhatsApp"
      >
        <Icon name="MessageCircle" size={24} className="text-white" />
      </a>
      
      <a 
        href="https://vk.com/username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#0077FF]/90 to-[#0055CC]/90 backdrop-blur-sm hover:from-[#0077FF] hover:to-[#0055CC] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-110"
        aria-label="VK"
      >
        <span className="text-xl text-white font-bold">VK</span>
      </a>
    </div>
  );
};

export default SocialFloat;
