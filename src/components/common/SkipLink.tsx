export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-neutral-900 focus:text-white focus:font-medium focus:rounded focus:shadow-lg"
    >
      Bỏ qua đến nội dung chính
    </a>
  );
}
