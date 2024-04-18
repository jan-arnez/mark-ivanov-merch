const Loading = () => {
  return <LoadingSkeleton />;
};

export default Loading;

function LoadingSkeleton() {
  return (
    <div className="pt-28 min-h-screen space-y-8 pb-8 animate-pulse">
      <div className="h-[400px] w-full bg-stone-300"></div>
      <div className="container py-8 space-y-4">
        <div className="w-full h-12 bg-stone-300 rounded-full" />
        <div className="w-3/4 h-12 bg-stone-300 rounded-full" />
      </div>
    </div>
  );
}
