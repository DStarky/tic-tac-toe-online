export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-8 container mx-auto pt-[100px]">
      <h1 className="text-4xl font-bold">Игра {id}</h1>
    </div>
  );
}
