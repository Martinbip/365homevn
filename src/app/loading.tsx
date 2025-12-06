export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-neutral-200 border-t-neutral-800 mb-4" />
        <p className="text-neutral-600 font-medium">Đang tải...</p>
      </div>
    </div>
  );
}
