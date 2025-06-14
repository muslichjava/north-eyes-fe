type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-[5px] z-50 flex items-center justify-center overflow-auto">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative">
        <div className="mt-5">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
