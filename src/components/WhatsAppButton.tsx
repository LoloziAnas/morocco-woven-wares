import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '+212600000000'; // Replace with actual WhatsApp number
  const message = 'Hello! I\'m interested in your Moroccan clothing collection.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 whatsapp-btn p-4 rounded-full shadow-lg"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;