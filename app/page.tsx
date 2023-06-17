export const metadata: Metadata = {
  title: 'Home',
  datePublished: '1/1/2023',
  breadcrumbs: [{ name: 'Home', href: '/' }]
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-2xl">Next.js Starter</h1>
      </div>
    </main>
  );
}
