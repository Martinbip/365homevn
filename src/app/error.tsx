'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-neutral-800 mb-2">
          Đã xảy ra lỗi
        </h2>
        <p className="text-neutral-600 mb-6">
          {error.message || 'Xin lỗi, chúng tôi đang gặp sự cố. Vui lòng thử lại sau.'}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-neutral-800 text-white font-medium rounded hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-800"
        >
          Thử lại
        </button>
      </div>
    </div>
  );
}
