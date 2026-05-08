export function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute -right-[8%] -top-[8%] h-[50%] w-[50%] rounded-full bg-violet-500/20 blur-[100px]" />
      <div className="absolute -bottom-[8%] -left-[8%] h-[45%] w-[45%] rounded-full bg-violet-500/20 blur-[110px]" />
      <div className="absolute -bottom-[8%] -right-[8%] h-[42%] w-[42%] rounded-full bg-accent/20 blur-[105px]" />
    </div>
  );
}
