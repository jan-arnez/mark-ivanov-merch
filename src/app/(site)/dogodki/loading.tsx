const Loading = () => {
  return <LoadingSkeleton />;
};

export default Loading;

function LoadingSkeleton() {
  return (
    <div className="container pt-28 min-h-screen space-y-8 pb-8">
      <div className="text-center text-5xl text-stone-900 font-bold">
        Dogodki
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-4 animate-pulse">
        <div className="w-full h-full min-h-[300px] bg-stone-300" />
        <div className="w-full h-full min-h-[300px] bg-stone-300" />
        <div className="w-full h-full min-h-[300px] bg-stone-300" />
        <div className="w-full h-full min-h-[300px] bg-stone-300" />
        <div className="w-full h-full min-h-[300px] bg-stone-300" />
        <div className="w-full h-full min-h-[300px] bg-stone-300" />
      </div>
    </div>
  );
}
