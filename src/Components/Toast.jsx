export default function Toast({ notifications = [], onClose = () => {} }) {
  return (
    <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`max-w-sm w-full px-4 py-2 rounded shadow-md flex items-center justify-between gap-2
            ${n.type === "success" ? "bg-green-600 text-white" : "bg-gray-800 text-white"}`}
          role="status"
        >
          <div className="text-sm">{n.message}</div>
          <button
            onClick={() => onClose(n.id)}
            aria-label="close"
            className="text-white/90 hover:opacity-80 ml-3"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}