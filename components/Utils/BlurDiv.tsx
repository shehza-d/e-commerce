export default function BlurDiv({ className }: { className: string }) {
  return (
    <div
      className={`absolute right-40 top-56 h-36 w-36 bg-primary blur-3xl ${className}`}
    ></div>
  );
}
